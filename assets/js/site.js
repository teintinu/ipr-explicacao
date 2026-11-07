/* ==========================================================================
   IPR — Explicação · site.js
   Tema, navegação, tooltips, revelação ao rolar e demonstrações simples.
   Sem dependências. Funciona em file:// .
   ========================================================================== */
(function () {
  "use strict";

  var reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Tema ---------------- */

  function readStoredTheme() {
    try {
      return localStorage.getItem("ipr-theme");
    } catch (e) {
      return null;
    }
  }

  function storeTheme(value) {
    try {
      localStorage.setItem("ipr-theme", value);
    } catch (e) {
      /* ignorado */
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var btn = document.querySelector("[data-theme-toggle]");
    if (btn) {
      var dark = theme === "dark";
      btn.setAttribute(
        "aria-label",
        dark ? "Mudar para tema claro" : "Mudar para tema escuro"
      );
      btn.setAttribute("title", dark ? "Tema claro" : "Tema escuro");
    }
  }

  var stored = readStoredTheme();
  var prefersDark =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  var forced = null;
  try {
    forced = new URLSearchParams(window.location.search).get("theme");
  } catch (e) {
    forced = null;
  }
  if (forced === "dark" || forced === "light") {
    // Pré-visualização por link: não grava, para não prender o visitante no tema.
    applyTheme(forced);
  } else {
    applyTheme(stored || (prefersDark ? "dark" : "light"));
  }

  document.addEventListener("click", function (ev) {
    var btn = ev.target.closest("[data-theme-toggle]");
    if (!btn) return;
    var current = document.documentElement.getAttribute("data-theme");
    var next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    storeTheme(next);
  });

  /* ---------------- Navegação móvel ---------------- */

  var navToggle = document.querySelector("[data-nav-toggle]");
  var nav = document.getElementById("menu-principal");

  function closeNav() {
    if (!nav || !navToggle) return;
    nav.setAttribute("data-open", "false");
    navToggle.setAttribute("aria-expanded", "false");
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var open = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", open ? "false" : "true");
      navToggle.setAttribute("aria-expanded", open ? "false" : "true");
    });

    nav.addEventListener("click", function (ev) {
      if (ev.target.closest("a")) closeNav();
    });

    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape") closeNav();
    });

    document.addEventListener("click", function (ev) {
      if (!nav.contains(ev.target) && !navToggle.contains(ev.target)) closeNav();
    });
  }

  /* ---------------- Tooltips ---------------- */

  var tip = document.createElement("div");
  tip.className = "tooltip";
  tip.id = "tooltip-flutuante";
  tip.setAttribute("role", "tooltip");
  tip.setAttribute("data-show", "false");
  document.body.appendChild(tip);

  var activeTerm = null;

  function positionTip(term) {
    var r = term.getBoundingClientRect();
    var tw = tip.offsetWidth;
    var th = tip.offsetHeight;
    var margin = 12;

    var top = r.top - th - 10;
    var placement = "top";
    if (top < margin) {
      top = r.bottom + 10;
      placement = "bottom";
    }

    var left = r.left + r.width / 2 - tw / 2;
    left = Math.max(margin, Math.min(left, window.innerWidth - tw - margin));

    tip.style.top = Math.round(top) + "px";
    tip.style.left = Math.round(left) + "px";
    tip.setAttribute("data-placement", placement);
  }

  function showTip(term) {
    var html = term.getAttribute("data-tip");
    if (!html) return;
    var more = term.getAttribute("data-more");
    tip.innerHTML =
      html + (more ? '<a href="' + more + '">Ler a explicação completa</a>' : "");
    tip.setAttribute("data-show", "true");
    activeTerm = term;
    term.setAttribute("aria-describedby", "tooltip-flutuante");
    positionTip(term);
  }

  function hideTip() {
    tip.setAttribute("data-show", "false");
    if (activeTerm) {
      activeTerm.removeAttribute("aria-describedby");
      activeTerm = null;
    }
  }

  document.querySelectorAll(".term").forEach(function (term) {
    term.addEventListener("mouseenter", function () {
      showTip(term);
    });
    term.addEventListener("mouseleave", hideTip);
    term.addEventListener("focus", function () {
      showTip(term);
    });
    term.addEventListener("blur", hideTip);
    term.addEventListener("click", function (ev) {
      ev.preventDefault();
      if (activeTerm === term) {
        hideTip();
      } else {
        showTip(term);
      }
    });
  });

  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape") hideTip();
  });

  window.addEventListener("scroll", function () {
    if (activeTerm) positionTip(activeTerm);
  });

  window.addEventListener("resize", function () {
    if (activeTerm) positionTip(activeTerm);
  });

  /* ---------------- Revelação ao rolar ---------------- */

  var revealables = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealables.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    revealables.forEach(function (el) {
      io.observe(el);
    });
  }

  /* ---------------- Alternadores genéricos ---------------- */

  document.querySelectorAll("[data-switch]").forEach(function (group) {
    var buttons = group.querySelectorAll("[data-set]");
    var panes = group.querySelectorAll("[data-when]");

    function activate(value) {
      group.setAttribute("data-value", value);
      buttons.forEach(function (b) {
        b.setAttribute("aria-pressed", b.getAttribute("data-set") === value ? "true" : "false");
      });
      panes.forEach(function (pane) {
        var match = pane.getAttribute("data-when") === value;
        pane.hidden = !match;
        if (match) {
          pane.querySelectorAll("[data-at]").forEach(function (el) {
            el.classList.add("on");
          });
        }
      });
    }

    buttons.forEach(function (b) {
      b.addEventListener("click", function () {
        activate(b.getAttribute("data-set"));
      });
    });

    var initial = group.getAttribute("data-value");
    if (initial) activate(initial);
  });

  /* ---------------- Demonstração: comentário anônimo ---------------- */

  document.querySelectorAll("[data-comment-demo]").forEach(function (demo) {
    var buttons = demo.querySelectorAll("[data-anon]");
    var author = demo.querySelector("[data-author]");
    var bubble = demo.querySelector("[data-bubble]");
    var realName = author ? author.getAttribute("data-name") || author.textContent : "";
    var anonLabel = author ? author.getAttribute("data-anon-label") || "Conta anônima" : "";

    function setAnon(isAnon) {
      buttons.forEach(function (b) {
        b.setAttribute("aria-pressed", b.getAttribute("data-anon") === String(isAnon) ? "true" : "false");
      });
      if (!author || !bubble) return;
      author.textContent = isAnon ? anonLabel : realName;
      bubble.classList.toggle("bubble--anon", isAnon);
    }

    buttons.forEach(function (b) {
      b.addEventListener("click", function () {
        setAnon(b.getAttribute("data-anon") === "true");
      });
    });

    setAnon(true);
  });

  /* ---------------- Demonstração: orçamento do navegador ---------------- */

  document.querySelectorAll("[data-budget]").forEach(function (demo) {
    var range = demo.querySelector('input[type="range"]');
    var fill = demo.querySelector(".meter > i");
    var value = demo.querySelector("[data-budget-value]");
    if (!range || !fill || !value) return;

    var max = parseInt(range.getAttribute("max"), 10) || 512;

    function update() {
      var v = parseInt(range.value, 10) || 0;
      fill.style.width = Math.min(100, (v / max) * 100).toFixed(1) + "%";
      value.textContent = v + " MB";
    }

    range.addEventListener("input", update);
    update();
  });

  /* ---------------- Ano no rodapé ---------------- */

  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();

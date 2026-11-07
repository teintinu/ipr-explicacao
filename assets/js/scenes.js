/* ==========================================================================
   UPR — Explicação · scenes.js
   Motor de linha do tempo para as cenas explicativas.
   Sem dependências. Funciona em file:// .
   ========================================================================== */
(function () {
  "use strict";

  var reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function num(value, fallback) {
    var n = parseInt(value, 10);
    return isNaN(n) ? fallback : n;
  }

  function setupScene(scene) {
    var artItems = Array.prototype.slice.call(scene.querySelectorAll("svg [data-at]"));
    var captions = Array.prototype.slice.call(
      scene.querySelectorAll(".scene-caps li[data-at]")
    );

    if (!artItems.length && !captions.length) return;

    var times = [];
    artItems.forEach(function (el) {
      times.push(num(el.getAttribute("data-at"), 0));
    });
    captions.forEach(function (el) {
      times.push(num(el.getAttribute("data-at"), 0));
    });

    var maxAt = times.length ? Math.max.apply(null, times) : 0;
    var duration = num(scene.getAttribute("data-duration"), maxAt + 2800);
    var loop = scene.getAttribute("data-loop") === "true";

    var progress = scene.querySelector(".scene-progress > i");
    var toggleBtn = scene.querySelector('[data-act="toggle"]');
    var replayBtn = scene.querySelector('[data-act="replay"]');

    var elapsed = 0;
    var playing = false;
    var rafId = null;
    var lastTs = 0;
    var finished = false;
    var started = false;

    function captionIndexAt(t) {
      var idx = 0;
      for (var i = 0; i < captions.length; i++) {
        if (t >= num(captions[i].getAttribute("data-at"), 0)) idx = i;
      }
      return idx;
    }

    function render(t) {
      artItems.forEach(function (el) {
        var at = num(el.getAttribute("data-at"), 0);
        el.classList.toggle("on", t >= at);
      });

      var activeIdx = captionIndexAt(t);
      captions.forEach(function (el, i) {
        el.classList.toggle("on", i === activeIdx);
      });

      if (progress) {
        var pct = Math.max(0, Math.min(1, t / duration));
        progress.style.width = (pct * 100).toFixed(1) + "%";
      }
    }

    function setToggleLabel() {
      if (!toggleBtn) return;
      // Com um botão "Recomeçar" ao lado, esconder o toggle no fim evita
      // dois botões idênticos.
      toggleBtn.hidden = finished && Boolean(replayBtn);
      if (finished) {
        toggleBtn.textContent = "Recomeçar";
      } else if (playing) {
        toggleBtn.textContent = "Pausar";
      } else {
        toggleBtn.textContent = elapsed > 0 ? "Continuar" : "Reproduzir";
      }
    }

    function stop() {
      playing = false;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = null;
      setToggleLabel();
    }

    function tick(ts) {
      if (!playing) return;
      if (!lastTs) lastTs = ts;
      var delta = ts - lastTs;
      lastTs = ts;
      elapsed += delta;

      if (elapsed >= duration) {
        elapsed = duration;
        render(elapsed);
        finished = true;
        stop();
        if (loop) {
          setTimeout(function () {
            if (!playing) start(true);
          }, 1400);
        }
        return;
      }

      render(elapsed);
      rafId = requestAnimationFrame(tick);
    }

    function start(fromZero) {
      if (toggleBtn) toggleBtn.hidden = false;
      if (fromZero) {
        elapsed = 0;
        finished = false;
      }
      if (finished) {
        elapsed = 0;
        finished = false;
      }
      playing = true;
      lastTs = 0;
      setToggleLabel();
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(tick);
    }

    function seekToCaption(index) {
      var at = num(captions[index].getAttribute("data-at"), 0);
      stop();
      elapsed = at;
      finished = false;
      render(elapsed);
      setToggleLabel();
    }

    captions.forEach(function (el, i) {
      el.style.cursor = "pointer";
      el.setAttribute("title", "Ir para este passo");
      el.addEventListener("click", function () {
        seekToCaption(i);
      });
    });

    if (toggleBtn) {
      toggleBtn.addEventListener("click", function () {
        if (finished) {
          start(true);
        } else if (playing) {
          stop();
        } else {
          start(false);
        }
      });
    }

    if (replayBtn) {
      replayBtn.addEventListener("click", function () {
        start(true);
      });
    }

    if (reduceMotion) {
      render(duration);
      var ctl = scene.querySelector(".scene__ctl");
      if (ctl) ctl.hidden = true;
      return;
    }

    render(0);
    setToggleLabel();

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          if (started) return;
          started = true;
          start(true);
          io.disconnect();
        });
      },
      { threshold: 0.35 }
    );
    io.observe(scene);
  }

  var scenes = document.querySelectorAll("[data-scene]");
  scenes.forEach(function (scene) {
    // Cenas dentro de painéis alternáveis são estáticas: o alternador
    // revela os elementos e não há linha do tempo a rodar.
    if (scene.closest("[data-when]")) return;
    setupScene(scene);
  });
})();

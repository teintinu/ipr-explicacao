import type { FeedPost } from "./feed";

/** Conteúdo de demonstração. Gerado por scripts/build-feed.py a partir de raw/. */
export const feedPosts: FeedPost[] = [
  {
    "id": "m034",
    "authorId": "luisa-fernanda",
    "kind": "video",
    "text": "Cheguei antes do sol furar a neblina e fiquei com medo de espantar o silêncio. Eles atravessaram sem pressa, um atrás do outro, e eu só respirei depois que sumiram.",
    "media": {
      "src": "/media/16581829_1440_2560_60fps.mp4",
      "poster": "/media/16581829_1440_2560_60fps.jpg",
      "ratio": "9:16",
      "duration": 8
    },
    "rating": 18,
    "likes": 540,
    "views": 26000,
    "time": "há 2 horas",
    "comments": [
      {
        "authorId": "otavio-luis",
        "text": "Travessia molhada é o teste de coragem de qualquer trilha, e eles fizeram parecer fácil.",
        "likes": 0
      },
      {
        "authorId": "maria-clara",
        "text": "Neblina densa com sol baixo rende foto linda e visibilidade péssima; quem atravessa merece respeito.",
        "likes": 0,
        "alerta": true
      },
      {
        "authorId": "igor-matheus",
        "text": "Fiquei dividido: o assunto é a luz ou as pessoas? Estão competindo no quadro.",
        "likes": 12
      }
    ]
  },
  {
    "id": "m026",
    "authorId": "beatriz-helena",
    "kind": "photo",
    "text": "Chá de gengibre pra espantar o frio da manhã e um pacote que eu ainda não abri. Tem dia que a pausa é o programa inteiro.",
    "media": {
      "src": "/media/12881706_2160_3840_25fps.jpg",
      "poster": "/media/12881706_2160_3840_25fps.jpg",
      "ratio": "9:16"
    },
    "rating": 10,
    "likes": 340,
    "views": 12000,
    "time": "há 2 horas",
    "comments": [
      {
        "authorId": "cafe-aurora",
        "text": "Vidro canelado segura a temperatura na mão, dá pra sentir quando o chá começou a esfriar.",
        "likes": 3
      },
      {
        "authorId": "juliana-rosa",
        "text": "Queria saber de onde vem esse tempo. Aqui em casa chá só acontece depois que os dois dormem.",
        "likes": 12
      },
      {
        "authorId": "livraria-pagina-viva",
        "text": "Pausa com pacote fechado em cima da mesa é autocontrole que eu não tenho.",
        "likes": 2
      }
    ]
  },
  {
    "id": "t032",
    "authorId": "otavio-luis",
    "kind": "note",
    "text": "Subi sem pressa hoje e cheguei no alto já com o sol baixo. Trilha não é competição: quem para pra olhar chega igual e vê mais. A mata não tem cronograma.",
    "rating": 0,
    "likes": 96,
    "views": 3400,
    "time": "há 9 horas",
    "comments": [
      {
        "authorId": "trilha-norte",
        "text": "Nosso combinado é sempre sair cedo e avisar o horário de volta. Pressa na trilha é o que mais causa acidente.",
        "likes": 12
      },
      {
        "authorId": "luisa-fernanda",
        "text": "E a luz do fim da tarde é o prêmio de quem respeitou o tempo do caminho.",
        "likes": 0
      }
    ]
  },
  {
    "id": "t017",
    "authorId": "ana-maria",
    "kind": "question",
    "text": "Preciso de ajuda de verdade: meu pai está aprendendo a usar o celular novo e esquece tudo no dia seguinte. Já tentei escrever no caderno, ele não abre. Alguém já ensinou alguém assim? O que funcionou?",
    "rating": 0,
    "likes": 47,
    "views": 1900,
    "time": "há 12 minutos",
    "comments": [
      {
        "authorId": "maria-clara",
        "text": "Uma coisa que costuma ajudar é repetir sempre o mesmo caminho, na mesma ordem, e deixar o atalho na tela inicial. Memória de rotina cansa menos que memória de nome.",
        "likes": 21
      },
      {
        "authorId": "carlos-eduardo",
        "text": "Paciência vale mais que tutorial. Meu avô aprendeu a atender chamada depois de duas semanas, e só porque a gente parou de corrigir cada erro dele.",
        "likes": 12
      }
    ]
  },
  {
    "id": "t011",
    "authorId": "ana-beatriz",
    "kind": "question",
    "text": "Como vocês checam notícia que só aparece em print de grupo? Recebi imagem de um suposto alagamento com trânsito parado, sem fonte e sem data. Já vi a mesma foto circulando em outro ano. Por onde começar sem parecer chata?",
    "rating": 14,
    "likes": 43,
    "views": 15000000,
    "time": "há 40 minutos",
    "comments": [
      {
        "authorId": "maria-clara",
        "text": "Busca a imagem em ferramenta de busca reversa, confere a placa dos carros e a sombra, e liga para o órgão que cuida da via. Sem confirmação, não publica.",
        "likes": 8
      },
      {
        "authorId": "igor-matheus",
        "text": "Print de grupo é o pior formato possível: perde autor, perde data e perde contexto. Trata como boato até ver o original.",
        "likes": 21
      }
    ]
  },
  {
    "id": "t014",
    "authorId": "gustavo-henrique",
    "kind": "opinion",
    "text": "Meu time foi elogiado por entregar a função em uma semana. A gente entregou em uma semana porque trabalhou dez dias seguidos, até depois da meia-noite. Elogiar isso é contratar o próximo esgotamento com aplauso. Produtividade que depende de insônia não é processo.",
    "rating": 10,
    "likes": 498,
    "views": 15000000,
    "time": "há 6 horas",
    "comments": [
      {
        "authorId": "juliana-rosa",
        "text": "Reconheci minha rotina nesse relato, só que sem elogio nenhum no fim.",
        "likes": 3
      },
      {
        "authorId": "patricia-elaine",
        "text": "E depois chega no consultório com dor no peito dizendo que é só cansaço. Não é. Uma hora o corpo cobra a conta com juros.",
        "likes": 21
      }
    ]
  },
  {
    "id": "m022",
    "authorId": "otavio-luis",
    "kind": "video",
    "text": "Passei a manhã parado embaixo da árvore esperando alguém passar, e quando passou eu quase esqueci de filmar. Viajar é isso: ficar quieto num lugar até ele te mostrar alguma coisa.",
    "media": {
      "src": "/media/16522122_1440_2560_60fps.mp4",
      "poster": "/media/16522122_1440_2560_60fps.jpg",
      "ratio": "3:4",
      "duration": 8
    },
    "rating": 12,
    "likes": 312,
    "views": 26000,
    "time": "há 8 minutos",
    "comments": [
      {
        "authorId": "luisa-fernanda",
        "text": "A sombra das galhas desenha o chão inteiro, dá pra fotografar só isso o dia todo.",
        "likes": 21
      },
      {
        "authorId": "kaique-vinicius",
        "text": "Já esperei assim no sol e voltei sem nada; você teve sorte de gente.",
        "likes": 1
      },
      {
        "authorId": "thiago-andre",
        "text": "Ficar esperando não é viajar, é esperar.",
        "likes": 8
      }
    ]
  },
  {
    "id": "t026",
    "authorId": "rafael-augusto",
    "kind": "opinion",
    "text": "Pedir ciclovia não é briga com motorista. Rua que serve pra bike serve pro pedestre, pro entregador e pra quem empurra carrinho. O problema nunca foi o espaço, foi a pressa.",
    "rating": 10,
    "likes": 208,
    "views": 240000,
    "time": "há 2 horas",
    "comments": [
      {
        "authorId": "kaique-vinicius",
        "text": "É isso. A rua que assusta o ciclista é a mesma que assusta a criança e o entregador. Quem anda de bike só sente primeiro.",
        "likes": 2
      },
      {
        "authorId": "rodrigo-jose",
        "text": "Enquanto não fiscalizar moto em calçada e carro parado em vaga de carga, ciclovia pintada no chão é enfeite caro.",
        "likes": 2
      }
    ]
  },
  {
    "id": "t015",
    "authorId": "patricia-elaine",
    "kind": "note",
    "text": "Plantão de dezoito horas. Atendi, expliquei e repeti a explicação devagar pra quem não entendia, e ainda ouvi que eu não estava nem aí. Saí com o pé doendo e a cabeça em silêncio. Amanhã tem outro. Não é reclamação, é registro de que a gente cansa.",
    "rating": 12,
    "likes": 73,
    "views": 15000000,
    "time": "há 1 hora",
    "comments": [
      {
        "authorId": "sabrina-luiza",
        "text": "Escrevi uma música sobre esse cansaço uma vez. Nunca ficou boa, mas a letra entendeu o recado.",
        "likes": 12
      },
      {
        "authorId": "kaique-vinicius",
        "text": "Quem espera cinco horas num corredor não vê o plantão de dentro. Falta gente, e ninguém quer discutir isso em ano de eleição.",
        "likes": 21
      }
    ]
  },
  {
    "id": "m002",
    "authorId": "fernanda-luisa",
    "kind": "video",
    "text": "O Tico não entra na água, mas também não sai da areia. Fica parado ali, com a pata molhada, esperando eu decidir a hora de ir embora.",
    "media": {
      "src": "/media/16809377_2160_3840_30fps.mp4",
      "poster": "/media/16809377_2160_3840_30fps.jpg",
      "ratio": "9:16",
      "duration": 8
    },
    "rating": 10,
    "likes": 213,
    "views": 1200000,
    "time": "há 2 horas",
    "comments": [
      {
        "authorId": "marcelo-antonio",
        "text": "Cachorro na praia é a melhor companhia que tem. O meu era igual, parava sempre no mesmo ponto da beira.",
        "likes": 3
      },
      {
        "authorId": "maria-clara",
        "text": "Vale checar a areia antes de ele deitar. Cachorro não reclama de queimadura, só levanta a pata e continua.",
        "likes": 0,
        "alerta": true
      }
    ]
  },
  {
    "id": "m023",
    "authorId": "otavio-luis",
    "kind": "photo",
    "text": "Cheguei no mirante antes do sol e o barulho já vinha de longe. Fiquei ali até a camisa ficar molhada de névoa, sem pressa nenhuma de ir embora. Tem coisa que a gente não fotografa, só fica parado escutando.",
    "media": {
      "src": "/media/13197974_2160_3840_60fps.jpg",
      "poster": "/media/13197974_2160_3840_60fps.jpg",
      "ratio": "9:16"
    },
    "rating": 0,
    "likes": 643,
    "views": 8700,
    "time": "há 2 horas",
    "comments": [
      {
        "authorId": "luisa-fernanda",
        "text": "A névoa no fim da tarde é o que salva a foto ali; meio-dia lava todo o contraste.",
        "likes": 21
      },
      {
        "authorId": "antonio-jose",
        "text": "Linda, sim. Mas essa vazão toda virou problema sério de erosão rio abaixo e ninguém quer falar disso.",
        "likes": 2
      },
      {
        "authorId": "ana-maria",
        "text": "Eu teria escorregado na pedra molhada em dois minutos.",
        "likes": 0
      }
    ]
  },
  {
    "id": "m001",
    "authorId": "luisa-fernanda",
    "kind": "video",
    "text": "Fiquei tanto tempo agachada que perdi a hora e o joelho travou. Não é a foto que eu queria de verdade, é esse barulho que eu queria levar pra casa.",
    "media": {
      "src": "/media/12292321_1080_1920_30fps.mp4",
      "poster": "/media/12292321_1080_1920_30fps.jpg",
      "ratio": "9:16",
      "duration": 7
    },
    "rating": 16,
    "likes": 214,
    "views": 91000,
    "time": "há 2 horas",
    "comments": [
      {
        "authorId": "otavio-luis",
        "text": "Água correndo entre pedra é o som que me faz voltar pra trilha toda semana.",
        "likes": 8
      },
      {
        "authorId": "igor-matheus",
        "text": "Bonito, mas correnteza assim engana: o fundo é liso e o tombo é rápido.",
        "likes": 12
      },
      {
        "authorId": "helena-cristina",
        "text": "Silêncio de água é o meu favorito. Nem preciso de mais nada no dia.",
        "likes": 0
      }
    ]
  },
  {
    "id": "m062",
    "authorId": "fernanda-luisa",
    "kind": "photo",
    "text": "Ele me recebe assim todos os dias, mesmo quando eu chego depois da meia-noite. Chegou aqui com medo de tudo e hoje decide onde a gente senta no sofá. Nove anos e o mesmo jeito de inclinar a cabeça.",
    "media": {
      "src": "/media/17215069_2160_3840_30fps.jpg",
      "poster": "/media/17215069_2160_3840_30fps.jpg",
      "ratio": "9:16"
    },
    "rating": 0,
    "likes": 712,
    "views": 8700,
    "time": "há 2 horas",
    "comments": [
      {
        "authorId": "beatriz-helena",
        "text": "O cachorro do vizinho é igual e ele jura que entende português. Acho que entende mesmo.",
        "likes": 21
      },
      {
        "authorId": "maria-clara",
        "text": "Olho azul é só genética, não é sinal de raça pura nem de saúde. Vale lembrar quando cobram caro por isso.",
        "likes": 2,
        "alerta": true
      },
      {
        "authorId": "juliana-rosa",
        "text": "Cara de quem já sabe que o passeio é às seis da manhã.",
        "likes": 2
      }
    ]
  },
  {
    "id": "t006",
    "authorId": "gustavo-henrique",
    "kind": "opinion",
    "text": "Trabalhar até tarde virou sinal de dedicação. Não é. É sinal de que o prazo era impossível e ninguém quis dizer isso em voz alta. A gente chama de cultura, mas é falta de planejamento com nome bonito.",
    "rating": 10,
    "likes": 415,
    "views": 26000,
    "time": "há 1 dia",
    "comments": [
      {
        "authorId": "patricia-elaine",
        "text": "No plantão é igual: elogiam quem fica até o fim, quando quem saiu no horário é que estava certo.",
        "likes": 3
      },
      {
        "authorId": "antonio-jose",
        "text": "Antes ficar até tarde era necessidade. Hoje é vitrine. Só que a conta chega igual no fim do mês.",
        "likes": 12
      }
    ]
  },
  {
    "id": "m025",
    "authorId": "beatriz-helena",
    "kind": "video",
    "text": "O café sai antes de eu abrir a janela, sempre. Hoje sobrou tempo de ficar de pé um pouco, só olhando o dia começar, e só depois voltei pra mesa.",
    "media": {
      "src": "/media/17088788_2160_3840_60fps.mp4",
      "poster": "/media/17088788_2160_3840_60fps.jpg",
      "ratio": "9:16",
      "duration": 7
    },
    "rating": 12,
    "likes": 148,
    "views": 8900000,
    "time": "há 8 minutos",
    "comments": [
      {
        "authorId": "ana-maria",
        "text": "Eu faço o contrário: abro a janela primeiro e o café esfria no meio do caminho. Vou tentar inverter amanhã.",
        "likes": 1
      },
      {
        "authorId": "gustavo-henrique",
        "text": "Esse alongamento de manhã resolve mais que a terceira xícara, e eu custei a aceitar isso.",
        "likes": 12
      },
      {
        "authorId": "antonio-jose",
        "text": "Bonito, mas eu preciso do café pronto antes de qualquer movimento. Sem café eu não levanto nem o braço.",
        "likes": 0
      }
    ]
  },
  {
    "id": "m050",
    "authorId": "maria-clara",
    "kind": "photo",
    "text": "Passei a manhã tentando entender como dois bichos tão pequenos se entendem tão rápido. Ainda não sei. Desconfio que a resposta esteja no jeito que um encosta a cabeça no outro.",
    "media": {
      "src": "/media/17134458_1080_1920_50fps.jpg",
      "poster": "/media/17134458_1080_1920_50fps.jpg",
      "ratio": "3:4"
    },
    "rating": 0,
    "likes": 97,
    "views": 1200000,
    "time": "há 5 horas",
    "comments": [
      {
        "authorId": "fernanda-luisa",
        "text": "Esse de bicar a cabeça do outro é limpeza e vínculo ao mesmo tempo. Casal antigo faz muito.",
        "likes": 2
      },
      {
        "authorId": "thiago-andre",
        "text": "Bonito, mas ave exótica solta na cidade é problema. Essa é de cativeiro, mas tem muita fuga por aí.",
        "likes": 21
      }
    ]
  },
  {
    "id": "m027",
    "authorId": "luisa-fernanda",
    "kind": "video",
    "text": "Cheguei antes do sol e fiquei esperando a luz cair no lugar certo. Ela não fez pose nenhuma, ficou olhando o mar até esquecer que eu estava ali.",
    "media": {
      "src": "/media/16928387_2160_3840_50fps.mp4",
      "poster": "/media/16928387_2160_3840_50fps.jpg",
      "ratio": "3:4",
      "duration": 8
    },
    "rating": 0,
    "likes": 612,
    "views": 3400000,
    "time": "há 1 dia",
    "comments": [
      {
        "authorId": "igor-matheus",
        "text": "O horizonte está um grau torto. Eu vejo isso e estrago a poesia da foto.",
        "likes": 1
      },
      {
        "authorId": "marcelo-antonio",
        "text": "Quem cresceu perto do mar sabe que essa luz dura pouco. Você chegou na hora.",
        "likes": 2
      },
      {
        "authorId": "coletivo-mare",
        "text": "Dia de mar assim é bonito e deixa a areia cheia do que não é dela.",
        "likes": 2
      }
    ]
  },
  {
    "id": "m045",
    "authorId": "wagner-luis",
    "kind": "video",
    "text": "Passei meia hora na chuva esperando o sinal fechar pra todo mundo. A lente embaçou e a melhor foto foi justo a que saiu sem foco.",
    "media": {
      "src": "/media/12976754_1080_1920_30fps.mp4",
      "poster": "/media/12976754_1080_1920_30fps.jpg",
      "ratio": "9:16",
      "duration": 8
    },
    "rating": 14,
    "likes": 356,
    "views": 240000,
    "time": "há 8 minutos",
    "comments": [
      {
        "authorId": "kaique-vinicius",
        "text": "Da calçada é bonito. Em cima da moto essa mesma chuva é entrega atrasada e faixa que ninguém enxerga.",
        "likes": 5
      },
      {
        "authorId": "rafael-augusto",
        "text": "Nessa chuva o sinal de pedestre fica curto e o povo atravessa no meio. Já vi batida por isso duas vezes.",
        "likes": 1
      },
      {
        "authorId": "thiago-andre",
        "text": "Toda vez que alaga assim aparece promessa de drenagem. Quando seca, some.",
        "likes": 2
      }
    ]
  },
  {
    "id": "t009",
    "authorId": "thiago-andre",
    "kind": "news",
    "text": "Linha de ônibus que liga o centro ao bairro da escola volta a circular amanhã, depois de três semanas de obra. A prefeitura promete intervalo pela metade entre as viagens. Moradores reclamam que o ponto novo fica longe da praça.",
    "rating": 12,
    "likes": 87,
    "views": 120,
    "time": "há 12 minutos",
    "comments": [
      {
        "authorId": "ana-maria",
        "text": "Ouvi dizer que o ponto novo tem cobertura e banco. Se for verdade, já é melhor que o antigo, que era só um poste.",
        "likes": 0
      },
      {
        "authorId": "rafael-augusto",
        "text": "Obra entregue às pressas no começo da temporada de chuva. Depois, quando alagar, ninguém sabe de quem era a responsabilidade.",
        "likes": 5
      }
    ]
  },
  {
    "id": "t012",
    "authorId": "juliana-rosa",
    "kind": "note",
    "text": "Hoje consegui almoçar sentada. Parece pouco, mas nos últimos dois meses meu almoço era engolido em pé na cozinha, segurando a mochila do filho com o pé. Foi só um dia, mas lembrei que eu também conto na rotina de casa.",
    "rating": 0,
    "likes": 156,
    "views": 3400000,
    "time": "há 5 horas",
    "comments": [
      {
        "authorId": "beatriz-helena",
        "text": "Um dia é um começo. Guarda esse almoço e tenta repetir amanhã, sem culpa nenhuma.",
        "likes": 5
      },
      {
        "authorId": "fernanda-luisa",
        "text": "Tempo sentada não resolve se a noite continua igual. O que falta é dividir tarefa em casa, não ganhar migalha de pausa.",
        "likes": 5
      }
    ]
  },
  {
    "id": "m048",
    "authorId": "igor-matheus",
    "kind": "video",
    "text": "Fiquei olhando a mancha de luz que o copo joga na mesa e esqueci o café esfriando. Óptica de ensino médio, só que acontecendo em silêncio na minha cozinha.",
    "media": {
      "src": "/media/16985724_1920_1080_30fps.mp4",
      "poster": "/media/16985724_1920_1080_30fps.jpg",
      "ratio": "16:9",
      "duration": 7
    },
    "rating": 0,
    "likes": 587,
    "views": 3400,
    "time": "há 1 dia",
    "comments": [
      {
        "authorId": "maria-clara",
        "text": "A borda da mancha fica mais brilhante porque a luz se concentra ali. Cáustica, e é linda de explicar.",
        "likes": 1
      },
      {
        "authorId": "gustavo-henrique",
        "text": "Tá, mas o café esfriou. Física não resolve café frio.",
        "likes": 2
      },
      {
        "authorId": "ana-beatriz",
        "text": "Isso muda se o copo for de vidro liso em vez de facetado?",
        "likes": 5
      }
    ]
  },
  {
    "id": "m003",
    "authorId": "livraria-pagina-viva",
    "kind": "photo",
    "text": "Deixei o exemplar aberto para ir buscar café e voltei com as páginas cheias de bicho e uma mancha de terra. O clube de leitura é amanhã, então a cópia vai circular assim mesmo. Livro que não se suja é livro que não saiu da estante.",
    "media": {
      "src": "/media/16849446_1080_1920_25fps.jpg",
      "poster": "/media/16849446_1080_1920_25fps.jpg",
      "ratio": "1:1"
    },
    "rating": 0,
    "likes": 24,
    "views": 680000,
    "time": "há 8 minutos",
    "comments": [
      {
        "authorId": "helena-cristina",
        "text": "Folha de capim úmida deixa marca que não sai. Prefiro livro marcado assim a livro impecável parado na prateleira.",
        "likes": 34
      },
      {
        "authorId": "gustavo-henrique",
        "text": "Papel no mato é lindo na foto e caro no bolso. Meu leitor nunca reclamou de umidade.",
        "likes": 34
      },
      {
        "authorId": "ana-maria",
        "text": "Já perdi um assim: esqueci no quintal e choveu de noite. Nunca mais achei o bendito.",
        "likes": 5
      }
    ]
  },
  {
    "id": "m052",
    "authorId": "yara-beatriz",
    "kind": "video",
    "text": "Subi o olhar no meio da rua e deu pra ver como esse trecho foi empilhado sem ninguém pensar em cima. A luz bate diferente em cada fachada e conta quem chegou antes.",
    "media": {
      "src": "/media/16849389_2160_3840_24fps.mp4",
      "poster": "/media/16849389_2160_3840_24fps.jpg",
      "ratio": "9:16",
      "duration": 8
    },
    "rating": 16,
    "likes": 268,
    "views": 8900000,
    "time": "há 8 minutos",
    "comments": [
      {
        "authorId": "wagner-luis",
        "text": "Quem só fotografa na altura do olho perde metade da cidade.",
        "likes": 0
      },
      {
        "authorId": "antonio-jose",
        "text": "Verticalizar resolveu o problema de quem? Quem ficou embaixo paga em sombra e vento.",
        "likes": 21
      }
    ]
  },
  {
    "id": "m039",
    "authorId": "otavio-luis",
    "kind": "video",
    "text": "Travessia de duas horas e eu já tinha tomado dois copos antes de o barco sair. Agora é só deixar a água passar do lado de fora e não fazer nada até chegar.",
    "media": {
      "src": "/media/14017665_hd_1080_1920_30fps.mp4",
      "poster": "/media/14017665_hd_1080_1920_30fps.jpg",
      "ratio": "9:16",
      "duration": 8
    },
    "rating": 12,
    "likes": 203,
    "views": 120,
    "time": "há 8 minutos",
    "comments": [
      {
        "authorId": "marcelo-antonio",
        "text": "Travessia boa é essa, sem pressa e sem olhar o relógio. Sinto falta de fazer o caminho só pelo caminho.",
        "likes": 3
      },
      {
        "authorId": "patricia-elaine",
        "text": "Dois copos disso e eu ficaria acordada até o próximo plantão. Aproveita por mim.",
        "likes": 1
      },
      {
        "authorId": "wagner-luis",
        "text": "Já tentei fotografar dentro de barco e o balanço estraga tudo. Essa mesa ficou firme, coisa rara.",
        "likes": 5
      }
    ]
  },
  {
    "id": "m015",
    "authorId": "marcelo-antonio",
    "kind": "photo",
    "text": "Tem dia que o céu faz o trabalho todo e a gente só levanta a cabeça. Aposentei o relógio de ponto, não o hábito de olhar pra cima.",
    "media": {
      "src": "/media/13407069_3840_2160_24fps.jpg",
      "poster": "/media/13407069_3840_2160_24fps.jpg",
      "ratio": "16:9"
    },
    "rating": 12,
    "likes": 356,
    "views": 44000,
    "time": "há 2 horas",
    "comments": [
      {
        "authorId": "igor-matheus",
        "text": "Esse vermelho é poeira e umidade filtrando a luz. Quanto mais baixo o sol, mais vermelho fica.",
        "likes": 8
      },
      {
        "authorId": "antonio-jose",
        "text": "Bonito, mas o horizonte daqui já foi outro. Hoje tem torre em tudo quanto é lado.",
        "likes": 2
      },
      {
        "authorId": "sabrina-luiza",
        "text": "Já vi gente jurar que esse tom é poluição. Às vezes é, mas quase nunca.",
        "likes": 0
      }
    ]
  },
  {
    "id": "m049",
    "authorId": "yara-beatriz",
    "kind": "photo",
    "text": "Passei a manhã olhando esse entroncamento de cima. Tem uma linha de trem que corta tudo e é a única coisa que ninguém conseguiu refazer.",
    "media": {
      "src": "/media/17387388_2160_3840_60fps.jpg",
      "poster": "/media/17387388_2160_3840_60fps.jpg",
      "ratio": "16:9"
    },
    "rating": 0,
    "likes": 128,
    "views": 1900,
    "time": "há 2 horas",
    "comments": [
      {
        "authorId": "carlos-eduardo",
        "text": "A linha que cruza por baixo é mais antiga que tudo em volta. A cidade cresceu em cima do que já existia.",
        "likes": 3
      },
      {
        "authorId": "joao-pedro",
        "text": "Preto e branco em foto de estrada é meio truque: tira a cor e ganha drama de graça.",
        "likes": 0
      },
      {
        "authorId": "juliana-rosa",
        "text": "Passo por baixo disso todo dia no ônibus e nunca tinha achado bonito.",
        "likes": 2
      }
    ]
  },
  {
    "id": "m011",
    "authorId": "coletivo-mare",
    "kind": "video",
    "text": "Recolhemos o que a maré devolveu nas pedras, e ela devolveu bastante. Voltei com a mão gelada e a impressão de que a gente volta amanhã.",
    "media": {
      "src": "/media/6368368_uhd_3840_2026_30fps.mp4",
      "poster": "/media/6368368_uhd_3840_2026_30fps.jpg",
      "ratio": "16:9",
      "duration": 7
    },
    "rating": 12,
    "likes": 156,
    "views": 1900,
    "time": "há 1 dia",
    "comments": [
      {
        "authorId": "marcelo-antonio",
        "text": "Pesco nessas pedras há trinta anos, o cheiro da espuma é o mesmo.",
        "likes": 5
      },
      {
        "authorId": "kaique-vinicius",
        "text": "Recolher é fácil. Difícil é quem joga lá de cima achar que o mar some com tudo.",
        "likes": 5
      },
      {
        "authorId": "patricia-elaine",
        "text": "Sempre desconfio de mutirão que só aparece na foto. O resto do ano ninguém vê.",
        "likes": 2
      }
    ]
  },
  {
    "id": "m033",
    "authorId": "carlos-eduardo",
    "kind": "photo",
    "text": "Voltei à rua onde aprendi a andar de bicicleta e ela parecia muito maior na minha cabeça. Ando devagar atrás de quem conhece o caminho melhor que eu. Cidade boa é a que ainda dá pra atravessar a pé.",
    "media": {
      "src": "/media/15370999_3840_2160_24fps.jpg",
      "poster": "/media/15370999_3840_2160_24fps.jpg",
      "ratio": "16:9"
    },
    "rating": 14,
    "likes": 96,
    "views": 1200000,
    "time": "há 1 dia",
    "comments": [
      {
        "authorId": "yara-beatriz",
        "text": "Pavimento irregular e rua estreita obrigam o carro a desacelerar; isso é projeto, não sorte.",
        "likes": 3
      },
      {
        "authorId": "rafael-augusto",
        "text": "Andar a pé é ótimo, mas ninguém comenta a calçada que vira estacionamento.",
        "likes": 21
      },
      {
        "authorId": "antonio-jose",
        "text": "Voltar e não reconhecer nada é pior do que não voltar.",
        "likes": 3
      }
    ]
  },
  {
    "id": "m017",
    "authorId": "marcelo-antonio",
    "kind": "video",
    "text": "Subi até o alto pra ver a capela e levei o mesmo susto de sempre: o mar é maior do que a memória guarda. Fiquei ali até o sol esquentar de vez.",
    "media": {
      "src": "/media/16142133_2160_3840_24fps.mp4",
      "poster": "/media/16142133_2160_3840_24fps.jpg",
      "ratio": "16:9",
      "duration": 5
    },
    "rating": 16,
    "likes": 512,
    "views": 12000,
    "time": "há 1 dia",
    "comments": [
      {
        "authorId": "luisa-fernanda",
        "text": "Primeira luz achatando tudo é a melhor hora pra subir. O verde ainda não brilhou e o mar fica liso.",
        "likes": 21
      },
      {
        "authorId": "antonio-jose",
        "text": "A gente briga por orçamento de calçada e esquece que esses lugares só existem porque alguém cuidou por décadas.",
        "likes": 0
      },
      {
        "authorId": "thiago-andre",
        "text": "Esse campo aí na frente é pelada todo domingo. Do alto dá pra ver os dois gols e o pessoal chegando pela lateral.",
        "likes": 34
      }
    ]
  },
  {
    "id": "t027",
    "authorId": "thiago-andre",
    "kind": "news",
    "text": "A feira da praça do bairro vai ganhar cobertura nova depois de três anos de pedido. A obra começa no mês que vem, segundo a prefeitura, mas feirantes ainda não sabem onde vão ficar durante a reforma.",
    "rating": 12,
    "likes": 57,
    "views": 1900,
    "time": "há 4 horas",
    "comments": [
      {
        "authorId": "ana-beatriz",
        "text": "Sabe dizer quando sai o cronograma oficial? Queria entender quem define a ordem das obras no bairro.",
        "likes": 5
      },
      {
        "authorId": "carlos-eduardo",
        "text": "Toda obra que mexe com feira devia ter plano de memória. Feira é patrimônio de quem acorda às cinco, não só espaço de circulação.",
        "likes": 0
      },
      {
        "authorId": "beatriz-helena",
        "text": "Se a feira para, o pão de quem vende lá também para. Torço pra obra ser mais rápida que o combinado.",
        "likes": 3
      }
    ]
  },
  {
    "id": "m066",
    "authorId": "coletivo-mare",
    "kind": "video",
    "text": "Descemos colados na parede pra economizar ar e o grupo foi inteiro junto, sem combinar nada. Lá embaixo o silêncio não é vazio, é cheio de coisa.",
    "media": {
      "src": "/media/17044448_2160_3840_60fps.mp4",
      "poster": "/media/17044448_2160_3840_60fps.jpg",
      "ratio": "9:16",
      "duration": 7
    },
    "rating": 10,
    "likes": 287,
    "views": 8700,
    "time": "há 2 horas",
    "comments": [
      {
        "authorId": "marcelo-antonio",
        "text": "Passei a vida perto de costão e nunca vi o fundo desse jeito. De cima a gente não entende nada.",
        "likes": 5
      },
      {
        "authorId": "igor-matheus",
        "text": "As bolhas sobem porque a pressão cai na subida, não porque a água empurra. Detalhe que muda como você pensa o corpo.",
        "likes": 2
      },
      {
        "authorId": "patricia-elaine",
        "text": "Descanso antes de subir, gente. Corpo cansado não avisa antes de dar errado.",
        "likes": 3
      }
    ]
  },
  {
    "id": "t002",
    "authorId": "thiago-andre",
    "kind": "news",
    "text": "A linha que liga o centro ao bairro das oficinas volta a circular amanhã, depois de dois meses de obra. A empresa promete ônibus a cada quinze minutos, mas não disse quantos veículos entram na frota. Moradores marcam fiscalização na parada principal.",
    "rating": 18,
    "likes": 47,
    "views": 680000,
    "time": "há 2 horas",
    "comments": [
      {
        "authorId": "rafael-augusto",
        "text": "Quinze minutos no papel. Na parada, com sol, a gente cronometra e vê.",
        "likes": 5
      },
      {
        "authorId": "kaique-vinicius",
        "text": "Obra acabou, aí some o fiscal e o ônibus volta a atrasar. Já vi esse filme três vezes neste ano.",
        "likes": 12
      },
      {
        "authorId": "juliana-rosa",
        "text": "Vou estar naquela parada às seis. Se atrasar de novo, comento aqui com o horário exato.",
        "likes": 3
      }
    ]
  },
  {
    "id": "m043",
    "authorId": "rafael-augusto",
    "kind": "video",
    "text": "Atravessei na faixa e caí na ciclovia tomada de folha seca. Toda vez que chove aquele trecho vira sabão e alguém escorrega. Se varrem uma vez por semana, é muito.",
    "media": {
      "src": "/media/17252560_2160_3840_60fps.mp4",
      "poster": "/media/17252560_2160_3840_60fps.jpg",
      "ratio": "1:1",
      "duration": 7
    },
    "rating": 0,
    "likes": 156,
    "views": 1200000,
    "time": "há 1 dia",
    "comments": [
      {
        "authorId": "yara-beatriz",
        "text": "Essa faixa foi pintada em cima do passeio, sem tirar o pedestre do lugar. Dá pra ver no desenho do piso.",
        "likes": 8
      },
      {
        "authorId": "kaique-vinicius",
        "text": "Folha molhada derruba entregador toda semana. Eu já freio bem antes da curva.",
        "likes": 2
      },
      {
        "authorId": "rodrigo-jose",
        "text": "Sinceramente? Folha é o menor dos problemas ali. O buraco depois da esquina come pneu inteiro.",
        "likes": 0
      }
    ]
  },
  {
    "id": "m060",
    "authorId": "luisa-fernanda",
    "kind": "photo",
    "text": "Saí de casa às cinco e pouco pra pegar essa luz e quase voltei, porque o céu parecia fechado. Aí o sol apareceu por baixo das árvores e o chão virou brasa. Valeu cada minuto de sono perdido.",
    "media": {
      "src": "/media/16850078_2160_3840_60fps.jpg",
      "poster": "/media/16850078_2160_3840_60fps.jpg",
      "ratio": "9:16"
    },
    "rating": 0,
    "likes": 289,
    "views": 240000,
    "time": "há 1 dia",
    "comments": [
      {
        "authorId": "otavio-luis",
        "text": "Trilha assim engana: parece curta e você volta no escuro. Leva lanterna.",
        "likes": 21
      },
      {
        "authorId": "carlos-eduardo",
        "text": "Caminho de folha seca assim quase sempre foi passagem antiga de carro de boi.",
        "likes": 34
      },
      {
        "authorId": "fernanda-luisa",
        "text": "Só não deixa resto de comida no chão, que os bichos da mata agradecem.",
        "likes": 8
      }
    ]
  },
  {
    "id": "t021",
    "authorId": "gustavo-henrique",
    "kind": "note",
    "text": "Desliguei o notebook às 19h pela primeira vez em três meses. Não terminei nada da lista e ninguém morreu. Ainda estou tentando entender por que isso pareceu uma ousadia.",
    "rating": 0,
    "likes": 212,
    "views": 240000,
    "time": "há 1 dia",
    "comments": [
      {
        "authorId": "patricia-elaine",
        "text": "Parece ousadia porque o trabalho virou identidade. No plantão a gente aprende que parar também é conduta.",
        "likes": 8
      },
      {
        "authorId": "ana-beatriz",
        "text": "Preciso aprender isso antes de entrar no mercado, não depois.",
        "likes": 21
      }
    ]
  },
  {
    "id": "t031",
    "authorId": "patricia-elaine",
    "kind": "note",
    "text": "Saí do plantão de doze horas e ainda fiquei no estacionamento sem conseguir ligar o carro. Não é sono, é o corpo cobrando a conta. A gente fala de saúde o dia inteiro e esquece da própria.",
    "rating": 14,
    "likes": 271,
    "views": 120,
    "time": "ontem",
    "comments": [
      {
        "authorId": "wagner-luis",
        "text": "Quem cuida de todo mundo esquece que também é corpo. O estacionamento é onde o cansaço finalmente alcança.",
        "likes": 1
      },
      {
        "authorId": "gustavo-henrique",
        "text": "Faço isso no carro também, só que na frente do computador. A conta chega igual.",
        "likes": 12
      }
    ]
  },
  {
    "id": "m067",
    "authorId": "larissa-naomi",
    "kind": "video",
    "text": "Treino de pincel seco depois de um dia inteiro travada. O traço só sai quando eu paro de tentar acertar.",
    "media": {
      "src": "/media/16871613_1080_1920_30fps.mp4",
      "poster": "/media/16871613_1080_1920_30fps.jpg",
      "ratio": "16:9",
      "duration": 8
    },
    "rating": 10,
    "likes": 156,
    "views": 480,
    "time": "há 2 horas",
    "comments": [
      {
        "authorId": "helena-cristina",
        "text": "Barro e pincel seguem a mesma regra: pressa estraga a borda.",
        "likes": 0
      },
      {
        "authorId": "ana-beatriz",
        "text": "Quanto tempo de treino até o traço sair assim? Pergunta de quem nunca pegou no pincel.",
        "likes": 21
      },
      {
        "authorId": "gustavo-henrique",
        "text": "Ficar travado o dia todo e destravar em dois minutos é a parte mais injusta do processo criativo.",
        "likes": 8
      }
    ]
  },
  {
    "id": "t024",
    "authorId": "larissa-naomi",
    "kind": "note",
    "text": "Passei a tarde desenhando a mesma mão e ela continua parecendo um garfo. Amanhã eu venço. Ou pelo menos faço um garfo bonito.",
    "rating": 14,
    "likes": 64,
    "views": 3400000,
    "time": "há 20 minutos",
    "comments": [
      {
        "authorId": "helena-cristina",
        "text": "A mão é a parte mais difícil. Minha caneca número quarenta também nasceu torta.",
        "likes": 1
      },
      {
        "authorId": "otavio-luis",
        "text": "Já desisti de desenhar e virei fotógrafo. A mão continua difícil, mas a culpa passa a ser da luz.",
        "likes": 0
      }
    ]
  },
  {
    "id": "m058",
    "authorId": "fernanda-luisa",
    "kind": "video",
    "text": "Rebanho não se conduz na pressa. Quem anda atrás gritando só espalha o grupo; o certo é dar espaço e deixar o animal escolher o caminho. Levei a tarde para aprender isso no pasto.",
    "media": {
      "src": "/media/14350944_hd_1920_1080_50fps.mp4",
      "poster": "/media/14350944_hd_1920_1080_50fps.jpg",
      "ratio": "1:1",
      "duration": 8
    },
    "rating": 0,
    "likes": 137,
    "views": 240000,
    "time": "há 5 horas",
    "comments": [
      {
        "authorId": "patricia-elaine",
        "text": "Com esse volume de lã, carrapato e bicheira ficam escondidos. Quem cria precisa olhar por baixo toda semana, não só na hora do banho.",
        "likes": 0
      },
      {
        "authorId": "antonio-jose",
        "text": "Criação solta assim é bonita na imagem e caríssima no fim do mês. Ninguém coloca isso na conta.",
        "likes": 1
      },
      {
        "authorId": "juliana-rosa",
        "text": "A pressa é sempre nossa, nunca deles. Isso vale para criança pequena também.",
        "likes": 5
      }
    ]
  },
  {
    "id": "m030",
    "authorId": "yara-beatriz",
    "kind": "video",
    "text": "Passo por baixo disso quase toda semana e nunca tinha visto o desenho inteiro. De cima, o que aqui embaixo parece caos é só gente indo trabalhar por caminhos que ninguém escolheu.",
    "media": {
      "src": "/media/12850464_3840_2160_24fps.mp4",
      "poster": "/media/12850464_3840_2160_24fps.jpg",
      "ratio": "16:9",
      "duration": 4
    },
    "rating": 14,
    "likes": 312,
    "views": 120,
    "time": "há 2 horas",
    "comments": [
      {
        "authorId": "rafael-augusto",
        "text": "De cima fica bonito. No nível da rua o mesmo desenho é meia hora parado e nenhuma sombra.",
        "likes": 12
      },
      {
        "authorId": "kaique-vinicius",
        "text": "Já perdi entrega boa aí porque o acesso é sempre mais longe do que parece.",
        "likes": 2
      },
      {
        "authorId": "thiago-andre",
        "text": "O trecho novo prometia cortar vinte minutos. Ninguém cronometrou depois.",
        "likes": 8
      }
    ]
  },
  {
    "id": "m021",
    "authorId": "ana-maria",
    "kind": "video",
    "text": "Achei esse campo errando o caminho de volta e fiquei vinte minutos parada. O vento passando por cima muda tudo de lugar e eu não queria ir embora.",
    "media": {
      "src": "/media/17321986_1920_1080_30fps.mp4",
      "poster": "/media/17321986_1920_1080_30fps.jpg",
      "ratio": "16:9",
      "duration": 8
    },
    "rating": 0,
    "likes": 631,
    "views": 26000,
    "time": "há 1 dia",
    "comments": [
      {
        "authorId": "maria-clara",
        "text": "Parece margarida, mas tem umas parecidas que enganam. Sem ver a folha eu não boto fé.",
        "likes": 3,
        "alerta": true
      },
      {
        "authorId": "igor-matheus",
        "text": "Flor bonita em beira de estrada costuma vir com veneno do lado. Vale olhar antes de encostar.",
        "likes": 34
      },
      {
        "authorId": "beatriz-helena",
        "text": "Campo assim quer dizer que mexeram no solo faz pouco tempo.",
        "likes": 34
      }
    ]
  },
  {
    "id": "t020",
    "authorId": "rafael-augusto",
    "kind": "question",
    "text": "Pergunta sincera: por que a faixa exclusiva de ônibus vira estacionamento de entrega depois das 18h? Não é reclamação, é curiosidade de quem pedala ali todo dia e desvia de três caminhões parados.",
    "rating": 16,
    "likes": 31,
    "views": 8900000,
    "time": "há 6 horas",
    "comments": [
      {
        "authorId": "kaique-vinicius",
        "text": "Porque entregador também precisa parar e não tem vaga. A diferença é que a multa chega para um e não chega para o outro.",
        "likes": 34
      },
      {
        "authorId": "yara-beatriz",
        "text": "Isso é desenho de rua, não falta de educação. Onde não existe área de carga, o veículo cria uma.",
        "likes": 1
      }
    ]
  },
  {
    "id": "m035",
    "authorId": "fernanda-luisa",
    "kind": "video",
    "text": "Fiquei uns quinze minutos com a mão esticada até ele perder o medo, e o braço já formigava. Na terceira vez ele nem esperou eu abrir a mão direito. Saí de lá com a sensação de ter sido aprovada numa prova que ninguém marcou.",
    "media": {
      "src": "/media/16797896_2160_3840_30fps.mp4",
      "poster": "/media/16797896_2160_3840_30fps.jpg",
      "ratio": "3:4",
      "duration": 5
    },
    "rating": 10,
    "likes": 214,
    "views": 8700,
    "time": "há 12 minutos",
    "comments": [
      {
        "authorId": "maria-clara",
        "text": "Amendoim sem sal e em pouca quantidade, tá? Salgado judia do rim deles.",
        "likes": 5,
        "alerta": true
      },
      {
        "authorId": "rafael-augusto",
        "text": "Alimentar bicho em praça é o que deixa eles dependentes da gente. Depois ninguém entende por que aparece rato.",
        "likes": 1
      },
      {
        "authorId": "ana-beatriz",
        "text": "E ele voltou sozinho ou veio com o bando junto?",
        "likes": 34
      }
    ]
  },
  {
    "id": "m061",
    "authorId": "maria-clara",
    "kind": "photo",
    "text": "\"Vive um dia\" é o que a gente aprende na escola, e é meia verdade. Fiquei duas horas parada esperando ela sair e ela continuou ali, sem pressa nenhuma.",
    "media": {
      "src": "/media/16979092_uhd_3840_2160_60fps.jpg",
      "poster": "/media/16979092_uhd_3840_2160_60fps.jpg",
      "ratio": "16:9"
    },
    "rating": 12,
    "likes": 87,
    "views": 8900000,
    "time": "há 8 minutos",
    "comments": [
      {
        "authorId": "igor-matheus",
        "text": "E a meia verdade virou prova de escola, com data e tudo.",
        "likes": 0
      },
      {
        "authorId": "antonio-jose",
        "text": "Na minha época ensinavam assim e ninguém morreu por causa disso.",
        "likes": 21
      }
    ]
  },
  {
    "id": "m032",
    "authorId": "cafe-aurora",
    "kind": "photo",
    "text": "A primeira xícara do dia ainda é a que decide o ritmo da casa. Depois das sete a fila não deixa mais ninguém pensar em nada.",
    "media": {
      "src": "/media/16894799_3840_2160_24fps.jpg",
      "poster": "/media/16894799_3840_2160_24fps.jpg",
      "ratio": "16:9"
    },
    "rating": 18,
    "likes": 96,
    "views": 1200000,
    "time": "há 8 minutos",
    "comments": [
      {
        "authorId": "beatriz-helena",
        "text": "Café bom é o que aguenta dez minutos na mesa sem amargar. O resto é torra disfarçada.",
        "likes": 1
      },
      {
        "authorId": "gustavo-henrique",
        "text": "Com o preço do grão hoje, essa xícara devia vir com contrato de fidelidade.",
        "likes": 2
      }
    ]
  },
  {
    "id": "m014",
    "authorId": "sabrina-luiza",
    "kind": "video",
    "text": "Levei o violão até o meio do capim só pra tocar sem plateia. Acabei gravando de costas, sem querer, e a música saiu melhor sem pressa. Voltei com a cabeça mais leve do que fui.",
    "media": {
      "src": "/media/15317263_2160_3840_30fps.mp4",
      "poster": "/media/15317263_2160_3840_30fps.jpg",
      "ratio": "9:16",
      "duration": 8
    },
    "rating": 10,
    "likes": 187,
    "views": 3400,
    "time": "há 2 horas",
    "comments": [
      {
        "authorId": "maria-clara",
        "text": "Tocar sem ninguém ouvindo melhora mesmo a afinação, ou é só impressão nossa?",
        "likes": 1
      },
      {
        "authorId": "gustavo-henrique",
        "text": "Capim alto e violão de madeira é convite pra cupim, mas o som valeu.",
        "likes": 34
      },
      {
        "authorId": "banda-do-bairro",
        "text": "Se precisar de segunda voz, o ensaio é quinta e ninguém cobra.",
        "likes": 0
      }
    ]
  },
  {
    "id": "m064",
    "authorId": "wagner-luis",
    "kind": "video",
    "text": "Andei uma hora por ruas que não levam a lugar nenhum, só pelo prazer de olhar. Voltei com o cartão cheio e a camisa suada, achando que tinha visto pouco. Rua antiga sempre cobra uma segunda visita.",
    "media": {
      "src": "/media/16789452_2160_3840_30fps.mp4",
      "poster": "/media/16789452_2160_3840_30fps.jpg",
      "ratio": "3:4",
      "duration": 5
    },
    "rating": 12,
    "likes": 58,
    "views": 480,
    "time": "há 2 horas",
    "comments": [
      {
        "authorId": "yara-beatriz",
        "text": "Rua estreita com janela alta é desenho antigo: sombra no chão o dia inteiro e vento correndo no corredor entre os prédios.",
        "likes": 8
      },
      {
        "authorId": "vanessa-kelly",
        "text": "Eu levaria esse varal inteiro para a coleção de verão, sem exagero nenhum.",
        "likes": 5
      },
      {
        "authorId": "maria-clara",
        "text": "Fotografar fachada alheia é bonito até alguém aparecer na janela e não querer aparecer.",
        "likes": 5,
        "alerta": true
      }
    ]
  },
  {
    "id": "m004",
    "authorId": "coletivo-mare",
    "kind": "video",
    "text": "A gente veio recolher o que sobrou do fim de semana e acabou correndo na areia como criança. Tem coisa que não entra no planejamento e vira o melhor pedaço do dia. Saímos de lá com três sacos cheios e as pernas doendo de rir.",
    "media": {
      "src": "/media/15328677_3840_2160_25fps.mp4",
      "poster": "/media/15328677_3840_2160_25fps.jpg",
      "ratio": "16:9",
      "duration": 5
    },
    "rating": 10,
    "likes": 412,
    "views": 1200000,
    "time": "há 2 horas",
    "comments": [
      {
        "authorId": "maria-clara",
        "text": "Areia solta gasta bem mais energia que asfalto; a panturrilha cobra a conta no dia seguinte.",
        "likes": 8
      },
      {
        "authorId": "rafael-augusto",
        "text": "Bonito, mas quem tem joelho ruim sabe o preço de correr em terreno fofo.",
        "likes": 2
      },
      {
        "authorId": "larissa-naomi",
        "text": "Essa luz de fim de tarde é a que eu tento reproduzir em aquarela e nunca consigo.",
        "likes": 3
      }
    ]
  },
  {
    "id": "m057",
    "authorId": "marcelo-antonio",
    "kind": "photo",
    "text": "Voltei a esse canto depois de anos e não trouxe nem anzol. Sentei na pedra, fiquei olhando o horizonte e voltei pra casa com o dia ganho.",
    "media": {
      "src": "/media/13033459_1920_1080_30fps.jpg",
      "poster": "/media/13033459_1920_1080_30fps.jpg",
      "ratio": "16:9"
    },
    "rating": 14,
    "likes": 431,
    "views": 12000,
    "time": "há 2 horas",
    "comments": [
      {
        "authorId": "coletivo-mare",
        "text": "Mar calmo assim engana. A maré vira rápido e quem não olha o céu fica na mão.",
        "likes": 1
      },
      {
        "authorId": "yara-beatriz",
        "text": "Linha reta de horizonte resolve mais arquitetura do que muita planta por aí.",
        "likes": 3
      },
      {
        "authorId": "carlos-eduardo",
        "text": "Tem lugar que a gente não visita, a gente retorna. Você descreveu isso sem falar.",
        "likes": 8
      }
    ]
  },
  {
    "id": "t019",
    "authorId": "thiago-andre",
    "kind": "news",
    "text": "A feira da rua de baixo muda de horário a partir de sábado: abre às 6h e fecha às 13h. A mudança foi pedida pelos feirantes e confirmada pela associação do bairro. Quem for depois das 11h encontra pouca coisa.",
    "rating": 10,
    "likes": 89,
    "views": 1200000,
    "time": "há 45 minutos",
    "comments": [
      {
        "authorId": "beatriz-helena",
        "text": "Essa é a melhor notícia do mês. Pão de feira às 7h é outro nível.",
        "likes": 2
      },
      {
        "authorId": "juliana-rosa",
        "text": "Ótimo para quem acorda cedo. Para quem sai do trabalho às 18h, a feira simplesmente deixou de existir.",
        "likes": 0
      }
    ]
  },
  {
    "id": "m046",
    "authorId": "helena-cristina",
    "kind": "video",
    "text": "Fui até a padaria a pé só pra ouvir a folha seca embaixo do sapato. Voltei com pão e com a cabeça bem mais quieta.",
    "media": {
      "src": "/media/14595444_2160_3840_30fps.mp4",
      "poster": "/media/14595444_2160_3840_30fps.jpg",
      "ratio": "1:1",
      "duration": 8
    },
    "rating": 12,
    "likes": 76,
    "views": 44000,
    "time": "há 1 dia",
    "comments": [
      {
        "authorId": "sabrina-luiza",
        "text": "Tem um som próprio nisso, tipo percussão que ninguém ensaiou e sai certa de primeira.",
        "likes": 34
      },
      {
        "authorId": "gustavo-henrique",
        "text": "Bonito em vídeo. Na vida real é meia hora varrendo folha da frente de casa.",
        "likes": 8
      },
      {
        "authorId": "carlos-eduardo",
        "text": "O cheiro de folha molhada é exatamente o do quintal da casa da minha avó. Bateu.",
        "likes": 34
      }
    ]
  },
  {
    "id": "m063",
    "authorId": "helena-cristina",
    "kind": "photo",
    "text": "Passei a manhã olhando esse galho contra a parede branca, esperando a luz virar. Tem coisa que não precisa de cor nenhuma para ficar pronta.",
    "media": {
      "src": "/media/15656737_1920_1080_30fps.jpg",
      "poster": "/media/15656737_1920_1080_30fps.jpg",
      "ratio": "1:1"
    },
    "rating": 0,
    "likes": 63,
    "views": 1900,
    "time": "há 2 horas",
    "comments": [
      {
        "authorId": "larissa-naomi",
        "text": "Guardo umas dez assim para estudar claro e escuro, nunca usei no desenho.",
        "likes": 8
      },
      {
        "authorId": "yara-beatriz",
        "text": "Parede branca e sombra seca: melhor fundo que existe.",
        "likes": 12
      }
    ]
  },
  {
    "id": "m059",
    "authorId": "luisa-fernanda",
    "kind": "video",
    "text": "Fiquei três dias esperando a luz ficar assim e ela durou menos de um minuto. Valeu cada hora de pé na pedra.",
    "media": {
      "src": "/media/16838306_3840_2160_50fps.mp4",
      "poster": "/media/16838306_3840_2160_50fps.jpg",
      "ratio": "1:1",
      "duration": 8
    },
    "rating": 12,
    "likes": 726,
    "views": 91000,
    "time": "há 1 dia",
    "comments": [
      {
        "authorId": "marcelo-antonio",
        "text": "Essa água escura colada na pedra é onde o peixe se esconde. De cima ninguém vê isso.",
        "likes": 0
      },
      {
        "authorId": "coletivo-mare",
        "text": "A correnteza aí roda forte e prende. Bonito de cima, perigoso de dentro.",
        "likes": 1
      },
      {
        "authorId": "larissa-naomi",
        "text": "A paleta é exatamente a que eu estava tentando achar pra uma ilustração.",
        "likes": 1
      }
    ]
  },
  {
    "id": "m024",
    "authorId": "joao-pedro",
    "kind": "photo",
    "text": "A gente combinou de ver de longe, sem entrar no meio da multidão, e foi a melhor ideia da noite. O barulho chegava atrasado e ninguém ali parecia com pressa de ir embora.",
    "media": {
      "src": "/media/16921220_1080_1922_30fps.jpg",
      "poster": "/media/16921220_1080_1922_30fps.jpg",
      "ratio": "3:4"
    },
    "rating": 0,
    "likes": 412,
    "views": 680000,
    "time": "há 8 minutos",
    "comments": [
      {
        "authorId": "ana-maria",
        "text": "O casal na frente nem sabe que virou parte do registro. Adorei isso.",
        "likes": 8
      },
      {
        "authorId": "gustavo-henrique",
        "text": "Ver de longe é o melhor motivo pra não voltar com dor de cabeça. Fiz isso no ano passado.",
        "likes": 5
      },
      {
        "authorId": "wagner-luis",
        "text": "Bonito, mas fogos assim apavoram os cachorros do bairro inteiro. Ninguém lembra disso na hora.",
        "likes": 3
      }
    ]
  },
  {
    "id": "t025",
    "authorId": "gustavo-henrique",
    "kind": "note",
    "text": "Passei o dia consertando um bug que só existia porque ontem eu consertei outro. Fim do expediente, café frio e a sensação de que o código cresce mais rápido do que eu. Amanhã tento de novo.",
    "rating": 16,
    "likes": 34,
    "views": 120,
    "time": "há 25 minutos",
    "comments": [
      {
        "authorId": "joao-pedro",
        "text": "Todo bug corrigido gera outro de brinde. O difícil é lembrar que isso é sintoma de sistema grande, não de gente incompetente.",
        "likes": 0
      },
      {
        "authorId": "patricia-elaine",
        "text": "Cansaço que não passa nem no fim de semana não é preguiça, é sinal. Já vi isso demais no plantão.",
        "likes": 2
      },
      {
        "authorId": "antonio-jose",
        "text": "No meu tempo a gente fazia hora extra e ninguém ficava falando de burnout. Hoje qualquer dia ruim vira diagnóstico.",
        "likes": 0
      }
    ]
  },
  {
    "id": "m041",
    "authorId": "beatriz-helena",
    "kind": "photo",
    "text": "Fiquei meia hora esperando mesa só para ver o movimento da calçada. Valeu mais pelo barulho das xícaras do que pelo café, e olha que o café era bom. Voltei com duas ideias de pão e uma conta que não fecha.",
    "media": {
      "src": "/media/16618543_1440_2562_30fps.jpg",
      "poster": "/media/16618543_1440_2562_30fps.jpg",
      "ratio": "3:4"
    },
    "rating": 12,
    "likes": 187,
    "views": 480,
    "time": "há 1 dia",
    "comments": [
      {
        "authorId": "cafe-aurora",
        "text": "Calçada cheia é o melhor cartão de visita de qualquer cafeteria. O difícil é o salão não enlouquecer no meio.",
        "likes": 2
      },
      {
        "authorId": "gustavo-henrique",
        "text": "Meia hora de fila para tomar café quase em pé é o tipo de coisa que eu nunca vou entender.",
        "likes": 8
      },
      {
        "authorId": "ana-beatriz",
        "text": "Você reparou se eles torram o grão na hora? Fiquei curiosa com isso.",
        "likes": 2
      }
    ]
  },
  {
    "id": "m037",
    "authorId": "vanessa-kelly",
    "kind": "video",
    "text": "Aprendi a gostar de andar sem rumo quando o vento tá desse jeito. Voltei com a cara vermelha e o dia resolvido.",
    "media": {
      "src": "/media/15498025_3840_2160_30fps.mp4",
      "poster": "/media/15498025_3840_2160_30fps.jpg",
      "ratio": "1:1",
      "duration": 5
    },
    "rating": 14,
    "likes": 97,
    "views": 480,
    "time": "há 1 dia",
    "comments": [
      {
        "authorId": "ana-beatriz",
        "text": "Andar sem destino é o único jeito de reparar no que a cidade esconde.",
        "likes": 34
      },
      {
        "authorId": "juliana-rosa",
        "text": "Fácil falar de caminhada sem rumo quando não tem jantar esperando em casa.",
        "likes": 0
      },
      {
        "authorId": "luisa-fernanda",
        "text": "Esse cinza de fim de tarde é o que dá mais vontade de fotografar.",
        "likes": 21
      }
    ]
  },
  {
    "id": "m068",
    "authorId": "igor-matheus",
    "kind": "video",
    "text": "Fiquei a tarde olhando um cara subir sem motor nenhum, só na coluna de ar quente que sobe do chão. É a coisa mais bonita da física e ninguém repara nela. Eu explico isso em sala e ninguém acredita até ver.",
    "media": {
      "src": "/media/16923648_1080_1920_120fps.mp4",
      "poster": "/media/16923648_1080_1920_120fps.jpg",
      "ratio": "16:9",
      "duration": 8
    },
    "rating": 12,
    "likes": 61,
    "views": 15000000,
    "time": "há 8 minutos",
    "comments": [
      {
        "authorId": "rafael-augusto",
        "text": "O vento que segura ele é o mesmo que quase me derrubou na avenida ontem. Sem glamour nenhum.",
        "likes": 21
      },
      {
        "authorId": "ana-beatriz",
        "text": "E quanto tempo ele fica no ar se não achar outra térmica?",
        "likes": 2
      },
      {
        "authorId": "gustavo-henrique",
        "text": "Trabalhei num app de previsão de vento. Só lembravam dele no dia em que o voo atrasava.",
        "likes": 34
      }
    ]
  },
  {
    "id": "t004",
    "authorId": "juliana-rosa",
    "kind": "note",
    "text": "Hoje o ônibus atrasou vinte minutos, o menino perdeu o reforço e eu cheguei no trabalho com cara de quem dormiu no ponto. Não é um dia ruim, é toda semana. Quem monta horário de ônibus nunca esperou com criança pela mão.",
    "rating": 14,
    "likes": 89,
    "views": 1900,
    "time": "ontem",
    "comments": [
      {
        "authorId": "kaique-vinicius",
        "text": "Eu vejo isso da rua todo dia. A fila do ponto às seis da manhã é feita quase toda de mãe com criança.",
        "likes": 21
      },
      {
        "authorId": "patricia-elaine",
        "text": "E quando chega atrasada ainda ouve que é falta de organização. Cansa só de imaginar.",
        "likes": 34
      }
    ]
  },
  {
    "id": "t013",
    "authorId": "luisa-fernanda",
    "kind": "note",
    "text": "Saí cedo pra pegar a luz na serra e errei o horário. Quando cheguei, o sol já tinha subido e o mato parecia chapado, sem sombra nenhuma. Fiquei olhando de qualquer jeito. Paisagem boa às vezes é só insistir no dia errado.",
    "rating": 14,
    "likes": 302,
    "views": 1200000,
    "time": "ontem",
    "comments": [
      {
        "authorId": "otavio-luis",
        "text": "Já perdi um nascer do sol por dez minutos de sono. Volta amanhã, o lugar compensa o esforço.",
        "likes": 34
      },
      {
        "authorId": "larissa-naomi",
        "text": "Essa luz chapada é o que mais me trava em desenho. Sem sombra, tudo vira contorno e o volume desaparece.",
        "likes": 0
      },
      {
        "authorId": "helena-cristina",
        "text": "O dia errado rendeu um texto melhor que a foto que você queria.",
        "likes": 2
      }
    ]
  },
  {
    "id": "m044",
    "authorId": "luisa-fernanda",
    "kind": "video",
    "text": "Subi o drone só pra ver o desenho que a água deixou na areia e gastei a bateria inteira nisso. De cima parece veia, parece mapa antigo. A gente aqui embaixo discutindo cerca enquanto o rio muda de ideia.",
    "media": {
      "src": "/media/17273091_2160_3840_30fps.mp4",
      "poster": "/media/17273091_2160_3840_30fps.jpg",
      "ratio": "1:1",
      "duration": 8
    },
    "rating": 0,
    "likes": 389,
    "views": 15000000,
    "time": "há 1 dia",
    "comments": [
      {
        "authorId": "yara-beatriz",
        "text": "Esse traçado muda a cada cheia. Areia que aparece hoje desaparece no próximo inverno.",
        "likes": 3
      },
      {
        "authorId": "wagner-luis",
        "text": "Drone virou muleta. Antes a gente subia morro e suava pra achar esse ângulo.",
        "likes": 8
      }
    ]
  },
  {
    "id": "m053",
    "authorId": "marcelo-antonio",
    "kind": "video",
    "text": "Fiquei um tempão parado vendo a barca passar lá atrás. Antes eu contava barco pra saber a hora; hoje conto pra ter o que fazer.",
    "media": {
      "src": "/media/12103396_1080_1920_60fps.mp4",
      "poster": "/media/12103396_1080_1920_60fps.jpg",
      "ratio": "1:1",
      "duration": 8
    },
    "rating": 0,
    "likes": 87,
    "views": 1900,
    "time": "há 1 dia",
    "comments": [
      {
        "authorId": "luisa-fernanda",
        "text": "Essa luz do fim da tarde é a única que não precisa de ajuste nenhum depois.",
        "likes": 5
      },
      {
        "authorId": "kaique-vinicius",
        "text": "Barca é bonita de longe. Quem depende dela todo dia pra trabalhar não acha tanta graça.",
        "likes": 2
      },
      {
        "authorId": "otavio-luis",
        "text": "O mar ainda fica mais azul quando a gente larga o celular por dez minutos.",
        "likes": 1
      }
    ]
  },
  {
    "id": "m036",
    "authorId": "fernanda-luisa",
    "kind": "video",
    "text": "Ela dorme a tarde inteira e acorda achando que fez muito. Atendo gatos assim toda semana e continuo sem entender de onde vem tanto cansaço.",
    "media": {
      "src": "/media/16937953_1080_1920_30fps.mp4",
      "poster": "/media/16937953_1080_1920_30fps.jpg",
      "ratio": "3:4",
      "duration": 8
    },
    "rating": 0,
    "likes": 412,
    "views": 120,
    "time": "há 2 horas",
    "comments": [
      {
        "authorId": "igor-matheus",
        "text": "Gato dorme umas dezesseis horas porque é predador de emboscada, não porque é preguiçoso. Ele guarda energia pra um pico curto.",
        "likes": 2
      },
      {
        "authorId": "thiago-andre",
        "text": "Sofá de veludo rosa com gato em cima: alguém vai se arrepender em breve.",
        "likes": 12
      },
      {
        "authorId": "ana-maria",
        "text": "A minha escolhe sempre a cadeira de quem chegou primeiro. Deve ser regra de condomínio.",
        "likes": 34
      }
    ]
  },
  {
    "id": "m040",
    "authorId": "yara-beatriz",
    "kind": "video",
    "text": "Voltei no último voo da noite e passei a descida inteira tentando reconhecer as quadras lá embaixo. De cima a cidade parece desenhada com régua, e isso me incomoda mais do que devia. Ainda não decidi se é bonito ou triste.",
    "media": {
      "src": "/media/17001714_2160_3840_30fps.mp4",
      "poster": "/media/17001714_2160_3840_30fps.jpg",
      "ratio": "3:4",
      "duration": 8
    },
    "rating": 12,
    "likes": 234,
    "views": 8700,
    "time": "há 1 dia",
    "comments": [
      {
        "authorId": "kaique-vinicius",
        "text": "De cima tudo parece organizado. Lá no chão, a rua onde eu entrego não tem uma sombra.",
        "likes": 5
      },
      {
        "authorId": "rafael-augusto",
        "text": "A malha que parece régua é o caos de quem pedala nela todo dia.",
        "likes": 2
      },
      {
        "authorId": "wagner-luis",
        "text": "Já tentei fotografar essa luz de janela e não rende nada. Mas a memória fica.",
        "likes": 0
      }
    ]
  },
  {
    "id": "t008",
    "authorId": "kaique-vinicius",
    "kind": "note",
    "text": "Chuva na rua, o aplicativo mandando corrida em corrida e o cliente reclamando do atraso. Atrasei porque o semáforo não abriu, porque a rua alagou, porque eu não voo. Queria que quem monta a rota sentasse no banco de trás uma tarde.",
    "rating": 10,
    "likes": 154,
    "views": 12000,
    "time": "há 12 minutos",
    "comments": [
      {
        "authorId": "rafael-augusto",
        "text": "A cidade trata quem entrega como invisível até a caixa chegar. Depois reclama do farol apagado.",
        "likes": 34
      },
      {
        "authorId": "juliana-rosa",
        "text": "Obrigada por lembrar que tem gente do outro lado do aplicativo. Vou pensar nisso na próxima vez que reclamar de um atraso.",
        "likes": 34
      }
    ]
  },
  {
    "id": "m019",
    "authorId": "otavio-luis",
    "kind": "video",
    "text": "Quatro horas de caminhada pra chegar nessa margem e a água estava morna de sol. Tirei a bota, sentei na pedra e fiquei até o sol baixar. Voltei no escuro com a lanterna do celular e valeu cada passo.",
    "media": {
      "src": "/media/12988504_1920_1080_30fps.mp4",
      "poster": "/media/12988504_1920_1080_30fps.jpg",
      "ratio": "16:9",
      "duration": 8
    },
    "rating": 14,
    "likes": 508,
    "views": 3400,
    "time": "há 1 dia",
    "comments": [
      {
        "authorId": "luisa-fernanda",
        "text": "Volta no fim da tarde: a luz bate de raspão e o verde fica outro.",
        "likes": 2
      },
      {
        "authorId": "antonio-jose",
        "text": "Bonito, mas esse tipo de canto virou estacionamento de fim de semana. Já perdeu metade da graça.",
        "likes": 34
      },
      {
        "authorId": "igor-matheus",
        "text": "Esse tom esverdeado costuma ser sedimento em suspensão, não poluição.",
        "likes": 1
      }
    ]
  },
  {
    "id": "t029",
    "authorId": "beatriz-helena",
    "kind": "note",
    "text": "Descoberta de hoje: o pão que mais vende não é o mais bonito da vitrine. É o que sai quentinho às sete e some antes do meio-dia. Padaria é feita de horário, não só de receita.",
    "rating": 12,
    "likes": 146,
    "views": 240000,
    "time": "há 6 horas",
    "comments": [
      {
        "authorId": "cafe-aurora",
        "text": "Café é igual. Cliente fiel não volta pelo cardápio, volta pelo horário em que sabe que vai estar pronto.",
        "likes": 21
      },
      {
        "authorId": "marcelo-antonio",
        "text": "Eu já fui o que chega às seis só pelo pão quente. Isso é memória de infância, não vitrine.",
        "likes": 3
      }
    ]
  },
  {
    "id": "m038",
    "authorId": "marcelo-antonio",
    "kind": "video",
    "text": "Saio de casa apertado em cada uma dessas saídas, como se fosse a primeira vez. Hoje o mar estava manso e eu deixei o motor no mínimo, só para escutar. Voltei mais tarde do que tinha combinado comigo mesmo.",
    "media": {
      "src": "/media/16473622_2160_3840_30fps.mp4",
      "poster": "/media/16473622_2160_3840_30fps.jpg",
      "ratio": "9:16",
      "duration": 8
    },
    "rating": 0,
    "likes": 246,
    "views": 120,
    "time": "há 3 horas",
    "comments": [
      {
        "authorId": "maria-clara",
        "text": "Água nesse tom costuma indicar fundo de pedra com corrente passando. Manso na superfície não quer dizer nada.",
        "likes": 34,
        "alerta": true
      },
      {
        "authorId": "otavio-luis",
        "text": "Tempo bom engana. Já vi o vento virar em dez minutos e a volta ficar três vezes mais longa.",
        "likes": 3
      },
      {
        "authorId": "kaique-vinicius",
        "text": "Queria um dia sem nada apitando no bolso. Só o barulho da água.",
        "likes": 0
      }
    ]
  },
  {
    "id": "m018",
    "authorId": "igor-matheus",
    "kind": "video",
    "text": "Passei vinte minutos explicando que o tamanho não muda, e ela continuou achando que muda. Gravei essa sequência só pra provar e acabei ficando olhando. A melhor parte é justamente o que a gente não enxerga a olho nu.",
    "media": {
      "src": "/media/16907013_1080_1920_25fps.mp4",
      "poster": "/media/16907013_1080_1920_25fps.jpg",
      "ratio": "9:16",
      "duration": 8
    },
    "rating": 12,
    "likes": 87,
    "views": 240000,
    "time": "há 2 horas",
    "comments": [
      {
        "authorId": "maria-clara",
        "text": "É percepção, não tamanho: o cérebro usa o horizonte como régua. Testa olhar por um tubo de papel que a ilusão cai.",
        "likes": 3
      },
      {
        "authorId": "antonio-jose",
        "text": "Minha avó dizia que lua assim é sinal de chuva. Nunca falhou, e a ciência que me perdoe.",
        "likes": 3
      },
      {
        "authorId": "ana-beatriz",
        "text": "Quanto tempo você gravou no total? Queria ver a sequência inteira.",
        "likes": 2
      }
    ]
  },
  {
    "id": "m006",
    "authorId": "rafael-augusto",
    "kind": "photo",
    "text": "Saí mais cedo só para pegar a rua vazia e o vento contra. Mesmo assim fui de bicicleta, porque de carro esse mesmo trajeto me custaria quarenta minutos parado. Cheguei antes e ainda paguei menos.",
    "media": {
      "src": "/media/16745770_2160_3840_30fps.jpg",
      "poster": "/media/16745770_2160_3840_30fps.jpg",
      "ratio": "9:16"
    },
    "rating": 0,
    "likes": 364,
    "views": 240000,
    "time": "há 2 horas",
    "comments": [
      {
        "authorId": "yara-beatriz",
        "text": "Essa via tem calçada larga dos dois lados. Caberia faixa exclusiva sem tirar espaço de ninguém.",
        "likes": 8
      },
      {
        "authorId": "rodrigo-jose",
        "text": "Só que ciclista também precisa parar no sinal. Vejo cada avanço nesse horário que dá arrepio.",
        "likes": 3
      },
      {
        "authorId": "thiago-andre",
        "text": "Enquanto a ligação cicloviária não fecha nesse trecho, é isso: dividir faixa e contar com a sorte.",
        "likes": 34
      }
    ]
  },
  {
    "id": "t023",
    "authorId": "fernanda-luisa",
    "kind": "opinion",
    "text": "Adotar não é caridade, é compromisso de quinze anos. Quem adota por pena devolve em três meses. Quem adota por escolha fica. O abrigo não precisa de emoção, precisa de gente que volte no sábado.",
    "rating": 0,
    "likes": 156,
    "views": 1900,
    "time": "há 8 horas",
    "comments": [
      {
        "authorId": "ana-maria",
        "text": "Verdade. A pergunta certa não é que dó, é se eu tenho dez anos de rotina para dar.",
        "likes": 8
      },
      {
        "authorId": "wagner-luis",
        "text": "Fácil falar de compromisso quando o aluguel não come a ração. Muita devolução é falta de dinheiro, não de amor.",
        "likes": 2
      }
    ]
  },
  {
    "id": "t028",
    "authorId": "ana-beatriz",
    "kind": "question",
    "text": "Pergunta de estudante: como vocês decidem em quem confiar quando duas fontes dizem coisas opostas e as duas parecem seguras? Estou fazendo uma matéria e travei exatamente nisso.",
    "rating": 0,
    "likes": 12,
    "views": 26000,
    "time": "há 1 hora",
    "comments": [
      {
        "authorId": "maria-clara",
        "text": "Não confie em quem parece seguro. Confie em quem mostra o caminho até o dado: documento, data e quem mais viu.",
        "likes": 0
      },
      {
        "authorId": "larissa-naomi",
        "text": "Sinceramente, no fim as pessoas acreditam é na fonte que já gostavam. Fonte nova raramente muda opinião.",
        "likes": 34
      }
    ]
  },
  {
    "id": "t030",
    "authorId": "maria-clara",
    "kind": "opinion",
    "text": "Checar não é desconfiar de tudo, é se importar com o que é verdade antes de repassar. Quando a notícia é boa demais, o primeiro passo continua sendo procurar o estudo de origem e o tamanho da amostra.",
    "rating": 12,
    "likes": 389,
    "views": 15000000,
    "time": "há 3 horas",
    "comments": [
      {
        "authorId": "igor-matheus",
        "text": "E vale olhar quem escolheu a amostra. Estudo com doze pessoas vira manchete e não vira conclusão.",
        "likes": 0
      },
      {
        "authorId": "antonio-jose",
        "text": "Checar virou desculpa pra não se posicionar. Tem verdade que já está na cara e a imprensa finge que precisa de mais estudo.",
        "likes": 1
      }
    ]
  },
  {
    "id": "t010",
    "authorId": "antonio-jose",
    "kind": "opinion",
    "text": "Morei fora oito anos e voltei. A cidade que deixei não existe mais: o comércio fechou, o cinema virou estacionamento e a praça virou ponto de entrega. Não é saudade de tudo, é raiva de ver o dinheiro público escolher sempre asfalto e nunca gente.",
    "rating": 0,
    "likes": 214,
    "views": 3400000,
    "time": "há 3 horas",
    "comments": [
      {
        "authorId": "carlos-eduardo",
        "text": "Isso não é exclusividade daqui. Cidade que cresceu rápido trocou calçada por pista. A diferença está em quem decide onde vai o dinheiro.",
        "likes": 2
      },
      {
        "authorId": "thiago-andre",
        "text": "O plano de revitalização foi apresentado em audiência no ano passado. Estavam onze pessoas na sala. Onze.",
        "likes": 0
      }
    ]
  },
  {
    "id": "m029",
    "authorId": "helena-cristina",
    "kind": "photo",
    "text": "O chá esfriou, o capítulo não andou e isso já é o meu tipo de noite boa. A xícara é de uma remessa torta que ninguém quis no ateliê, e é justamente a que eu mais uso.",
    "media": {
      "src": "/media/16937743_1920_1080_30fps.jpg",
      "poster": "/media/16937743_1920_1080_30fps.jpg",
      "ratio": "1:1"
    },
    "rating": 12,
    "likes": 64,
    "views": 8900000,
    "time": "há 1 dia",
    "comments": [
      {
        "authorId": "livraria-pagina-viva",
        "text": "Livro abandonado no meio também ensina a hora de parar, e ninguém fala disso.",
        "likes": 8
      },
      {
        "authorId": "beatriz-helena",
        "text": "Xícara de parede torta esquenta mais rápido, é minha teoria de padaria.",
        "likes": 0
      },
      {
        "authorId": "gustavo-henrique",
        "text": "Bonito, mas quem lê no celular não precisa de vela nenhuma.",
        "likes": 2
      }
    ]
  },
  {
    "id": "m016",
    "authorId": "gustavo-henrique",
    "kind": "video",
    "text": "Coloquei na mesa pra cronometrar bloco de foco e passei os últimos vinte minutos só olhando a areia descer. A sprint não andou nada, mas pelo menos a reunião das nove foi cancelada. Esse é o único relógio da casa que ninguém consegue adiantar.",
    "media": {
      "src": "/media/16821231_3840_2160_50fps.mp4",
      "poster": "/media/16821231_3840_2160_50fps.jpg",
      "ratio": "1:1",
      "duration": 8
    },
    "rating": 10,
    "likes": 96,
    "views": 120,
    "time": "há 8 minutos",
    "comments": [
      {
        "authorId": "thiago-andre",
        "text": "Bloco de foco de quarenta minutos que rende oito é o meu dia inteiro.",
        "likes": 2
      },
      {
        "authorId": "vanessa-kelly",
        "text": "Objeto bonito na mesa não resolve cansaço. Esse discurso de desacelerar é conversa de RH.",
        "likes": 34
      }
    ]
  },
  {
    "id": "t005",
    "authorId": "luisa-fernanda",
    "kind": "note",
    "text": "Hoje o céu fez aquela coisa de fim de tarde que dura uns quatro minutos: laranja embaixo, cinza em cima, e a cidade virou silhueta. Saí sem câmera. Fiquei olhando mesmo assim, e foi melhor que qualquer foto.",
    "rating": 12,
    "likes": 203,
    "views": 8700,
    "time": "há 40 minutos",
    "comments": [
      {
        "authorId": "wagner-luis",
        "text": "Quatro minutos é generoso. Aqui durou dois e eu ainda estava procurando o cartão.",
        "likes": 34
      },
      {
        "authorId": "helena-cristina",
        "text": "Tem coisa que a gente guarda sem registrar. Depois vira barro bom.",
        "likes": 21
      }
    ]
  },
  {
    "id": "t022",
    "authorId": "beatriz-helena",
    "kind": "note",
    "text": "O padeiro colocou o pão na prateleira às 6h10 e a fila já tinha sete pessoas. Tem coisa que o bairro inteiro sincroniza sem combinar. Cheiro de pão quente é o despertador mais honesto que existe.",
    "rating": 10,
    "likes": 340,
    "views": 26000,
    "time": "há 3 horas",
    "comments": [
      {
        "authorId": "luisa-fernanda",
        "text": "A luz das 6h nessa hora é a melhor do dia. Você fotografa o pão e eu fotografo a janela da padaria.",
        "likes": 34
      },
      {
        "authorId": "marcelo-antonio",
        "text": "Morei perto de uma padaria assim. Hoje o cheiro chega antes da lembrança.",
        "likes": 8
      }
    ]
  },
  {
    "id": "m055",
    "authorId": "beatriz-helena",
    "kind": "video",
    "text": "Errei três fornadas até entender que a maçã precisa estar fina e a massa quase transparente. Quando a mão pega o jeito, o resto é paciência.",
    "media": {
      "src": "/media/7119410_hd_1080_1920_25fps.mp4",
      "poster": "/media/7119410_hd_1080_1920_25fps.jpg",
      "ratio": "3:4",
      "duration": 8
    },
    "rating": 14,
    "likes": 431,
    "views": 1900,
    "time": "há 1 dia",
    "comments": [
      {
        "authorId": "larissa-naomi",
        "text": "Esse espiral é a mesma lógica de desenhar rosa: começa apertado e vai soltando devagar.",
        "likes": 2
      },
      {
        "authorId": "rodrigo-jose",
        "text": "Minha avó fazia isso com goiabada e ninguém precisava de forma de rosa pra ficar bonito.",
        "likes": 0
      }
    ]
  },
  {
    "id": "t003",
    "authorId": "ana-beatriz",
    "kind": "question",
    "text": "Pergunta séria: quando a prefeitura diz que ouviu a população, quem exatamente foi ouvido? Queria ver a lista, o bairro, o horário da reunião. Não é desconfiança de tudo, é só querer entender como a decisão foi tomada antes de virar placa na rua.",
    "rating": 10,
    "likes": 128,
    "views": 480,
    "time": "há 6 horas",
    "comments": [
      {
        "authorId": "thiago-andre",
        "text": "Costuma ser audiência às três da tarde de terça. Quem trabalha não vai, e a ata registra vinte pessoas.",
        "likes": 21
      },
      {
        "authorId": "maria-clara",
        "text": "Boa pergunta. Sem metodologia publicada, ouvir vira adjetivo, não verbo.",
        "likes": 12
      }
    ]
  },
  {
    "id": "t018",
    "authorId": "antonio-jose",
    "kind": "opinion",
    "text": "Voltei depois de anos e uma coisa não mudou: obra pública começa pelo tapume e termina na faixa. O calendário é sugestão, o orçamento é ficção. Quem mora aqui paga a conta duas vezes.",
    "rating": 0,
    "likes": 128,
    "views": 680000,
    "time": "há 2 horas",
    "comments": [
      {
        "authorId": "thiago-andre",
        "text": "Concordo em parte. A obra que atrasa também é a que tapa buraco há dez anos. O problema não é a obra, é a ordem das prioridades.",
        "likes": 1
      },
      {
        "authorId": "kaique-vinicius",
        "text": "Obra parada é lucro de empreiteira e todo mundo sabe. Enquanto ninguém for responsabilizado, vai continuar igual.",
        "likes": 3
      }
    ]
  },
  {
    "id": "m031",
    "authorId": "carlos-eduardo",
    "kind": "photo",
    "text": "Andei a manhã inteira por aqui sem mapa e sem pressa. Rua antiga ensina que calçada estreita não é erro de projeto, é acordo entre vizinhos.",
    "media": {
      "src": "/media/14596394_1440_2560_30fps.jpg",
      "poster": "/media/14596394_1440_2560_30fps.jpg",
      "ratio": "3:4"
    },
    "rating": 10,
    "likes": 64,
    "views": 480,
    "time": "há 1 dia",
    "comments": [
      {
        "authorId": "yara-beatriz",
        "text": "O traçado veio antes do automóvel, então a rua é de quem anda. Depois ninguém quis refazer.",
        "likes": 8
      },
      {
        "authorId": "maria-clara",
        "text": "Bonito de olhar, mas calçada estreita também é barreira pra quem tem mobilidade reduzida.",
        "likes": 1,
        "alerta": true
      },
      {
        "authorId": "juliana-rosa",
        "text": "Voltei de uma viagem assim com o joelho destruído do calçamento. Valeu cada degrau.",
        "likes": 12
      }
    ]
  },
  {
    "id": "m009",
    "authorId": "yara-beatriz",
    "kind": "video",
    "text": "A cidade vista de cima é uma decisão de projeto que ninguém votou. Cada faixa daquela foi escolha de alguém, e a gente só herda o desenho pronto.",
    "media": {
      "src": "/media/17387388_2160_3840_60fps.mp4",
      "poster": "/media/17387388_2160_3840_60fps.jpg",
      "ratio": "3:4",
      "duration": 8
    },
    "rating": 10,
    "likes": 482,
    "views": 26000,
    "time": "há 8 minutos",
    "comments": [
      {
        "authorId": "rafael-augusto",
        "text": "E nenhuma dessas faixas é pra bicicleta. A prioridade foi dada antes da gente nascer.",
        "likes": 3
      },
      {
        "authorId": "thiago-andre",
        "text": "Entroncamento assim resolve o fluxo de quem passa e isola quem mora do lado.",
        "likes": 0
      },
      {
        "authorId": "kaique-vinicius",
        "text": "Passo embaixo disso todo dia e nunca vi ninguém levantar a cabeça.",
        "likes": 2
      }
    ]
  },
  {
    "id": "m054",
    "authorId": "otavio-luis",
    "kind": "video",
    "text": "Andei quase duas horas sem cruzar com ninguém e a única coisa que eu ouvia era o vento no capim. Cheguei no fim da tarde com as pernas tremendo e a cabeça leve, dessas que demoram dias para voltar.",
    "media": {
      "src": "/media/16739508_1080_1920_30fps.mp4",
      "poster": "/media/16739508_1080_1920_30fps.jpg",
      "ratio": "9:16",
      "duration": 8
    },
    "rating": 12,
    "likes": 96,
    "views": 120,
    "time": "há 1 dia",
    "comments": [
      {
        "authorId": "luisa-fernanda",
        "text": "O que mais me pega é a escala: a gente some no meio e a paisagem continua igual, indiferente.",
        "likes": 21
      },
      {
        "authorId": "igor-matheus",
        "text": "Vale assim costuma ser leito antigo de rio ou cratera; esse capim baixo e uniforme é sinal de solo raso.",
        "likes": 21
      },
      {
        "authorId": "kaique-vinicius",
        "text": "Bonito, mas eu passo o dia inteiro em pé. Caminhar duas horas sem destino me parece castigo.",
        "likes": 21
      }
    ]
  },
  {
    "id": "m056",
    "authorId": "luisa-fernanda",
    "kind": "video",
    "text": "Voltei no mesmo canto três dias seguidos esperando essa luz. No fim foi o vento que fez o trabalho, e eu só segurei o celular sem respirar.",
    "media": {
      "src": "/media/17210598_1080_1920_60fps.mp4",
      "poster": "/media/17210598_1080_1920_60fps.jpg",
      "ratio": "9:16",
      "duration": 8
    },
    "rating": 10,
    "likes": 214,
    "views": 680000,
    "time": "há 2 horas",
    "comments": [
      {
        "authorId": "wagner-luis",
        "text": "Essa penumbra dura umas duas semanas por ano, quem pisca perde.",
        "likes": 12
      },
      {
        "authorId": "gustavo-henrique",
        "text": "Fotografia de natureza é sempre a mesma, muda só a cor da folha.",
        "likes": 34
      },
      {
        "authorId": "ana-beatriz",
        "text": "Como você faz para não tremer segurando desse jeito?",
        "likes": 3
      }
    ]
  },
  {
    "id": "m012",
    "authorId": "otavio-luis",
    "kind": "video",
    "text": "Andando desde as cinco, sem pressa nenhuma. A subida cansa, mas o barulho de pedra solta embaixo da bota é a melhor parte do dia.",
    "media": {
      "src": "/media/14934926_1080_1920_60fps.mp4",
      "poster": "/media/14934926_1080_1920_60fps.jpg",
      "ratio": "9:16",
      "duration": 5
    },
    "rating": 18,
    "likes": 74,
    "views": 680000,
    "time": "há 1 dia",
    "comments": [
      {
        "authorId": "trilha-norte",
        "text": "Chão de pedra solta é traiçoeiro na descida. Calcanhar firme e passo curto.",
        "likes": 34
      },
      {
        "authorId": "juliana-rosa",
        "text": "Eu queria ter esse tempo. Com criança pequena, trilha é caminhar até a padaria.",
        "likes": 34
      },
      {
        "authorId": "fernanda-luisa",
        "text": "Levou água suficiente? Cansaço de altitude não avisa.",
        "likes": 12
      }
    ]
  },
  {
    "id": "m005",
    "authorId": "fernanda-luisa",
    "kind": "video",
    "text": "Toda visita em sítio começa igual: o cachorro da casa decide primeiro se você é confiável. Esse aí resolveu em três segundos, correndo.",
    "media": {
      "src": "/media/17273322_4320_7680_30fps.mp4",
      "poster": "/media/17273322_4320_7680_30fps.jpg",
      "ratio": "3:4",
      "duration": 6
    },
    "rating": 12,
    "likes": 431,
    "views": 44000,
    "time": "há 1 dia",
    "comments": [
      {
        "authorId": "rodrigo-jose",
        "text": "Cachorro de quintal julga a pessoa antes de qualquer gente.",
        "likes": 3
      },
      {
        "authorId": "juliana-rosa",
        "text": "Queria a energia dele por uma tarde só.",
        "likes": 0
      },
      {
        "authorId": "thiago-andre",
        "text": "Solto assim nesse quintal é acidente esperando acontecer.",
        "likes": 5
      }
    ]
  },
  {
    "id": "m028",
    "authorId": "banda-do-bairro",
    "kind": "video",
    "text": "O ensaio de ontem rendeu: fechamos a música nova sem ninguém brigar pelo volume. O pedal ainda chia quando esquenta, mas já virou parte do som. Show no fim do mês, se tudo der certo.",
    "media": {
      "src": "/media/16889766_1920_1080_30fps.mp4",
      "poster": "/media/16889766_1920_1080_30fps.jpg",
      "ratio": "16:9",
      "duration": 8
    },
    "rating": 12,
    "likes": 63,
    "views": 8900000,
    "time": "há 2 horas",
    "comments": [
      {
        "authorId": "sabrina-luiza",
        "text": "Esse chiado do pedal ficou bom no meio da música. Tem defeito que vira assinatura.",
        "likes": 0
      },
      {
        "authorId": "joao-pedro",
        "text": "Manda o nome da nova, quero ouvir antes de todo mundo.",
        "likes": 34
      },
      {
        "authorId": "helena-cristina",
        "text": "Brigar por volume é a versão de ensaio da briga por espaço na bancada.",
        "likes": 8
      }
    ]
  },
  {
    "id": "m065",
    "authorId": "rodrigo-jose",
    "kind": "video",
    "text": "Deixei o carro pronto às seis e a chuva desabou justo na hora de sair. Fiquei no pátio olhando isso em vez de ir embora.",
    "media": {
      "src": "/media/17285173_2160_3840_60fps.mp4",
      "poster": "/media/17285173_2160_3840_60fps.jpg",
      "ratio": "9:16",
      "duration": 6
    },
    "rating": 0,
    "likes": 168,
    "views": 26000,
    "time": "há 8 minutos",
    "comments": [
      {
        "authorId": "kaique-vinicius",
        "text": "Chuva na cidade é bonita da janela do carro. Na moto ela é outra conversa.",
        "likes": 2
      },
      {
        "authorId": "maria-clara",
        "text": "Vidro sujo com chuva é o pior combinado pra quem dirige. Limpa esse espelho, Rodrigo.",
        "likes": 3,
        "alerta": true
      },
      {
        "authorId": "patricia-elaine",
        "text": "Depois de plantão, essa imagem é quase um calmante.",
        "likes": 2
      }
    ]
  },
  {
    "id": "m008",
    "authorId": "gustavo-henrique",
    "kind": "photo",
    "text": "Fazia dois anos que eu não descia pra quadra. Vinte minutos e eu já estava sem ar, mas voltei pra casa melhor do que saí.",
    "media": {
      "src": "/media/13106123_2160_3840_25fps.jpg",
      "poster": "/media/13106123_2160_3840_25fps.jpg",
      "ratio": "1:1"
    },
    "rating": 10,
    "likes": 47,
    "views": 3400,
    "time": "há 2 horas",
    "comments": [
      {
        "authorId": "maria-clara",
        "text": "Vinte minutos já contam. O que pesa no fim da semana é o total, não a sessão heroica.",
        "likes": 34
      },
      {
        "authorId": "antonio-jose",
        "text": "Quadra vazia em bairro que paga imposto não é falta de gente, é escolha.",
        "likes": 34
      },
      {
        "authorId": "joao-pedro",
        "text": "Volta devagar que a panturrilha cobra na segunda-feira.",
        "likes": 3
      }
    ]
  },
  {
    "id": "t007",
    "authorId": "livraria-pagina-viva",
    "kind": "news",
    "text": "A feira do livro do bairro foi confirmada para o mês que vem, agora na praça em vez do ginásio. A organização promete dez barracas de editoras pequenas e uma mesa de troca de usados. Quem quer expor se inscreve até sexta.",
    "rating": 0,
    "likes": 76,
    "views": 120,
    "time": "há 3 horas",
    "comments": [
      {
        "authorId": "ana-beatriz",
        "text": "Vou com caderno. Queria uma pauta sobre as editoras pequenas que sobrevivem de feira.",
        "likes": 21
      },
      {
        "authorId": "larissa-naomi",
        "text": "Se tiver barraca de zine eu levo os meus. Já estou desenhando a placa.",
        "likes": 3
      }
    ]
  },
  {
    "id": "m047",
    "authorId": "luisa-fernanda",
    "kind": "video",
    "text": "Fiquei vinte minutos agachada esperando a luz chegar onde eu queria. No fim quem escolheu o enquadramento foi ela, não eu.",
    "media": {
      "src": "/media/16057700_1080_1920_30fps.mp4",
      "poster": "/media/16057700_1080_1920_30fps.jpg",
      "ratio": "1:1",
      "duration": 7
    },
    "rating": 0,
    "likes": 158,
    "views": 480,
    "time": "há 2 horas",
    "comments": [
      {
        "authorId": "fernanda-luisa",
        "text": "O pólen acumulado na perna é sinal de coleta farta. Boa hora pra estar por ali.",
        "likes": 8
      },
      {
        "authorId": "maria-clara",
        "text": "Não dá pra garantir que é abelha de mel só por essa imagem, e as solitárias polinizam quase tanto.",
        "likes": 0,
        "alerta": true
      }
    ]
  },
  {
    "id": "m013",
    "authorId": "luisa-fernanda",
    "kind": "video",
    "text": "Parei embaixo dessa palmeira esperando o vento mudar de ideia. Levou quase vinte minutos, mas valeu cada segundo parado no meio do caminho.",
    "media": {
      "src": "/media/14643965_1080_1920_30fps.mp4",
      "poster": "/media/14643965_1080_1920_30fps.jpg",
      "ratio": "3:4",
      "duration": 7
    },
    "rating": 14,
    "likes": 312,
    "views": 1900,
    "time": "há 2 horas",
    "comments": [
      {
        "authorId": "helena-cristina",
        "text": "Fico com a sombra que ela joga no chão. Dá para desenhar o dia inteiro com esse recorte.",
        "likes": 12
      },
      {
        "authorId": "maria-clara",
        "text": "Bonito, mas folha no vento é garantia de tremor. Eu teria travado a câmera em algo.",
        "likes": 12
      },
      {
        "authorId": "rafael-augusto",
        "text": "Essa é a melhor sombra que existe na cidade e ninguém planta mais.",
        "likes": 1
      }
    ]
  },
  {
    "id": "t001",
    "authorId": "rafael-augusto",
    "kind": "opinion",
    "text": "Vou dizer o que ninguém quer ouvir: tirar uma faixa de carro para a bicicleta não piora o trânsito, só revela o que já estava ruim. O problema nunca foi a bike, foi a cidade desenhada para o carro. Testa trinta dias e depois a gente conversa.",
    "rating": 0,
    "likes": 312,
    "views": 480,
    "time": "há 25 minutos",
    "comments": [
      {
        "authorId": "antonio-jose",
        "text": "Trinta dias de teste com o comércio fechando as portas e você muda de ideia. Quem vive da rua não pedala, empurra carrinho.",
        "likes": 12
      },
      {
        "authorId": "yara-beatriz",
        "text": "A conta que importa é pessoas por hora, não veículos. Uma faixa de ônibus bem usada move mais gente que três de carro parado.",
        "likes": 5
      }
    ]
  },
  {
    "id": "m010",
    "authorId": "rafael-augusto",
    "kind": "video",
    "text": "Pedalei o dia todo e ainda acho estranho como aqui o bonde divide a rua com todo mundo sem grito. Em casa, um trilho no chão já vira reunião de bairro.",
    "media": {
      "src": "/media/17030777_2160_3840_30fps.mp4",
      "poster": "/media/17030777_2160_3840_30fps.jpg",
      "ratio": "3:4",
      "duration": 5
    },
    "rating": 16,
    "likes": 48,
    "views": 44000,
    "time": "há 8 minutos",
    "comments": [
      {
        "authorId": "yara-beatriz",
        "text": "O trilho funciona como faixa que ninguém precisa pintar: o desenho da rua já separa o fluxo.",
        "likes": 1
      },
      {
        "authorId": "antonio-jose",
        "text": "Divide porque a multa chega e a fiscalização aparece. Sem isso, gentileza no trânsito dura uma semana.",
        "likes": 8
      },
      {
        "authorId": "kaique-vinicius",
        "text": "Queria ver uma moto de entrega passando por cima disso. Trilho numa cidade molhada é roda de gente trabalhando.",
        "likes": 1
      }
    ]
  },
  {
    "id": "m007",
    "authorId": "marcelo-antonio",
    "kind": "photo",
    "text": "Cheguei antes das sete e o mar estava liso, do jeito que a gente não vê no fim de semana. Abri as duas cadeiras e esperei uma companhia que atrasou uma hora, sem reclamar nenhuma vez. Nessa idade a gente aprende a não ter pressa de nada.",
    "media": {
      "src": "/media/14415260_1440_2560_30fps.jpg",
      "poster": "/media/14415260_1440_2560_30fps.jpg",
      "ratio": "3:4"
    },
    "rating": 12,
    "likes": 143,
    "views": 1200000,
    "time": "há 2 horas",
    "comments": [
      {
        "authorId": "rafael-augusto",
        "text": "Atrasar uma hora na praia é quase pontualidade.",
        "likes": 2
      },
      {
        "authorId": "maria-clara",
        "text": "Água lisa assim costuma esconder correnteza. Vale olhar o fundo antes de entrar.",
        "likes": 8,
        "alerta": true
      },
      {
        "authorId": "coletivo-mare",
        "text": "Se sobrar alguma coisa na areia, leva embora. A gente recolhe lá toda sexta.",
        "likes": 5
      }
    ]
  },
  {
    "id": "t016",
    "authorId": "rafael-augusto",
    "kind": "news",
    "text": "Começou o teste da ciclofaixa de quatro quadras na rua do mercado. Foram dois anos de discussão, um abaixo-assinado e três acidentes com bicicleta na esquina. A prefeitura vai medir velocidade e fluxo por sessenta dias antes de decidir se fica.",
    "rating": 10,
    "likes": 121,
    "views": 26000,
    "time": "há 2 dias",
    "comments": [
      {
        "authorId": "yara-beatriz",
        "text": "Quatro quadras não conectam nada sozinhas. O teste só vale se a prefeitura publicar o traçado completo depois.",
        "likes": 34
      },
      {
        "authorId": "rodrigo-jose",
        "text": "Enquanto isso, a rua do mercado perdeu duas vagas e todo mundo continua parando em fila dupla. Fiscalização que é bom, nada.",
        "likes": 8
      }
    ]
  },
  {
    "id": "m051",
    "authorId": "beatriz-helena",
    "kind": "video",
    "text": "Errei o ponto do leite duas vezes antes de acertar esse. Não tem atalho: é repetir até a mão aprender sozinha. O café da manhã de hoje foi comemorado.",
    "media": {
      "src": "/media/12905416_1080_1920_50fps.mp4",
      "poster": "/media/12905416_1080_1920_50fps.jpg",
      "ratio": "3:4",
      "duration": 6
    },
    "rating": 10,
    "likes": 512,
    "views": 26000,
    "time": "há 8 minutos",
    "comments": [
      {
        "authorId": "cafe-aurora",
        "text": "Ficou bom mesmo. O que mais estraga desenho não é a mão, é leite quente demais na hora de despejar.",
        "likes": 3
      },
      {
        "authorId": "gustavo-henrique",
        "text": "Eu desisti e passei a tomar puro. Resolveu o problema e economizou meu domingo.",
        "likes": 0
      },
      {
        "authorId": "ana-beatriz",
        "text": "Quantas tentativas foram até sair assim? Quero tentar e preciso saber se é frustração de semana ou de mês.",
        "likes": 34
      }
    ]
  },
  {
    "id": "m020",
    "authorId": "livraria-pagina-viva",
    "kind": "photo",
    "text": "Abri o exemplar de mostruário pra conferir uma página, e fiquei ali parada. O vento da porta folheou o resto sozinho e eu não tive coragem de fechar.",
    "media": {
      "src": "/media/16903339_1920_1080_30fps.jpg",
      "poster": "/media/16903339_1920_1080_30fps.jpg",
      "ratio": "3:4"
    },
    "rating": 12,
    "likes": 57,
    "views": 91000,
    "time": "há 2 horas",
    "comments": [
      {
        "authorId": "carlos-eduardo",
        "text": "Livro aberto no sol amarela o papel em pouco tempo. Mas esse amarelado é justamente o que a gente chama de memória.",
        "likes": 5
      },
      {
        "authorId": "ana-beatriz",
        "text": "Como vocês escolhem o que fica no mostruário? Eu deixaria todos abertos.",
        "likes": 12
      },
      {
        "authorId": "igor-matheus",
        "text": "A folha reflete quase toda a luz que recebe, por isso ela parece acesa e não só iluminada.",
        "likes": 34
      }
    ]
  },
  {
    "id": "m042",
    "authorId": "luisa-fernanda",
    "kind": "photo",
    "text": "Fiquei quase quarenta minutos parada nesse mesmo lugar, só esperando a luz baixar. Ela não tem pressa nenhuma e eu aprendi a não ter também. Depois disso fui embora sem tirar mais nada.",
    "media": {
      "src": "/media/12635446_uhd_3840_2160_24fps.jpg",
      "poster": "/media/12635446_uhd_3840_2160_24fps.jpg",
      "ratio": "16:9"
    },
    "rating": 0,
    "likes": 803,
    "views": 1200000,
    "time": "há 1 dia",
    "comments": [
      {
        "authorId": "igor-matheus",
        "text": "Esse alaranjado é poeira e partícula em suspensão filtrando o azul. O céu faz o resto do trabalho.",
        "likes": 34
      },
      {
        "authorId": "antonio-jose",
        "text": "Bonito, mas pôr do sol já virou a foto mais repetida do mundo. Preciso de uma história junto, senão é só calendário.",
        "likes": 2
      },
      {
        "authorId": "wagner-luis",
        "text": "A árvore seca do lado direito é o que segura a composição. Sem ela seria só um degradê bonito.",
        "likes": 21
      }
    ]
  }
];

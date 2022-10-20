const baseUrl = "https://www.tenisdemesaparatodos.com";

function getVariationLink(code) {
  return `${baseUrl}/partidos_xjugador.asp?codigo=${code}&ver=UltimoRanking`;
}

function getName() {
  return document.querySelector("td[style='border-right: 1px dotted #000; ']")
    .innerText;
}

function getCode() {
  return document.querySelector("td[style='font-size:22px;']").innerText;
}

function getLastRankingVariation() {
  return document.querySelectorAll("td[style='font-size:12px; '] > strong")[0]
    .innerText;
}

function getRankingPosition() {
  return document.querySelectorAll("td[style='font-size:12px; '] > strong")[1]
    .innerText;
}

function getRating() {
  return document.querySelector("td[style='font-size:23px; color:#FF0000;']")
    .innerText;
}

function getCategoryImg() {
  return document.querySelector("td[width='29']").firstChild.attributes.src
    .value;
}

function getCategory() {
  let aux = getCategoryImg();
  return aux.split("icono_puesto_").pop().split(".")[0];
}

class Club {
  constructor(number) {
    this.name = this.#getClubName(number);
    this.link = this.#getClubLink(number);
    this.img = this.#getClubImg(number);
  }

  #getClubLink(number) {
    return document.querySelectorAll("td[style='font-size:12px; '] > a")[number]
      .attributes.href.value;
  }

  #getClubAbbreviation(number) {
    let aux = document.querySelectorAll("img[width='30'][align='absmiddle']")[
      number
    ].attributes.src.value;
    let abbreviation = aux.split("/").pop().split(".")[0];
    return abbreviation;
  }

  #getClubImg(number) {
    let abbreviation = this.#getClubAbbreviation(number);

    return number === 0
      ? `${baseUrl}/imagenes/escudos/${abbreviation}_grande.gif`
      : `${baseUrl}/imagenes/escudos/asociaciones/${abbreviation}_grande.gif`;
  }

  #getClubName(number) {
    return document.querySelectorAll(
      "td[style='font-size:12px; '] > a > strong"
    )[number].innerText;
  }
}

function getData() {
  const code = getCode();
  return {
    name: getName(),
    code: code,
    avatar:
      "http://drive.google.com/uc?export=view&id=1TG9q3AD8Hu5pPUFjHi2YUc-Z8FxP1Lz9",
    lastRankingVariation: getLastRankingVariation(),
    rankingPosition: getRankingPosition(),
    rating: getRating(),
    categoryImg: getCategoryImg(),
    category: getCategory(),
    variationLink: getVariationLink(code),
    club: new Club(0),
    association: new Club(1),
    racket: {
      blade: {
        name: "Stiga Dynasty Carbon",
        img: "http://drive.google.com/uc?export=view&id=1JROBtKtypX2FA5GdkS5dl9PWWa9YaTJw",
      },
      rubbers: {
        FH: {
          name: "Andro Rasanter R48",
          img: "http://drive.google.com/uc?export=view&id=1sUtVtd7HzJSHQRFQVv_8XVtyMKw8MmgZ",
        },
        BH: {
          name: "Andro Rasanter R45",
          img: "http://drive.google.com/uc?export=view&id=1sUtVtd7HzJSHQRFQVv_8XVtyMKw8MmgZ",
        },
      },
    },
  };
}

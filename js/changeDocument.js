function changeProfile(player) {
  let profile = document.querySelector(
    "td[style='font-size:18px; font-weight:bold ']"
  );

  let profileParent = profile.parentNode;

  profile.remove();

  profileParent.innerHTML += `<td>
    <article class="profile-container">
    <div class="cardSpace">
      <div class="cardShadow">
      </div>
      
      <div class="card">
        <div class="cardBackground">
        </div>
        <div class="cardBlurLayer">
        </div>

        <div class="cardInside">
          <div class="cardHeader">
            <div class="imgSpace">
              <div style="background-image: url('${player.avatar}')"></div>
            </div>
            <div class="userInfo">
              <h2>${player.name}</h2>
              <h3>${player.code}</h3>
            </div>
          </div>
          <div class="userRankingInfo">
            <p>
              <b>Catergoría:</b> <span>${player.category}</span>
            </p>
            <p>
              <b>Rating:</b> <span>${player.rating}</span>
             </p>
            <p>
              <b>Variación último ranking:</b> <a class="linkAzul" href="${player.variationLink}">${player.lastRankingVariation}</a>
            </p>
            <p>
              <b>Posición en el ranking:</b> <span># ${player.rankingPosition}<span>
            </p>
            <p>
              <b>Club:</b> <a class="linkAzul" href="${player.club.link}">${player.club.name}</a>
            </p>
            <p>
              <b>Asociación:</b> <a class="linkAzul" href="${player.association.link}">${player.association.name}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </article>
  </td>`;
}

function deleteDashedLine() {
  let tdList = document.querySelectorAll(
    "td[background='imagenes/linea_02.gif']"
  );

  tdList.forEach((item) => {
    item.attributes.background.value = "";
  });

  tdList = document.querySelectorAll("td[background='imagenes/linea_03.gif']");

  tdList.forEach((item) => {
    item.attributes.background.value = "";
  });
}

function changeSportData(player) {
  const strongList = document.querySelectorAll(
    "tr[valign='middle'] > td > strong"
  );

  strongList[0].innerText = player.racket.blade.name;
  strongList[1].innerText = player.racket.rubbers.FH.name;
  strongList[3].innerText = player.racket.rubbers.BH.name;
}

function addClassHeaderRow() {
  let aux = document.querySelectorAll("td[bgcolor='#D4E9FF']");

  aux.forEach((item) => {
    item.classList.add("headerRow");
  });
}

function changeLastHeaderRowTitle() {
  const styleTitle = document.querySelector(
    ".headerRow td[style='font-size:18px; ']"
  ).style;
  styleTitle["font-size"] = "";
  styleTitle["text-transform"] = "uppercase";
  styleTitle["font-weight"] = "bold";
}

function changeStyles() {
  addClassHeaderRow();
  changeLastHeaderRowTitle();
}

function addCells(player) {
  const row = document.querySelectorAll("tr[valign='middle']")[1];
  row.firstElementChild.remove();

  for (let i = 0; i < 2; i++) {
    const cell = document.createElement("td");
    const img = document.createElement("img");
    img.src = i === 0 ? player.racket.blade.img : player.racket.rubbers.FH.img;
    cell.appendChild(img);
    cell.classList.add("product");
    row.appendChild(cell);
  }
}

function docReady(fn) {
  // see if DOM is already available
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

docReady(function () {
  const player = getData();
  changeProfile(player);
  deleteDashedLine();
  changeSportData(player);
  changeStyles();
});

let pathJsonOO = "./assets/jsons/overdriveOrigins.json";

let savedata = [];
function renderCards() {
    let mainCardContainer = document.getElementById("mainCardContainer");
    fetch(pathJsonOO)
        .then(response => response.json())
        .then(data => {
            savedata = data;
            for (let index = 0; index < data.length; index++) {
                const card = data[index];
                mainCardContainer.innerHTML += templateCard(card.img, index);
            }
        })
        .catch(error => console.error("Fehler beim Laden der JSON:", error));

}

function showCardInfo(number) {
    document.getElementById("mainCardContainerBig").classList.remove("display-none");
    let mainCardContainerBig = document.getElementById("mainCardContainerBig");
    const card = savedata[number];
    mainCardContainerBig.innerHTML = templateCardBig(card);
}

function templateCard(imgSrc, number) {
    return `
    <div onclick="showCardInfo(${number})" class="card-container">
      <img src="${imgSrc}" alt="card">
    </div>
  `;
}

function templateCardBig(card) {
    return `
        <div class="main-card-big card-container">
            <div class="main-card-big-img">
                <img src="${card.img}" alt="${card.title}">
            </div>
            <div class="main-card-big-name" id="Name">
                ${card.title}
            </div>
            <div class="main-card-big-facts">
                <div class="rare-level" id="rareLevel">
                    ${card.rarestate}
                </div>
                <div class="atk-and-def" id="atk def">
                    <div class="atk">
                        ATK: ${card.atk}
                    </div>
                    <div class="def">
                        DEF: ${card.def}
                    </div>

                </div>
            </div>
            <div class="main-card-big-story" id="story">
                ${card.story}
            </div>
        </div>
  `;
}


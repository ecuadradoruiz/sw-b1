const printStarships = () => {
    mainContainer.innerHTML = '...Cargando...';
    console.log('entro en naves');
    getStarships().then(response => {
        let starshipsCards = formatStarshipsCards(response);
        mainContainer.innerHTML = `
            <section class="section">
                <h3 class="section__title"> STARSHIPS </h3>
                <section class="section__container">
                    ${starshipsCards}
                </section>
            </section>
        `;

        addEventsToStarshipsLinks(response);
    });
}

const formatStarshipsCards = (starships) => {
    return starships
        .map(specie => {
            return `
            <div class="card">
                <h4 class="card__title"> ${specie.name} </h4>
                <img class="card__img" src="${specie.img}">
                <div class="card__info-container">
                    <p class="card__info-title">  CREW </p>
                    <p class="card__info"> ${specie.crew} </p>
                    <p class="card__info-title">  LENGTH </p>
                    <p class="card__info"> ${specie.length} </p>
                    <p class="card__info-title">  PASSENGERS </p>
                    <p class="card__info"> ${specie.passengers} </p>
                    <a class="card__link" href="#">  + MORE DETAILS </a>
                </div>
            </div>`
        }).join('');
}

const addEventsToStarshipsLinks = (starships) => {
    let cardLinks = [...document.getElementsByClassName('card__link')];
    cardLinks.forEach((element, i) => {
        element.addEventListener('click', () => {
            printDetailStarship(starships[i].urlDetail);
        });
    });
}

const getStarships = async () => {
    let url = URL_BASE + '/starships/';
    let urlNext = null;
    let data;
    let dataAll = [];
    do {
        response = (urlNext !== null) ? await fetch(urlNext) : await fetch(url);
        data = await response.json();
        dataAll = [... dataAll ,... mapDataStarships(data.results)];
        urlNext = data.next;
        console.log(dataAll);
    } while (data.next !==null)

    return dataAll;
}

const mapDataStarships = (data) => {
    let dataMapped = data
        .map(specie => {
            let object = {
                name: specie.name.toUpperCase(),
                img: "assets/images/starships/" + specie.url.replace("https://swapi.dev/api/starships/", "").replace("/", "") + ".jpg",
                length: specie.length,
                crew: specie.crew,
                passengers: specie.passengers,
                urlDetail: specie.url
            }
            return object;
        });

    return dataMapped;
}


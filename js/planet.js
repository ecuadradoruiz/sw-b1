const printDetailPlanet = (url) => {
    console.log(url);

    mainContainer.innerHTML = '...Cargando...';

    getPlanet(url).then(response => {
        let planetDetail = formatPlanetDetail(response);

        mainContainer.innerHTML = `
            <section class="section">
                <h3 class="section__title"> PLANET </h3>
                <section class="section__container">
                    ${planetDetail}
                </section>
            </section>
        `;

        addEventListenerToOptions('characters', response.characters);
        addEventListenerToOptions('films', response.films);
    });
}

const getPlanet = async (urlPlanet) => {
    let url = urlPlanet;
    /*
    response = await fetch(url);
    data = await response.json();
    console.log(data);
*/
    data = {
        "name": "Yavin IV",
        "rotation_period": "24",
        "orbital_period": "4818",
        "diameter": "10200",
        "climate": "temperate, tropical",
        "gravity": "1 standard",
        "terrain": "jungle, rainforests",
        "surface_water": "8",
        "population": "1000",
        "residents": [],
        "films": [
            "https://swapi.dev/api/films/1/"
        ],
        "created": "2014-12-10T11:37:19.144000Z",
        "edited": "2014-12-20T20:58:18.421000Z",
        "url": "https://swapi.dev/api/planets/3/"
    };
    data = formatDataPlanet(data);

    return data;
}


const formatDataPlanet = (data) => {
    let dataFormated = {
        name: data.name.toUpperCase(),
        img: "assets/images/planets/" + data.url.replace("https://swapi.dev/api/planets/", "").split('/')[0] + ".jpg",
        population: data.population,
        diameter: data.diameter,
        climate: data.climate,
        characters: mapOptions(data.residents, 'characters'),
        films: mapOptions(data.films, 'films')
    }

    return dataFormated;
}

const formatPlanetDetail = (planet) => {
    let films = formatOptions('films', planet.films);
    let characters = formatOptions('characters', planet.characters);


    return `
        <div class="detail">
            <img class="detail__img" src="${planet.img}">
            <div class="detail__info-container">
                <h4 class="detail__title"> ${planet.name} </h4>
                <p class="detail__info-title">  POPULATION </p>
                <p class="detail__info"> ${planet.population} </p>
                <p class="detail__info-title">  DIAMETER </p>
                <p class="detail__info"> ${planet.diameter} </p>
                <p class="detail__info-title">  CLIMATE </p>
                <p class="detail__info"> ${planet.climate} </p>
            </div>
            <div class="detail__options-container">
                ${characters}
                ${films}
            </div>
        </div>
    `;
}

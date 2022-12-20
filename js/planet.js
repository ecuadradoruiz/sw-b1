const printDetailPlanet = (url) => {
    console.log(url);

    mainContainer.innerHTML = '...Cargando...';

    getPlanet(url).then(response => {
        console.log(response);
        let planetDetail = formatPlanetDetail(response);

        mainContainer.innerHTML = `
            <section class="section">
                <h3 class="section__title"> PLANET </h3>
                <section class="section__container">
                    ${planetDetail}
                </section>
            </section>
        `;

        addEventListenerToOptionsFilm('characters', response.characters);
        addEventListenerToOptionsFilm('films', response.films);
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
    console.log('formatDataPlanet > ', data);
    let dataFormated = {
        name: data.name.toUpperCase(),
        img: "assets/images/planets/" + data.url.replace("https://swapi.dev/api/planets/", "").split('/')[0] + ".jpg",
        population: data.population,
        diameter: data.diameter,
        climate: data.climate,
        characters: mapOptionsPlanet(data.residents, 'people'),
        films: mapOptionsPlanet(data.films, 'films')

    }

    return dataFormated;
}


const mapOptionsPlanet = (options, option) => {
    console.log('FDP->', options);
    optionsFormated = [];
    console.log(options);
    options.forEach((element, i) => {
        let idOption = element.replace("https://swapi.dev/api/" + option + "/", "").split('/')[0];
        optionsFormated.push({
            urlImg: 'assets/images/' + option + '/' + idOption + '.jpg',
            urlFetch: element
        });
    });

    return optionsFormated;
}


const formatPlanetDetail = (planet) => {
   
    console.log('FPD->', planet);
    let films = formatOptionsPlanet('films', planet.films);
    let characters = formatOptionsPlanet('characters', planet.characters);


    return `
        <div class="detail">
            <img class="detail__img" src="${planet.img}">
            <div class="detail__info-container">
                <h4 class="detail__title">  ${planet.name} </h4>
                <p class="detail__info-title">  POPULATION </p>
                <p class="detail__info">  ${planet.population} </p>
                <p class="detail__info-title">  DIAMETER </p>
                <p class="detail__info">  ${planet.diameter} </p>
                <p class="detail__info-title">  CLIMATE </p>
                <p class="detail__info">  ${planet.climate} </p>
            </div>
            <div class="detail__options-container">
                ${characters}
                ${films}
            </div>
        </div>
    `;
}


const formatOptionsPlanet = (option, options) => {
    let htmlStructure = "";
    console.log(options);
    if (options.length > 0) {

        options.forEach(element => {
            htmlStructure += `
                <img class="detail__options-img detail__options-img--${option}"src="${element.urlImg}">
            `;
        });

        htmlStructure = `
            <p class="detail__options-title">  ${option.toUpperCase()} </p>
            <div class="detail__img-container">
                ${htmlStructure}
            </div>
        `;
    }

    return htmlStructure;
}

const addEventListenerToOptionsPlanet = (option, options) => {
    console.log(options);
    let optionLinks = [...document.getElementsByClassName(`detail__options-img--${option}`)];
    optionLinks.forEach((element, i) => {
        element.addEventListener('click', () => {
            printDetail(option.toUpperCase(), options[i].urlFetch);
        });
    });
}













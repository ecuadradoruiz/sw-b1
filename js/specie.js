const printDetailSpecie = (url) => {
    mainContainer.innerHTML = '...Cargando...';

    getSpecie(url).then(response => {
        let specieDetail = formatSpecieDetail(response);

        mainContainer.innerHTML = `
            <section class="section">
                <h3 class="section__title"> SPECIE </h3>
                <section class="section__container">
                    ${specieDetail}
                </section>
            </section>
        `;

        addEventListenerToOptions('characters', response.characters);
        addEventListenerToOptions('films', response.films);
    });
}

const getSpecie = async (urlSpecie) => {
    let url = urlSpecie;
    let response = await fetch(url);
    let data = await response.json();
    data = formatDataSpecie(data);

    return data;
}

const formatDataSpecie = (data) => {
    let dataFormated = {
        name: data.name.toUpperCase(),
        img: "assets/images/species/" + data.url.replace("https://swapi.dev/api/species/", "").replace("/", "") + ".jpg",
        classification: data.classification,
        language: data.language,
        lifespan: data.average_lifespan,
        characters: mapOptions(data.people, 'characters'),
        films: mapOptions(data.films, 'films')
    }

    return dataFormated;
}

const formatSpecieDetail = (specie) => {
    let films = formatOptions('films', specie.films);
    let characters = formatOptions('characters', specie.characters);

    return `
        <div class="detail">
            <img class="detail__img" src="${specie.img}">
            <div class="detail__info-container">
                <h4 class="detail__title"> ${specie.name} </h4>
                <p class="detail__info-title"> CLASSIFICATION </p>
                <p class="detail__info"> ${specie.classification} </p>
                <p class="detail__info-title"> LIFESPAN </p>
                <p class="detail__info"> ${specie.lifespan} </p>
                <p class="detail__info-title"> LANGUAGE </p>
                <p class="detail__info"> ${specie.language} </p>
            </div>
            <div class="detail__options-container">
                ${characters}
                ${films}
            </div>
        </div>
    `;
}

/*
    MOCK
    -----------
    {
        "name": "Human",
        "classification": "mammal",
        "designation": "sentient",
        "average_height": "180",
        "skin_colors": "caucasian, black, asian, hispanic",
        "hair_colors": "blonde, brown, black, red",
        "eye_colors": "brown, blue, green, hazel, grey, amber",
        "average_lifespan": "120",
        "homeworld": "https://swapi.dev/api/planets/9/",
        "language": "Galactic Basic",
        "people": [
            "https://swapi.dev/api/people/66/",
            "https://swapi.dev/api/people/67/",
            "https://swapi.dev/api/people/68/",
            "https://swapi.dev/api/people/74/"
        ],
        "films": [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/4/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/"
        ],
        "created": "2014-12-10T13:52:11.567000Z",
        "edited": "2014-12-20T21:36:42.136000Z",
        "url": "https://swapi.dev/api/species/1/"
    };
*/
const printDetailSpecie = (url) => {
    console.log(url);

    mainContainer.innerHTML = '...Cargando...';

    getSpecie (url).then(response => {
        console.log(response);
        let specieDetail = formatSpecieDetail(response);

        mainContainer.innerHTML = `
            <section class="section">
                <h3 class="section__title"> SPECIE </h3>
                <section class="section__container">
                    ${specieDetail}
                </section>
            </section>
        `;

        addEventListenerToOptionsFilm('characters', response.characters);
        addEventListenerToOptionsFilm('films', response.films);
    });
}

const getSpecie = async (urlSpecie) => {
    let url = urlSpecie;
    /*
    response = await fetch(url);
    data = await response.json();
    console.log(data);
*/
    data = {
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
    data = formatDataSpecie(data);

    return data;
}


const formatDataSpecie = (data) => {
    console.log('formatDataSpecie > ', data);
    let dataFormated = {
        name: data.name.toUpperCase(),
        img: "assets/images/species/" + data.url.replace("https://swapi.dev/api/species/", "").split('/')[0] + ".jpg",
        classification: data.classification,
        language: data.language,
        lifespan: data.average_lifespan,
        characters: mapOptionsSpecie(data.people, 'people'),
        films: mapOptionsSpecie(data.films, 'films')

    }

    return dataFormated;
}


const mapOptionsSpecie = (options, option) => {
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


const formatSpecieDetail = (specie) => {
   
    console.log('FPD->', specie);
    let films = formatOptionsSpecie('films', specie.films);
    let characters = formatOptionsSpecie('characters', specie.characters);


    return `
        <div class="detail">
            <img class="detail__img" src="${specie.img}">
            <div class="detail__info-container">
                <h4 class="detail__title">  ${specie.name} </h4>
                <p class="detail__info-title">  CLASSIFICATION </p>
                <p class="detail__info">  ${specie.classification} </p>
                <p class="detail__info-title">  LIFESPAN </p>
                <p class="detail__info">  ${specie.lifespan} </p>
                <p class="detail__info-title">  LANGUAGE </p>
                <p class="detail__info">  ${specie.language} </p>
            </div>
            <div class="detail__options-container">
                ${characters}
                ${films}
            </div>
        </div>
    `;
}


const formatOptionsSpecie = (option, options) => {
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

const addEventListenerToOptionsSpecie = (option, options) => {
    console.log(options);
    let optionLinks = [...document.getElementsByClassName(`detail__options-img--${option}`)];
    optionLinks.forEach((element, i) => {
        element.addEventListener('click', () => {
            printDetail(option.toUpperCase(), options[i].urlFetch);
        });
    });
}













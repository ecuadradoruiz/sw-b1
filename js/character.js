const printDetailCharacter = (url) => {
    mainContainer.innerHTML = '...Cargando...';

    getCharacter(url).then(response => {
        let characterDetail = formatCharacterDetail(response);
        mainContainer.innerHTML = `
            <section class="section">
                <h3 class="section__title"> CHARACTER </h3>
                <section class="section__container">
                    ${characterDetail}
                </section>
            </section>
        `;

        addEventListenerToOptions('planets', response.planets);
        addEventListenerToOptions('starships', response.starships);
        addEventListenerToOptions('films', response.films);
    });
}

const getCharacter = async (urlCharacter) => {
    let url = urlCharacter;
    let response = await fetch(url);
    let data = await response.json();
    data = formatDataCharacter(data);

    return data;
}

const formatDataCharacter = (data) => {
    let dataFormated = {
        name: data.name.toUpperCase(),
        img: "assets/images/characters/" + data.url.replace("https://swapi.dev/api/people/", "").replace("/", "") + ".jpg",
        height: data.height,
        gender: data.gender,
        mass: data.mass,
        species: mapOptions(data.species, 'species'),
        starships: mapOptions(data.starships, 'starships'),
        films: mapOptions(data.films, 'films')
    }

    return dataFormated;
}

const formatCharacterDetail = (character) => {

    let species = formatOptions('species', character.species);
    let films = formatOptions('films', character.films);
    let starships = formatOptions('starships', character.starships);


    return `
        <div class="detail">
            <img class="detail__img" src="${character.img}">
            <div class="detail__info-container">
                <h4 class="detail__title"> ${character.name} </h4>
                <p class="detail__info-title"> GENDER </p>
                <p class="detail__info"> ${character.gender} </p>
                <p class="detail__info-title"> HEIGHT </p>
                <p class="detail__info"> ${character.height} </p>
                <p class="detail__info-title"> MASS </p>
                <p class="detail__info"> ${character.mass} </p>
            </div>
            <div class="detail__options-container">
                ${species}
                ${starships}
                ${films}
            </div>
        </div>
    `;
}

/*
    MOCK
    -----------
    { 
        "name": "Luke Skywalker", 
        "height": "172", 
        "mass": "77", 
        "hair_color": "blond", 
        "skin_color": "fair", 
        "eye_color": "blue", 
        "birth_year": "19BBY", 
        "gender": "male", 
        "homeworld": "https://swapi.dev/api/planets/1/", 
        "films": [
        "https://swapi.dev/api/films/1/", 
        "https://swapi.dev/api/films/2/", 
        "https://swapi.dev/api/films/3/", 
        "https://swapi.dev/api/films/6/"], 
        "species": [], 
        "vehicles": [
        "https://swapi.dev/api/vehicles/14/", 
        "https://swapi.dev/api/vehicles/30/"], 
        "starships": [
        "https://swapi.dev/api/starships/12/", 
        "https://swapi.dev/api/starships/22/"], 
        "created": "2014-12-09T13:50:51.644000Z",
        "edited": "2014-12-20T21:17:56.891000Z", 
        "url": "https://swapi.dev/api/people/1/" 
    };
 */
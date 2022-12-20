const printDetailFilm = (url) => {
    console.log(url);

    mainContainer.innerHTML = '...Cargando...';

    getFilm(url).then( response => {
        let filmDetail = formatFilmDetail(response);
        mainContainer.innerHTML = `
            <section class="section">
                <h3 class="section__title"> FILM </h3>
                <section class="section__container">
                    ${filmDetail}
                </section>
            </section>
        `;

            console.log('f')
        addEventListenerToOptionsFilm ('people', response.characters);
        addEventListenerToOptionsFilm ('planets', response.planets);
        addEventListenerToOptionsFilm ('starships', response.starships);
        addEventListenerToOptionsFilm ('species', response.species);
    });
}

const getFilm = async (urlFilm) => {
    let url = urlFilm;

    /*
    response = await fetch(url);
    data = await response.json();
    console.log(data);
    */

    data  = {"title":"The Phantom Menace","episode_id":1,"opening_crawl":"Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict....","director":"George Lucas","producer":"Rick McCallum","release_date":"1999-05-19","characters":["https://swapi.dev/api/people/2/","https://swapi.dev/api/people/3/","https://swapi.dev/api/people/10/","https://swapi.dev/api/people/11/","https://swapi.dev/api/people/16/","https://swapi.dev/api/people/20/","https://swapi.dev/api/people/21/","https://swapi.dev/api/people/32/","https://swapi.dev/api/people/33/","https://swapi.dev/api/people/34/","https://swapi.dev/api/people/35/","https://swapi.dev/api/people/36/","https://swapi.dev/api/people/37/","https://swapi.dev/api/people/38/","https://swapi.dev/api/people/39/","https://swapi.dev/api/people/40/","https://swapi.dev/api/people/41/","https://swapi.dev/api/people/42/","https://swapi.dev/api/people/43/","https://swapi.dev/api/people/44/","https://swapi.dev/api/people/46/","https://swapi.dev/api/people/47/","https://swapi.dev/api/people/48/","https://swapi.dev/api/people/49/","https://swapi.dev/api/people/50/","https://swapi.dev/api/people/51/","https://swapi.dev/api/people/52/","https://swapi.dev/api/people/53/","https://swapi.dev/api/people/54/","https://swapi.dev/api/people/55/","https://swapi.dev/api/people/56/","https://swapi.dev/api/people/57/","https://swapi.dev/api/people/58/","https://swapi.dev/api/people/59/"],"planets":["https://swapi.dev/api/planets/1/","https://swapi.dev/api/planets/8/","https://swapi.dev/api/planets/9/"],"starships":["https://swapi.dev/api/starships/31/","https://swapi.dev/api/starships/32/","https://swapi.dev/api/starships/39/","https://swapi.dev/api/starships/40/","https://swapi.dev/api/starships/41/"],"vehicles":["https://swapi.dev/api/vehicles/33/","https://swapi.dev/api/vehicles/34/","https://swapi.dev/api/vehicles/35/","https://swapi.dev/api/vehicles/36/","https://swapi.dev/api/vehicles/37/","https://swapi.dev/api/vehicles/38/","https://swapi.dev/api/vehicles/42/"],"species":["https://swapi.dev/api/species/1/","https://swapi.dev/api/species/2/","https://swapi.dev/api/species/6/","https://swapi.dev/api/species/11/","https://swapi.dev/api/species/12/","https://swapi.dev/api/species/13/","https://swapi.dev/api/species/14/","https://swapi.dev/api/species/15/","https://swapi.dev/api/species/16/","https://swapi.dev/api/species/17/","https://swapi.dev/api/species/18/","https://swapi.dev/api/species/19/","https://swapi.dev/api/species/20/","https://swapi.dev/api/species/21/","https://swapi.dev/api/species/22/","https://swapi.dev/api/species/23/","https://swapi.dev/api/species/24/","https://swapi.dev/api/species/25/","https://swapi.dev/api/species/26/","https://swapi.dev/api/species/27/"],"created":"2014-12-19T16:52:55.740000Z","edited":"2014-12-20T10:54:07.216000Z","url":"https://swapi.dev/api/films/4/"};
    data  = formatDataFilm(data);

    return data;
}


const formatDataFilm = (data) => {
    let dataFormated =  {
        title: data.title.toUpperCase(),
        img: "assets/images/films/" + data.episode_id + '.jpg',
        episode: getRomanNumber(data.episode_id),
        director: data.director,
        date: data.release_date,
        characters: mapOptionsFilms(data.characters, 'people'),
        planets: mapOptionsFilms(data.planets, 'planets'),
        starships: mapOptionsFilms(data.starships, 'starships'),
        species: mapOptionsFilms(data.species, 'species'),
    }

    return dataFormated;
}


const mapOptionsFilms = (options, option) => {
    optionsFormated = [];
    
    options.forEach((element,i) => {      
        let idOption = element.replace("https://swapi.dev/api/" + option + "/", "").split('/')[0];
        optionsFormated.push({
            urlImg: 'assets/images/' +option + '/'+  idOption + '.jpg',
            urlFetch: element
        });
    });
 
    return optionsFormated;
}


const formatFilmDetail = (film) => {

    let characters = formatOptionsFilm ('people', film.characters);
    let planets = formatOptionsFilm ('planets', film.planets);
    let starships = formatOptionsFilm ('starships', film.starships);
    let species = formatOptionsFilm ('species', film.species);

    return `
        <div class="detail">
            <img class="detail__img" src="${film.img}">
            <div class="detail__info-container">
                <h4 class="detail__title">  ${film.title} </h4>
                <p class="detail__info-title">  EPISODE </p>
                <p class="detail__info">  ${film.episode} </p>
                <p class="detail__info-title">  DIRECTOR </p>
                <p class="detail__info">  ${film.director} </p>
                <p class="detail__info-title">  DATE </p>
                <p class="detail__info">  ${film.date} </p>
            </div>
            <div class="detail__options-container">
                ${characters}
                ${planets}
                ${starships}
                ${species}
            </div>
        </div>
    `;
}


const formatOptionsFilm = (option, options) => {
    let htmlStructure = "";
    if(options.length > 0){

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



const addEventListenerToOptionsFilm = (option, options) => {
    console.log(options);
    let optionLinks = [...document.getElementsByClassName(`detail__options-img--${option}`)];
    optionLinks.forEach((element,i) => {
        element.addEventListener('click', () => {
            console.log(option, options[i].urlFetch)
            printDetail(option.toUpperCase(), options[i].urlFetch);
        });
    });
}













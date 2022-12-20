
const printSpecies = () => {
    mainContainer.innerHTML = '...Cargando...';
    getSpecies().then(response => {
        let speciesCards = formatSpeciesCards(response);
        mainContainer.innerHTML = `
            <section class="section">
                <h3 class="section__title"> SPECIES </h3>
                <section class="section__container">
                    ${speciesCards}
                </section>
            </section>
        `;

        addEventsToSpeciesLinks(response);
    })


}

const formatSpeciesCards = (species) => {
    return species
        .map(specie => {
            return `
            <div class="card">
                <h4 class="card__title"> ${specie.name} </h4>
                <img class="card__img" src="${specie.img}">
                <div class="card__info-container">
                    <p class="card__info-title">  CLASSIFICATION </p>
                    <p class="card__info"> ${specie.classification} </p>
                    <p class="card__info-title">  LIFESPAN </p>
                    <p class="card__info"> ${specie.lifespan} </p>
                    <p class="card__info-title">  LANGUAGE </p>
                    <p class="card__info"> ${specie.language} </p>
                    <a class="card__link" href="#">  + MORE DETAILS </a>
                </div>
            </div>`
        }).join('');
}


const addEventsToSpeciesLinks = (species) => {
    let cardLinks = [...document.getElementsByClassName('card__link')];
    cardLinks.forEach((element, i) => {
        element.addEventListener('click', () => {
            printDetailSpecie(species[i].urlDetail);
        });
    });
}


const getSpecies = async () => {
    let url = URL_BASE + '/species/';
    let urlNext = null;
    let data;
    let dataAll = [];
    /*
    do {
        response = (urlNext !== null) ? await fetch(urlNext) : await fetch(url);
        data = await response.json();
        dataAll = [... dataAll ,... mapDataSpecies(data.results)];
        urlNext = data.next;
        console.log(dataAll);
    } while (data.next !==null)
    */

    data = {
        "count": 60,
        "next": "https://swapi.dev/api/planets/?page=2",
        "previous": null,
        "results": [
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
            },
            {
                "name": "Droid",
                "classification": "artificial",
                "designation": "sentient",
                "average_height": "n/a",
                "skin_colors": "n/a",
                "hair_colors": "n/a",
                "eye_colors": "n/a",
                "average_lifespan": "indefinite",
                "homeworld": null,
                "language": "n/a",
                "people": [
                    "https://swapi.dev/api/people/2/",
                    "https://swapi.dev/api/people/3/",
                    "https://swapi.dev/api/people/8/",
                    "https://swapi.dev/api/people/23/"
                ],
                "films": [
                    "https://swapi.dev/api/films/1/",
                    "https://swapi.dev/api/films/2/",
                    "https://swapi.dev/api/films/3/",
                    "https://swapi.dev/api/films/4/",
                    "https://swapi.dev/api/films/5/",
                    "https://swapi.dev/api/films/6/"
                ],
                "created": "2014-12-10T15:16:16.259000Z",
                "edited": "2014-12-20T21:36:42.139000Z",
                "url": "https://swapi.dev/api/species/2/"
            },
            {
                "name": "Wookie",
                "classification": "mammal",
                "designation": "sentient",
                "average_height": "210",
                "skin_colors": "gray",
                "hair_colors": "black, brown",
                "eye_colors": "blue, green, yellow, brown, golden, red",
                "average_lifespan": "400",
                "homeworld": "https://swapi.dev/api/planets/14/",
                "language": "Shyriiwook",
                "people": [
                    "https://swapi.dev/api/people/13/",
                    "https://swapi.dev/api/people/80/"
                ],
                "films": [
                    "https://swapi.dev/api/films/1/",
                    "https://swapi.dev/api/films/2/",
                    "https://swapi.dev/api/films/3/",
                    "https://swapi.dev/api/films/6/"
                ],
                "created": "2014-12-10T16:44:31.486000Z",
                "edited": "2014-12-20T21:36:42.142000Z",
                "url": "https://swapi.dev/api/species/3/"
            },
            {
                "name": "Rodian",
                "classification": "sentient",
                "designation": "reptilian",
                "average_height": "170",
                "skin_colors": "green, blue",
                "hair_colors": "n/a",
                "eye_colors": "black",
                "average_lifespan": "unknown",
                "homeworld": "https://swapi.dev/api/planets/23/",
                "language": "Galatic Basic",
                "people": [
                    "https://swapi.dev/api/people/15/"
                ],
                "films": [
                    "https://swapi.dev/api/films/1/"
                ],
                "created": "2014-12-10T17:05:26.471000Z",
                "edited": "2014-12-20T21:36:42.144000Z",
                "url": "https://swapi.dev/api/species/4/"
            },
            {
                "name": "Hutt",
                "classification": "gastropod",
                "designation": "sentient",
                "average_height": "300",
                "skin_colors": "green, brown, tan",
                "hair_colors": "n/a",
                "eye_colors": "yellow, red",
                "average_lifespan": "1000",
                "homeworld": "https://swapi.dev/api/planets/24/",
                "language": "Huttese",
                "people": [
                    "https://swapi.dev/api/people/16/"
                ],
                "films": [
                    "https://swapi.dev/api/films/1/",
                    "https://swapi.dev/api/films/3/"
                ],
                "created": "2014-12-10T17:12:50.410000Z",
                "edited": "2014-12-20T21:36:42.146000Z",
                "url": "https://swapi.dev/api/species/5/"
            },
            {
                "name": "Yoda's species",
                "classification": "mammal",
                "designation": "sentient",
                "average_height": "66",
                "skin_colors": "green, yellow",
                "hair_colors": "brown, white",
                "eye_colors": "brown, green, yellow",
                "average_lifespan": "900",
                "homeworld": "https://swapi.dev/api/planets/28/",
                "language": "Galactic basic",
                "people": [
                    "https://swapi.dev/api/people/20/"
                ],
                "films": [
                    "https://swapi.dev/api/films/2/",
                    "https://swapi.dev/api/films/3/",
                    "https://swapi.dev/api/films/4/",
                    "https://swapi.dev/api/films/5/",
                    "https://swapi.dev/api/films/6/"
                ],
                "created": "2014-12-15T12:27:22.877000Z",
                "edited": "2014-12-20T21:36:42.148000Z",
                "url": "https://swapi.dev/api/species/6/"
            },
            {
                "name": "Trandoshan",
                "classification": "reptile",
                "designation": "sentient",
                "average_height": "200",
                "skin_colors": "brown, green",
                "hair_colors": "none",
                "eye_colors": "yellow, orange",
                "average_lifespan": "unknown",
                "homeworld": "https://swapi.dev/api/planets/29/",
                "language": "Dosh",
                "people": [
                    "https://swapi.dev/api/people/24/"
                ],
                "films": [
                    "https://swapi.dev/api/films/2/"
                ],
                "created": "2014-12-15T13:07:47.704000Z",
                "edited": "2014-12-20T21:36:42.151000Z",
                "url": "https://swapi.dev/api/species/7/"
            },
            {
                "name": "Mon Calamari",
                "classification": "amphibian",
                "designation": "sentient",
                "average_height": "160",
                "skin_colors": "red, blue, brown, magenta",
                "hair_colors": "none",
                "eye_colors": "yellow",
                "average_lifespan": "unknown",
                "homeworld": "https://swapi.dev/api/planets/31/",
                "language": "Mon Calamarian",
                "people": [
                    "https://swapi.dev/api/people/27/"
                ],
                "films": [
                    "https://swapi.dev/api/films/3/"
                ],
                "created": "2014-12-18T11:09:52.263000Z",
                "edited": "2014-12-20T21:36:42.153000Z",
                "url": "https://swapi.dev/api/species/8/"
            },
            {
                "name": "Ewok",
                "classification": "mammal",
                "designation": "sentient",
                "average_height": "100",
                "skin_colors": "brown",
                "hair_colors": "white, brown, black",
                "eye_colors": "orange, brown",
                "average_lifespan": "unknown",
                "homeworld": "https://swapi.dev/api/planets/7/",
                "language": "Ewokese",
                "people": [
                    "https://swapi.dev/api/people/30/"
                ],
                "films": [
                    "https://swapi.dev/api/films/3/"
                ],
                "created": "2014-12-18T11:22:00.285000Z",
                "edited": "2014-12-20T21:36:42.155000Z",
                "url": "https://swapi.dev/api/species/9/"
            },
            {
                "name": "Sullustan",
                "classification": "mammal",
                "designation": "sentient",
                "average_height": "180",
                "skin_colors": "pale",
                "hair_colors": "none",
                "eye_colors": "black",
                "average_lifespan": "unknown",
                "homeworld": "https://swapi.dev/api/planets/33/",
                "language": "Sullutese",
                "people": [
                    "https://swapi.dev/api/people/31/"
                ],
                "films": [
                    "https://swapi.dev/api/films/3/"
                ],
                "created": "2014-12-18T11:26:20.103000Z",
                "edited": "2014-12-20T21:36:42.157000Z",
                "url": "https://swapi.dev/api/species/10/"
            }
        ]
    };
    dataAll = mapDataSpecies(data.results);
    return dataAll;
}

const mapDataSpecies = (data) => {
    let dataMapped = data
        .map(specie => {
            let object = {
                name: specie.name.toUpperCase(),
                img: "assets/images/species/" + specie.url.replace("https://swapi.dev/api/species/", "").split('/')[0] + ".jpg",
                classification: specie.classification,
                language: specie.language,
                lifespan: specie.average_lifespan,
                urlDetail: specie.url
            }
            return object;
        });

    return dataMapped;
}


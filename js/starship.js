const printDetailStarship = (url) => {
    console.log(url);

    mainContainer.innerHTML = '...Cargando...';

    getStarship(url).then( response => {
        let starshipDetail = formatStarshipDetail(response);
        mainContainer.innerHTML = `
            <section class="section">
                <h3 class="section__title"> STARSHIP </h3>
                <section class="section__container">
                    ${starshipDetail}
                </section>
            </section>
        `;

        addEventListenerToOptionsFilm ('films', response.films);
    });
}

const getStarship = async (urlStarship) => {
    let url = urlStarship;
    /*
    response = await fetch(url);
    data = await response.json();
    console.log(data);
*/
    data = {
        "name": "Death Star",
        "model": "DS-1 Orbital Battle Station",
        "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
        "cost_in_credits": "1000000000000",
        "length": "120000",
        "max_atmosphering_speed": "n/a",
        "crew": "342,953",
        "passengers": "843,342",
        "cargo_capacity": "1000000000000",
        "consumables": "3 years",
        "hyperdrive_rating": "4.0",
        "MGLT": "10",
        "starship_class": "Deep Space Mobile Battlestation",
        "pilots": [],
        "films": [
            "https://swapi.dev/api/films/1/"
        ],
        "created": "2014-12-10T16:36:50.509000Z",
        "edited": "2014-12-20T21:26:24.783000Z",
        "url": "https://swapi.dev/api/starships/9/"
    };
    
    data  = formatDataStarship(data);

    return data;
}


const formatDataStarship = (data) => {
    let dataFormated =  {
        name: data.name.toUpperCase(),
        img: "assets/images/starships/" + data.url.replace("https://swapi.dev/api/starships/", "").split('/')[0] + ".jpg",
        class: data.starship_class,
        model: data.model,
        cargo_capacity: data.cargo_capacity,
        crew: data.crew,
        films: mapOptionsStarships(data.films, 'films')

    }

    return dataFormated;
}


const mapOptionsStarships = (options, option) => {
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


const formatStarshipDetail = (starship) => {

    let films = formatOptionsStarship ('films', starship.films);


    return `
        <div class="detail detail--starships">
            <img class="detail__img detail__img--starships" src="${starship.img}">
            <div class="detail__info-container">
                <h4 class="detail__title">  ${starship.name} </h4>
                <p class="detail__info-title">  MODEL </p>
                <p class="detail__info">  ${starship.model} </p>
                <p class="detail__info-title">  CLASS </p>
                <p class="detail__info">  ${starship.class} </p>
                <p class="detail__info-title">  PASSSANGERS </p>
                <p class="detail__info">  ${starship.passengers} </p>
                <p class="detail__info-title">  CARGO CAPACITY </p>
                <p class="detail__info">  ${starship.cargo_capacity} </p>
                <p class="detail__info-title">  CREW </p>
                <p class="detail__info">  ${starship.crew} </p>
            </div>
            <div class="detail__options-container">
                ${films}
            </div>
        </div>
    `;
}


const formatOptionsStarship = (option, options) => {
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

const addEventListenerToOptionsStarship = (option, options) => {
    console.log(options);
    let optionLinks = [...document.getElementsByClassName(`detail__options-img--${option}`)];
    optionLinks.forEach((element,i) => {
        element.addEventListener('click', () => {
            printDetail(option.toUpperCase(), options[i].urlFetch);
        });
    });
}













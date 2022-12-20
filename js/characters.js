
const printCharacters = () => {
    mainContainer.innerHTML = '...Cargando...';
    getCharacters().then( response => {
        let charactersCards = formatCharactersCards(response);
        console.log(charactersCards);
        mainContainer.innerHTML = `
            <section class="section">
                <h3 class="section__title"> CHARACTERS </h3>
                <section class="section__container">
                    ${charactersCards}
                </section>
            </section>
        `;

        addEventsToCharacterLinks(response);
    })


}

const formatCharactersCards = (characters) => {
    return characters   
        .map(character => {
            return  `
            <div class="card">
                <h4 class="card__title">  ${character.name} </h4>
                <img class="card__img" src="${character.img}">
                <div class="card__info-container">
                    <p class="card__info-title">  GENDER </p>
                    <p class="card__info">  ${character.gender} </p>
                    <p class="card__info-title">  HEIGHT </p>
                    <p class="card__info">  ${character.height} </p>
                    <p class="card__info-title">  MASS </p>
                    <p class="card__info">  ${character.mass} </p>
                    <a class="card__link" href="#">  + MORE DETAILS </a>
                </div>
            </div>`
        }).join('');
}


const addEventsToCharacterLinks = (characters) => {
    let cardLinks = [...document.getElementsByClassName('card__link')];
    cardLinks.forEach((element,i) => {
        element.addEventListener('click', () => {
            printDetailCharacter(characters[i].urlDetail);
        });
    });
}


const getCharacters = async () => {
    let url =  URL_BASE + '/people/';
    let urlNext = null;
    let data;
    let dataAll = [];
    /*
    do {
        response = (urlNext !== null) ? await fetch(urlNext) : await fetch(url);
        data = await response.json();
        dataAll = [... dataAll ,... mapDataCharacters(data.results)];
        urlNext = data.next;
        console.log(dataAll);
    } while (data.next !==null)
    */

    dataAll = [
        {
            "name": "LUKE SKYWALKER",
            "img": "assets/images/people/1.jpg",
            "gender": "male",
            "mass": "77",
            "height": "172",
            "urlDetailPlanet": "https://swapi.dev/api/planets/1/",
            "urlDetail": "https://swapi.dev/api/people/1/"
        },
        {
            "name": "C-3PO",
            "img": "assets/images/people/2.jpg",
            "gender": "n/a",
            "mass": "75",
            "height": "167",
            "urlDetailPlanet": "https://swapi.dev/api/planets/1/",
            "urlDetail": "https://swapi.dev/api/people/2/"
        },
        {
            "name": "R2-D2",
            "img": "assets/images/people/3.jpg",
            "gender": "n/a",
            "mass": "32",
            "height": "96",
            "urlDetailPlanet": "https://swapi.dev/api/planets/8/",
            "urlDetail": "https://swapi.dev/api/people/3/"
        },
        {
            "name": "DARTH VADER",
            "img": "assets/images/people/4.jpg",
            "gender": "male",
            "mass": "136",
            "height": "202",
            "urlDetailPlanet": "https://swapi.dev/api/planets/1/",
            "urlDetail": "https://swapi.dev/api/people/4/"
        },
        {
            "name": "LEIA ORGANA",
            "img": "assets/images/people/5.jpg",
            "gender": "female",
            "mass": "49",
            "height": "150",
            "urlDetailPlanet": "https://swapi.dev/api/planets/2/",
            "urlDetail": "https://swapi.dev/api/people/5/"
        },
        {
            "name": "OWEN LARS",
            "img": "assets/images/people/6.jpg",
            "gender": "male",
            "mass": "120",
            "height": "178",
            "urlDetailPlanet": "https://swapi.dev/api/planets/1/",
            "urlDetail": "https://swapi.dev/api/people/6/"
        },
        {
            "name": "BERU WHITESUN LARS",
            "img": "assets/images/people/7.jpg",
            "gender": "female",
            "mass": "75",
            "height": "165",
            "urlDetailPlanet": "https://swapi.dev/api/planets/1/",
            "urlDetail": "https://swapi.dev/api/people/7/"
        },
        {
            "name": "R5-D4",
            "img": "assets/images/people/8.jpg",
            "gender": "n/a",
            "mass": "32",
            "height": "97",
            "urlDetailPlanet": "https://swapi.dev/api/planets/1/",
            "urlDetail": "https://swapi.dev/api/people/8/"
        },
        {
            "name": "BIGGS DARKLIGHTER",
            "img": "assets/images/people/9.jpg",
            "gender": "male",
            "mass": "84",
            "height": "183",
            "urlDetailPlanet": "https://swapi.dev/api/planets/1/",
            "urlDetail": "https://swapi.dev/api/people/9/"
        },
        {
            "name": "OBI-WAN KENOBI",
            "img": "assets/images/people/10.jpg",
            "gender": "male",
            "mass": "77",
            "height": "182",
            "urlDetailPlanet": "https://swapi.dev/api/planets/20/",
            "urlDetail": "https://swapi.dev/api/people/10/"
        },
        {
            "name": "ANAKIN SKYWALKER",
            "img": "assets/images/people/11.jpg",
            "gender": "male",
            "mass": "84",
            "height": "188",
            "urlDetailPlanet": "https://swapi.dev/api/planets/1/",
            "urlDetail": "https://swapi.dev/api/people/11/"
        },
        {
            "name": "WILHUFF TARKIN",
            "img": "assets/images/people/12.jpg",
            "gender": "male",
            "mass": "unknown",
            "height": "180",
            "urlDetailPlanet": "https://swapi.dev/api/planets/21/",
            "urlDetail": "https://swapi.dev/api/people/12/"
        },
        {
            "name": "CHEWBACCA",
            "img": "assets/images/people/13.jpg",
            "gender": "male",
            "mass": "112",
            "height": "228",
            "urlDetailPlanet": "https://swapi.dev/api/planets/14/",
            "urlDetail": "https://swapi.dev/api/people/13/"
        },
        {
            "name": "HAN SOLO",
            "img": "assets/images/people/14.jpg",
            "gender": "male",
            "mass": "80",
            "height": "180",
            "urlDetailPlanet": "https://swapi.dev/api/planets/22/",
            "urlDetail": "https://swapi.dev/api/people/14/"
        },
        {
            "name": "GREEDO",
            "img": "assets/images/people/15.jpg",
            "gender": "male",
            "mass": "74",
            "height": "173",
            "urlDetailPlanet": "https://swapi.dev/api/planets/23/",
            "urlDetail": "https://swapi.dev/api/people/15/"
        },
        {
            "name": "JABBA DESILIJIC TIURE",
            "img": "assets/images/people/16.jpg",
            "gender": "hermaphrodite",
            "mass": "1,358",
            "height": "175",
            "urlDetailPlanet": "https://swapi.dev/api/planets/24/",
            "urlDetail": "https://swapi.dev/api/people/16/"
        },
        {
            "name": "WEDGE ANTILLES",
            "img": "assets/images/people/18.jpg",
            "gender": "male",
            "mass": "77",
            "height": "170",
            "urlDetailPlanet": "https://swapi.dev/api/planets/22/",
            "urlDetail": "https://swapi.dev/api/people/18/"
        },
        {
            "name": "JEK TONO PORKINS",
            "img": "assets/images/people/19.jpg",
            "gender": "male",
            "mass": "110",
            "height": "180",
            "urlDetailPlanet": "https://swapi.dev/api/planets/26/",
            "urlDetail": "https://swapi.dev/api/people/19/"
        },
        {
            "name": "YODA",
            "img": "assets/images/people/20.jpg",
            "gender": "male",
            "mass": "17",
            "height": "66",
            "urlDetailPlanet": "https://swapi.dev/api/planets/28/",
            "urlDetail": "https://swapi.dev/api/people/20/"
        },
        {
            "name": "PALPATINE",
            "img": "assets/images/people/21.jpg",
            "gender": "male",
            "mass": "75",
            "height": "170",
            "urlDetailPlanet": "https://swapi.dev/api/planets/8/",
            "urlDetail": "https://swapi.dev/api/people/21/"
        },
        {
            "name": "BOBA FETT",
            "img": "assets/images/people/22.jpg",
            "gender": "male",
            "mass": "78.2",
            "height": "183",
            "urlDetailPlanet": "https://swapi.dev/api/planets/10/",
            "urlDetail": "https://swapi.dev/api/people/22/"
        },
        {
            "name": "IG-88",
            "img": "assets/images/people/23.jpg",
            "gender": "none",
            "mass": "140",
            "height": "200",
            "urlDetailPlanet": "https://swapi.dev/api/planets/28/",
            "urlDetail": "https://swapi.dev/api/people/23/"
        },
        {
            "name": "BOSSK",
            "img": "assets/images/people/24.jpg",
            "gender": "male",
            "mass": "113",
            "height": "190",
            "urlDetailPlanet": "https://swapi.dev/api/planets/29/",
            "urlDetail": "https://swapi.dev/api/people/24/"
        },
        {
            "name": "LANDO CALRISSIAN",
            "img": "assets/images/people/25.jpg",
            "gender": "male",
            "mass": "79",
            "height": "177",
            "urlDetailPlanet": "https://swapi.dev/api/planets/30/",
            "urlDetail": "https://swapi.dev/api/people/25/"
        },
        {
            "name": "LOBOT",
            "img": "assets/images/people/26.jpg",
            "gender": "male",
            "mass": "79",
            "height": "175",
            "urlDetailPlanet": "https://swapi.dev/api/planets/6/",
            "urlDetail": "https://swapi.dev/api/people/26/"
        },
        {
            "name": "ACKBAR",
            "img": "assets/images/people/27.jpg",
            "gender": "male",
            "mass": "83",
            "height": "180",
            "urlDetailPlanet": "https://swapi.dev/api/planets/31/",
            "urlDetail": "https://swapi.dev/api/people/27/"
        },
        {
            "name": "MON MOTHMA",
            "img": "assets/images/people/28.jpg",
            "gender": "female",
            "mass": "unknown",
            "height": "150",
            "urlDetailPlanet": "https://swapi.dev/api/planets/32/",
            "urlDetail": "https://swapi.dev/api/people/28/"
        },
        {
            "name": "ARVEL CRYNYD",
            "img": "assets/images/people/29.jpg",
            "gender": "male",
            "mass": "unknown",
            "height": "unknown",
            "urlDetailPlanet": "https://swapi.dev/api/planets/28/",
            "urlDetail": "https://swapi.dev/api/people/29/"
        },
        {
            "name": "WICKET SYSTRI WARRICK",
            "img": "assets/images/people/30.jpg",
            "gender": "male",
            "mass": "20",
            "height": "88",
            "urlDetailPlanet": "https://swapi.dev/api/planets/7/",
            "urlDetail": "https://swapi.dev/api/people/30/"
        },
        {
            "name": "NIEN NUNB",
            "img": "assets/images/people/31.jpg",
            "gender": "male",
            "mass": "68",
            "height": "160",
            "urlDetailPlanet": "https://swapi.dev/api/planets/33/",
            "urlDetail": "https://swapi.dev/api/people/31/"
        },
        {
            "name": "QUI-GON JINN",
            "img": "assets/images/people/32.jpg",
            "gender": "male",
            "mass": "89",
            "height": "193",
            "urlDetailPlanet": "https://swapi.dev/api/planets/28/",
            "urlDetail": "https://swapi.dev/api/people/32/"
        },
        {
            "name": "NUTE GUNRAY",
            "img": "assets/images/people/33.jpg",
            "gender": "male",
            "mass": "90",
            "height": "191",
            "urlDetailPlanet": "https://swapi.dev/api/planets/18/",
            "urlDetail": "https://swapi.dev/api/people/33/"
        },
        {
            "name": "FINIS VALORUM",
            "img": "assets/images/people/34.jpg",
            "gender": "male",
            "mass": "unknown",
            "height": "170",
            "urlDetailPlanet": "https://swapi.dev/api/planets/9/",
            "urlDetail": "https://swapi.dev/api/people/34/"
        },
        {
            "name": "PADMÉ AMIDALA",
            "img": "assets/images/people/35.jpg",
            "gender": "female",
            "mass": "45",
            "height": "185",
            "urlDetailPlanet": "https://swapi.dev/api/planets/8/",
            "urlDetail": "https://swapi.dev/api/people/35/"
        },
        {
            "name": "JAR JAR BINKS",
            "img": "assets/images/people/36.jpg",
            "gender": "male",
            "mass": "66",
            "height": "196",
            "urlDetailPlanet": "https://swapi.dev/api/planets/8/",
            "urlDetail": "https://swapi.dev/api/people/36/"
        },
        {
            "name": "ROOS TARPALS",
            "img": "assets/images/people/37.jpg",
            "gender": "male",
            "mass": "82",
            "height": "224",
            "urlDetailPlanet": "https://swapi.dev/api/planets/8/",
            "urlDetail": "https://swapi.dev/api/people/37/"
        },
        {
            "name": "RUGOR NASS",
            "img": "assets/images/people/38.jpg",
            "gender": "male",
            "mass": "unknown",
            "height": "206",
            "urlDetailPlanet": "https://swapi.dev/api/planets/8/",
            "urlDetail": "https://swapi.dev/api/people/38/"
        },
        {
            "name": "RIC OLIÉ",
            "img": "assets/images/people/39.jpg",
            "gender": "male",
            "mass": "unknown",
            "height": "183",
            "urlDetailPlanet": "https://swapi.dev/api/planets/8/",
            "urlDetail": "https://swapi.dev/api/people/39/"
        },
        {
            "name": "WATTO",
            "img": "assets/images/people/40.jpg",
            "gender": "male",
            "mass": "unknown",
            "height": "137",
            "urlDetailPlanet": "https://swapi.dev/api/planets/34/",
            "urlDetail": "https://swapi.dev/api/people/40/"
        },
        {
            "name": "SEBULBA",
            "img": "assets/images/people/41.jpg",
            "gender": "male",
            "mass": "40",
            "height": "112",
            "urlDetailPlanet": "https://swapi.dev/api/planets/35/",
            "urlDetail": "https://swapi.dev/api/people/41/"
        },
        {
            "name": "QUARSH PANAKA",
            "img": "assets/images/people/42.jpg",
            "gender": "male",
            "mass": "unknown",
            "height": "183",
            "urlDetailPlanet": "https://swapi.dev/api/planets/8/",
            "urlDetail": "https://swapi.dev/api/people/42/"
        },
        {
            "name": "SHMI SKYWALKER",
            "img": "assets/images/people/43.jpg",
            "gender": "female",
            "mass": "unknown",
            "height": "163",
            "urlDetailPlanet": "https://swapi.dev/api/planets/1/",
            "urlDetail": "https://swapi.dev/api/people/43/"
        },
        {
            "name": "DARTH MAUL",
            "img": "assets/images/people/44.jpg",
            "gender": "male",
            "mass": "80",
            "height": "175",
            "urlDetailPlanet": "https://swapi.dev/api/planets/36/",
            "urlDetail": "https://swapi.dev/api/people/44/"
        },
        {
            "name": "BIB FORTUNA",
            "img": "assets/images/people/45.jpg",
            "gender": "male",
            "mass": "unknown",
            "height": "180",
            "urlDetailPlanet": "https://swapi.dev/api/planets/37/",
            "urlDetail": "https://swapi.dev/api/people/45/"
        },
        {
            "name": "AYLA SECURA",
            "img": "assets/images/people/46.jpg",
            "gender": "female",
            "mass": "55",
            "height": "178",
            "urlDetailPlanet": "https://swapi.dev/api/planets/37/",
            "urlDetail": "https://swapi.dev/api/people/46/"
        },
        {
            "name": "RATTS TYEREL",
            "img": "assets/images/people/47.jpg",
            "gender": "male",
            "mass": "15",
            "height": "79",
            "urlDetailPlanet": "https://swapi.dev/api/planets/38/",
            "urlDetail": "https://swapi.dev/api/people/47/"
        },
        {
            "name": "DUD BOLT",
            "img": "assets/images/people/48.jpg",
            "gender": "male",
            "mass": "45",
            "height": "94",
            "urlDetailPlanet": "https://swapi.dev/api/planets/39/",
            "urlDetail": "https://swapi.dev/api/people/48/"
        },
        {
            "name": "GASGANO",
            "img": "assets/images/people/49.jpg",
            "gender": "male",
            "mass": "unknown",
            "height": "122",
            "urlDetailPlanet": "https://swapi.dev/api/planets/40/",
            "urlDetail": "https://swapi.dev/api/people/49/"
        },
        {
            "name": "BEN QUADINAROS",
            "img": "assets/images/people/50.jpg",
            "gender": "male",
            "mass": "65",
            "height": "163",
            "urlDetailPlanet": "https://swapi.dev/api/planets/41/",
            "urlDetail": "https://swapi.dev/api/people/50/"
        },
        {
            "name": "MACE WINDU",
            "img": "assets/images/people/51.jpg",
            "gender": "male",
            "mass": "84",
            "height": "188",
            "urlDetailPlanet": "https://swapi.dev/api/planets/42/",
            "urlDetail": "https://swapi.dev/api/people/51/"
        },
        {
            "name": "KI-ADI-MUNDI",
            "img": "assets/images/people/52.jpg",
            "gender": "male",
            "mass": "82",
            "height": "198",
            "urlDetailPlanet": "https://swapi.dev/api/planets/43/",
            "urlDetail": "https://swapi.dev/api/people/52/"
        },
        {
            "name": "KIT FISTO",
            "img": "assets/images/people/53.jpg",
            "gender": "male",
            "mass": "87",
            "height": "196",
            "urlDetailPlanet": "https://swapi.dev/api/planets/44/",
            "urlDetail": "https://swapi.dev/api/people/53/"
        },
        {
            "name": "EETH KOTH",
            "img": "assets/images/people/54.jpg",
            "gender": "male",
            "mass": "unknown",
            "height": "171",
            "urlDetailPlanet": "https://swapi.dev/api/planets/45/",
            "urlDetail": "https://swapi.dev/api/people/54/"
        },
        {
            "name": "ADI GALLIA",
            "img": "assets/images/people/55.jpg",
            "gender": "female",
            "mass": "50",
            "height": "184",
            "urlDetailPlanet": "https://swapi.dev/api/planets/9/",
            "urlDetail": "https://swapi.dev/api/people/55/"
        },
        {
            "name": "SAESEE TIIN",
            "img": "assets/images/people/56.jpg",
            "gender": "male",
            "mass": "unknown",
            "height": "188",
            "urlDetailPlanet": "https://swapi.dev/api/planets/47/",
            "urlDetail": "https://swapi.dev/api/people/56/"
        },
        {
            "name": "YARAEL POOF",
            "img": "assets/images/people/57.jpg",
            "gender": "male",
            "mass": "unknown",
            "height": "264",
            "urlDetailPlanet": "https://swapi.dev/api/planets/48/",
            "urlDetail": "https://swapi.dev/api/people/57/"
        },
        {
            "name": "PLO KOON",
            "img": "assets/images/people/58.jpg",
            "gender": "male",
            "mass": "80",
            "height": "188",
            "urlDetailPlanet": "https://swapi.dev/api/planets/49/",
            "urlDetail": "https://swapi.dev/api/people/58/"
        },
        {
            "name": "MAS AMEDDA",
            "img": "assets/images/people/59.jpg",
            "gender": "male",
            "mass": "unknown",
            "height": "196",
            "urlDetailPlanet": "https://swapi.dev/api/planets/50/",
            "urlDetail": "https://swapi.dev/api/people/59/"
        },
        {
            "name": "GREGAR TYPHO",
            "img": "assets/images/people/60.jpg",
            "gender": "male",
            "mass": "85",
            "height": "185",
            "urlDetailPlanet": "https://swapi.dev/api/planets/8/",
            "urlDetail": "https://swapi.dev/api/people/60/"
        },
        {
            "name": "CORDÉ",
            "img": "assets/images/people/61.jpg",
            "gender": "female",
            "mass": "unknown",
            "height": "157",
            "urlDetailPlanet": "https://swapi.dev/api/planets/8/",
            "urlDetail": "https://swapi.dev/api/people/61/"
        },
        {
            "name": "CLIEGG LARS",
            "img": "assets/images/people/62.jpg",
            "gender": "male",
            "mass": "unknown",
            "height": "183",
            "urlDetailPlanet": "https://swapi.dev/api/planets/1/",
            "urlDetail": "https://swapi.dev/api/people/62/"
        },
        {
            "name": "POGGLE THE LESSER",
            "img": "assets/images/people/63.jpg",
            "gender": "male",
            "mass": "80",
            "height": "183",
            "urlDetailPlanet": "https://swapi.dev/api/planets/11/",
            "urlDetail": "https://swapi.dev/api/people/63/"
        },
        {
            "name": "LUMINARA UNDULI",
            "img": "assets/images/people/64.jpg",
            "gender": "female",
            "mass": "56.2",
            "height": "170",
            "urlDetailPlanet": "https://swapi.dev/api/planets/51/",
            "urlDetail": "https://swapi.dev/api/people/64/"
        },
        {
            "name": "BARRISS OFFEE",
            "img": "assets/images/people/65.jpg",
            "gender": "female",
            "mass": "50",
            "height": "166",
            "urlDetailPlanet": "https://swapi.dev/api/planets/51/",
            "urlDetail": "https://swapi.dev/api/people/65/"
        },
        {
            "name": "DORMÉ",
            "img": "assets/images/people/66.jpg",
            "gender": "female",
            "mass": "unknown",
            "height": "165",
            "urlDetailPlanet": "https://swapi.dev/api/planets/8/",
            "urlDetail": "https://swapi.dev/api/people/66/"
        },
        {
            "name": "DOOKU",
            "img": "assets/images/people/67.jpg",
            "gender": "male",
            "mass": "80",
            "height": "193",
            "urlDetailPlanet": "https://swapi.dev/api/planets/52/",
            "urlDetail": "https://swapi.dev/api/people/67/"
        },
        {
            "name": "BAIL PRESTOR ORGANA",
            "img": "assets/images/people/68.jpg",
            "gender": "male",
            "mass": "unknown",
            "height": "191",
            "urlDetailPlanet": "https://swapi.dev/api/planets/2/",
            "urlDetail": "https://swapi.dev/api/people/68/"
        },
        {
            "name": "JANGO FETT",
            "img": "assets/images/people/69.jpg",
            "gender": "male",
            "mass": "79",
            "height": "183",
            "urlDetailPlanet": "https://swapi.dev/api/planets/53/",
            "urlDetail": "https://swapi.dev/api/people/69/"
        },
        {
            "name": "ZAM WESELL",
            "img": "assets/images/people/70.jpg",
            "gender": "female",
            "mass": "55",
            "height": "168",
            "urlDetailPlanet": "https://swapi.dev/api/planets/54/",
            "urlDetail": "https://swapi.dev/api/people/70/"
        },
        {
            "name": "DEXTER JETTSTER",
            "img": "assets/images/people/71.jpg",
            "gender": "male",
            "mass": "102",
            "height": "198",
            "urlDetailPlanet": "https://swapi.dev/api/planets/55/",
            "urlDetail": "https://swapi.dev/api/people/71/"
        },
        {
            "name": "LAMA SU",
            "img": "assets/images/people/72.jpg",
            "gender": "male",
            "mass": "88",
            "height": "229",
            "urlDetailPlanet": "https://swapi.dev/api/planets/10/",
            "urlDetail": "https://swapi.dev/api/people/72/"
        },
        {
            "name": "TAUN WE",
            "img": "assets/images/people/73.jpg",
            "gender": "female",
            "mass": "unknown",
            "height": "213",
            "urlDetailPlanet": "https://swapi.dev/api/planets/10/",
            "urlDetail": "https://swapi.dev/api/people/73/"
        },
        {
            "name": "JOCASTA NU",
            "img": "assets/images/people/74.jpg",
            "gender": "female",
            "mass": "unknown",
            "height": "167",
            "urlDetailPlanet": "https://swapi.dev/api/planets/9/",
            "urlDetail": "https://swapi.dev/api/people/74/"
        },
        {
            "name": "R4-P17",
            "img": "assets/images/people/75.jpg",
            "gender": "female",
            "mass": "unknown",
            "height": "96",
            "urlDetailPlanet": "https://swapi.dev/api/planets/28/",
            "urlDetail": "https://swapi.dev/api/people/75/"
        },
        {
            "name": "WAT TAMBOR",
            "img": "assets/images/people/76.jpg",
            "gender": "male",
            "mass": "48",
            "height": "193",
            "urlDetailPlanet": "https://swapi.dev/api/planets/56/",
            "urlDetail": "https://swapi.dev/api/people/76/"
        },
        {
            "name": "SAN HILL",
            "img": "assets/images/people/77.jpg",
            "gender": "male",
            "mass": "unknown",
            "height": "191",
            "urlDetailPlanet": "https://swapi.dev/api/planets/57/",
            "urlDetail": "https://swapi.dev/api/people/77/"
        },
        {
            "name": "SHAAK TI",
            "img": "assets/images/people/78.jpg",
            "gender": "female",
            "mass": "57",
            "height": "178",
            "urlDetailPlanet": "https://swapi.dev/api/planets/58/",
            "urlDetail": "https://swapi.dev/api/people/78/"
        },
        {
            "name": "GRIEVOUS",
            "img": "assets/images/people/79.jpg",
            "gender": "male",
            "mass": "159",
            "height": "216",
            "urlDetailPlanet": "https://swapi.dev/api/planets/59/",
            "urlDetail": "https://swapi.dev/api/people/79/"
        },
        {
            "name": "TARFFUL",
            "img": "assets/images/people/80.jpg",
            "gender": "male",
            "mass": "136",
            "height": "234",
            "urlDetailPlanet": "https://swapi.dev/api/planets/14/",
            "urlDetail": "https://swapi.dev/api/people/80/"
        },
        {
            "name": "RAYMUS ANTILLES",
            "img": "assets/images/people/81.jpg",
            "gender": "male",
            "mass": "79",
            "height": "188",
            "urlDetailPlanet": "https://swapi.dev/api/planets/2/",
            "urlDetail": "https://swapi.dev/api/people/81/"
        },
        {
            "name": "SLY MOORE",
            "img": "assets/images/people/82.jpg",
            "gender": "female",
            "mass": "48",
            "height": "178",
            "urlDetailPlanet": "https://swapi.dev/api/planets/60/",
            "urlDetail": "https://swapi.dev/api/people/82/"
        },
        {
            "name": "TION MEDON",
            "img": "assets/images/people/83.jpg",
            "gender": "male",
            "mass": "80",
            "height": "206",
            "urlDetailPlanet": "https://swapi.dev/api/planets/12/",
            "urlDetail": "https://swapi.dev/api/people/83/"
        }
    ];

    return dataAll;
}

const mapDataCharacters = (data) => {
    let dataMapped =  data
        .map(character => { 
            let object = {
                name : character.name.toUpperCase(),
                img: "assets/images/people/" + character.url.replace("https://swapi.dev/api/people/", "").split('/')[0] + ".jpg",
                gender: character.gender,
                mass: character.mass,
                height: character.height,
                urlDetailPlanet: character.homeworld,
                urlDetail: character.url
            }
            return object;
        });

    return dataMapped;
}




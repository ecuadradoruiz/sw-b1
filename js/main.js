// Cuando se carga todo iniciamos el renderizado de la home
const mainContainer = document.querySelector('.main');
const URL_BASE = 'https://swapi.dev/api';


window.onload = () => {
    printPage('HOME');
}

// Unificamos navegación
const printPage = (section, url) => {
    console.log('que entra?', section);
    // Cabecera
    adaptHeader(section);

    // Contenido
    switch (section) {
        case 'HOME':
            printHome();
            break;
        case 'FILMS':
            url ? printDetailFilm(url) : printFilms();
            break;
        case 'CHARACTERS':
            url ? printDetailCharacter(url) : printCharacters();
            break;
        case 'STARSHIPS':
            url ? printDetailStarship(url) : printStarships();
            break;
        case 'SPECIES':
            url ? printDetailSpecie(url) : printSpecies();
            break;
        case 'PLANETS':
            url ? printDetailPlanet(url) : printPlanets();
            break;
    }

    // Posicionamos arriba
    window.scrollTo(0, 0);
}

const adaptHeader = (section) => {
    const header = document.querySelector('header');
    return (section === 'HOME') ? header.classList.add('header--home') : header.classList.remove('header--home');
}

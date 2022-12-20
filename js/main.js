// Cuando se carga todo iniciamos el renderizado de la home

const mainContainer = document.querySelector('.main'); 
const URL_BASE = 'https://swapi.dev/api';


window.onload = () => {
    printSection('HOME');
}


const printSection = (section) => {
    switch(section){
        case 'HOME':
            adaptHeader('home');
            printHome();
        break;
        case 'FILMS':
            adaptHeader('no-home');
            printFilms();
        break;
        case 'CHARACTERS':
            adaptHeader('no-home');
            printCharacters();
        break;
        case 'STARSHIPS':
            adaptHeader('no-home');
            printStarships();
        break;

        case 'SPECIES':
            adaptHeader('no-home');
            printSpecies();
        break;

        case 'PLANETS':
            adaptHeader('no-home');
            printPlanets();
        break;

    }
}

const printDetail = (section, url) => {
    console.log(section);
    switch(section){
        case 'PEOPLE':
            adaptHeader('home');
            printDetailCharacter(url);
        break;
        case 'CHARACTERS':
            adaptHeader('home');
            printDetailCharacter(url);
        break;
        case 'PLANETS':
            adaptHeader('no-home');
            printDetailPlanet(url);
        break;
        case 'STARSHIPS':
            adaptHeader('no-home');
            printDetailStarship(url);
        break;
        case 'FILMS':
            adaptHeader('no-home');
            printDetailFilm(url);
        break;
        case 'SPECIES':
            adaptHeader('no-home');
            printDetailSpecie(url);
        break;
    }
}

const getRomanNumber = number => {
    if (!+number) return false;
    let digits = String(+number).split('');
    let key = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM',
               '','X','XX','XXX','XL','L','LX','LXX','LXXX','XC',
               '','I','II','III','IV','V','VI','VII','VIII','IX'];
    var roman = '', i = 3;
    while (i--) roman = (key[+digits.pop() + (i * 10)] || '') + roman;
    return Array(+digits.join('') + 1).join('M') + roman;
}


const adaptHeader = (section) => {
    const header = document.querySelector('header');
    return (section == 'no-home') ? header.classList.remove("header--home"): header.classList.add("header--home");
}
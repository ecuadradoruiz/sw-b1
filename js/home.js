const printHome = () => {
    mainContainer.innerHTML = `  
        <section class="section-home">
            <h3 class="section-home__title">ABOUT THE WEB</h3>
            <p class="section-home__description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation</p>
        </section>      
        <section class="section-home">
            <h3 class="section-home__title">SECTIONS</h3> 
            <nav class="nav">
                <a href="#" class="nav__link">Films</a>
                <a href="#" class="nav__link">Characters</a>
                <a href="#" class="nav__link">Starships</a>
                <a href="#" class="nav__link">Species</a>
                <a href="#" class="nav__link">Planets</a>
            </nav>
        </section> 
    `;
    addEventsToHomeLinks();
}


const addEventsToHomeLinks = () => {
    const homeLinks = [...document.getElementsByClassName('nav__link')];
    homeLinks.forEach(element => {
        element.addEventListener('click', () => {
            printPage(element.textContent.toUpperCase());
        });
    });
}


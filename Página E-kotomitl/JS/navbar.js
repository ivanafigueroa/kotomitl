class NavBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Cargar HTML
        fetch('navbar.html')
            .then(response => response.text())
            .then(html => {
                this.shadowRoot.innerHTML = html;

                // Cargar CSS
                /*const linkElem = document.createElement('link');
                linkElem.setAttribute('rel', 'stylesheet');
                linkElem.setAttribute('href', 'navbar.css');
                this.shadowRoot.appendChild(linkElem);*/
            })
            .catch(error => {
                console.error('Error loading navbar HTML:', error);
            });
    }
}

customElements.define('nav-bar', NavBar);

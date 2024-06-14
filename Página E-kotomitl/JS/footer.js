class footer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Cargar HTML
        fetch('footer.html')
            .then(response => response.text())
            .then(html => {
                this.shadowRoot.innerHTML = html;

                // Cargar CSS
                /*const linkElem = document.createElement('link');
                linkElem.setAttribute('rel', 'stylesheet');
                linkElem.setAttribute('href', 'footer.css');
                this.shadowRoot.appendChild(linkElem);*/
            })
            .catch(error => {
                console.error('Error loading footer HTML:', error);
            });
    }
}

customElements.define('foo-ter', footer);

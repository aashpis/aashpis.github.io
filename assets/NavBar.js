class NavBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render();
    }

    render() {
        <nav class="navbar">
            <h1>Ari Ashpis</h1>
            <div id="link-wrapper">
                <a href="/">Home</a>
                <a href="./pages/code.html">Code</a>
                <a href="./pages/art.html">Art</a>
                <a href="./pages/design.html">Design</a>
                <a href="./pages/resume.html">Resume</a>
                <a href="./pages/contact.html">Contact</a>
            </div>
        </nav>

    }
}
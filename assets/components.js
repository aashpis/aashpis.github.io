class NavBar extends HTMLElement {

    connectedCallback() {

        this.innerHTML = 
        `
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
        `
    
    }
}

customElements.define("nav-bar", NavBar);

class HeadBoilerplate extends HTMLElement {
  connectedCallback() {
    // Only inject once
    if (this._applied) return;
    this._applied = true;

    const head = document.head;

    // <meta charset="UTF-8">
    const metaCharset = document.createElement("meta");
    metaCharset.setAttribute("charset", "UTF-8");
    head.appendChild(metaCharset);

    // <meta name="viewport" content="width=device-width, initial-scale=1.0">
    const metaViewport = document.createElement("meta");
    metaViewport.name = "viewport";
    metaViewport.content = "width=device-width, initial-scale=1.0";
    head.appendChild(metaViewport);

    // <title>Personal Website</title>
    const title = document.createElement("title");
    title.textContent = "Personal Website";
    head.appendChild(title);

    // <link rel="stylesheet" href="styles.css">
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = "styles.css";
    head.appendChild(stylesheet);

    // Google Fonts preload & stylesheet
    const preconnect1 = document.createElement("link");
    preconnect1.rel = "preconnect";
    preconnect1.href = "https://fonts.googleapis.com";
    head.appendChild(preconnect1);

    const preconnect2 = document.createElement("link");
    preconnect2.rel = "preconnect";
    preconnect2.href = "https://fonts.gstatic.com";
    preconnect2.crossOrigin = "anonymous";
    head.appendChild(preconnect2);

    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Russo+One&display=swap";
    head.appendChild(fontLink);
  }
}

customElements.define("head-boilerplate", HeadBoilerplate);


class ProjectCard extends HTMLElement {

    connectedCallback() {
    this.innerHTML = `
        <div class="project-card">
            <img src="./images/image2.jpg">
            <h1>Choreography of Collapse</h1>
            <p>On-going drawing series exploring futurism and rhythm</p>
        </div>
    `
    }
}  
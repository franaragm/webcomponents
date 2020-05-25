import { LitElement, html, css } from "lit-element";
import { myRouter } from './my-router.js';

class App extends myRouter(LitElement) {

    static get styles() {
        return css`
          :host {
          }
          nav {
            padding: 1em;
            background-color: white;
            border-bottom: 1px solid #c3c3c3;
          }
          main {
            padding: 1em;
          }
          a {
            font-weight: normal;
            color: #c3c3c3;
            padding: 0 0.5em;
          }
          a.active {
            font-weight: bold;
            color: #666;
          }
        `;
    }

    render() {
        return html`
            <nav>
                <a href="/" class=${this.activePage === 'splash-screen' ? 'active' : ''}>splash-screen</a>
                <a href="/counter" class=${this.activePage === 'counter' ? 'active' : ''}>counter</a>
                <a href="/properties/Hello%20World" class=${this.activePage === 'properties' ? 'active' : ''}>properties</a>
            </nav>
            <main></main>
    `;
    }

}

customElements.define("my-app", App);
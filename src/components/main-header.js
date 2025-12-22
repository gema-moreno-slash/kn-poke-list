import { LitElement, html } from "lit";

class MainHeader extends LitElement {
    render() {
        return html`
            <header>
                <h1>KN - Pokemon List</h1>
            </header>
        `;
    }
}

customElements.define('main-header', MainHeader);
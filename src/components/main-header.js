import { LitElement, html, css, unsafeCSS } from "lit";
import bulma from 'bulma/css/bulma.css?inline';

class MainHeader extends LitElement {
    static styles = [
        unsafeCSS(bulma),
        css`
            .pic {
                height: 96px;
                width: 96px;
            }
        `
    ]

    render() {
        return html`
            <header>
                <h1 class="title is-1">KN - Pokemon List</h1>
            </header>
        `;
    }
}

customElements.define('main-header', MainHeader);
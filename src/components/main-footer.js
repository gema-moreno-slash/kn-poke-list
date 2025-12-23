import { LitElement, html, css, nothing, unsafeCSS } from "lit";
import bulma from 'bulma/css/bulma.css?inline';

class MainFooter extends LitElement {

    static styles = [
        unsafeCSS(bulma),
        css`
            .mainCont {
                text-align: center;
            }
        `
    ]

    render() {
        return html`
            <footer class="mainCont footer">
                <p>Kodeneko@2026</p>
            </footer>
        `;
    }
}

customElements.define('main-footer', MainFooter);
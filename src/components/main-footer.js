import { LitElement, html, css } from "lit";

class MainFooter extends LitElement {

    static styles = css`
        .mainCont {
            text-align: center;
        }
    `;

    render() {
        return html`
            <footer class="mainCont">
                <p>Kodeneko@2026</p>
            </footer>
        `;
    }
}

customElements.define('main-footer', MainFooter);
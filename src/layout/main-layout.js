import { LitElement, html, css } from "lit";
import '../components/main-header';
import '../components/main-footer';

class MainLayout extends LitElement {

    static styles = css`
        .mainCont {
            display: flex;
            flex-direction: column;
            height: 100vh;
            box-sizing: border-box;
            padding: 1rem;
        }
        .main {
            flex: 1;
        }
    `;

    render() {
        return html`
            <div class="mainCont">
                <main-header></main-header>
                <main class="main">Contenido</main>
                <main-footer></main-footer>
            </div>  
        `;
    }
}

customElements.define('main-layout', MainLayout);
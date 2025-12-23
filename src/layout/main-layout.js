import { LitElement, html, css } from "lit";
import { Router } from '@lit-labs/router';
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

    router = new Router(this, [
        {
            path: '',
            enter: async () => await import('../pages/list-page.js'),
            render: () => html`<list-page></list-page>`
        },
        {
            path: 'detail/:name',
            enter: async () => await import('../pages/detail-page.js'),
            render: ({name}) => html`<detail-page .name=${name}></detail-page>`
        }
    ]);

    render() {
        return html`
            <div class="mainCont">
                <main-header></main-header>
                <main class="main">
                    <p>${this.router.outlet()}</p>
                </main>
                <main-footer></main-footer>
            </div>  
        `;
    }
}

customElements.define('main-layout', MainLayout);
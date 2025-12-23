import { LitElement, html, css, unsafeCSS } from "lit";
import { Router } from '@lit-labs/router';
import bulma from 'bulma/css/bulma.css?inline';
import '../components/main-header';
import '../components/main-footer';

class MainLayout extends LitElement {

    static styles = [
        unsafeCSS(bulma),
        css`
            .mainCont {
                display: flex;
                flex-direction: column;
                height: 100vh;
                box-sizing: border-box;
            }
            .main {
                flex: 1;
                padding: 2rem 2rem;
            }
        `
    ]

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
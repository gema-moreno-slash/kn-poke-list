import { LitElement, html } from "lit";
import { Router } from '@lit-labs/router';

class AppBootstrap extends LitElement {

    router = new Router(this, [
        {
            path: '/*',
            enter: async () => await import('./layout/main-layout'),
            render: () => html`<main-layout></main-layout>`
        }
    ])

    render() {
        return this.router.outlet();
    }
}

customElements.define('app-botstrap', AppBootstrap);
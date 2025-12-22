import { LitElement, html } from "lit";

class DetailPage extends LitElement {

    render() {
        return html`<p>Detail Page</p>`;
    }
}

customElements.define('detail-page', DetailPage);
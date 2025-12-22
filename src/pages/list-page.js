import { LitElement, html } from "lit";

class ListPage extends LitElement {

    render() {
        return html`<p>List Page</p>`;
    }
}

customElements.define('list-page', DetailPage);
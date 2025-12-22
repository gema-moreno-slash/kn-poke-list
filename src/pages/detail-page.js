import { LitElement, html } from "lit";

class DetailPage extends LitElement {

    render() {
        return html`
            <div>
                <h2>Detail Page</h2>
            </div>
        `;
    }
}

customElements.define('detail-page', DetailPage);
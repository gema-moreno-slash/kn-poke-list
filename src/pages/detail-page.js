import { LitElement, html } from "lit";
import { getPokemon } from '../service/poke-service';

class DetailPage extends LitElement {

    static properties = {
        name: { type: String },
        poke: { state: true }
    }

    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();
        getPokemon(this.name)
            .then(result => {
                console.log(result)
                this.poke = JSON.stringify(result.data);
            })
            .catch(err => console.log(err))
            .finally(() => console.log('finish'))
    }

    render() {
        return html`
            <div>
                <h2>Detail Page</h2>
                <code>${this.poke}</code>
            </div>
        `;
    }
}

customElements.define('detail-page', DetailPage);
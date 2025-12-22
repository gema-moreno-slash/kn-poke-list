import { LitElement, html } from "lit";
import { getPokemon } from '../service/poke-service';
import '../components/poke-desc';

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
                console.log(result.data)
                this.poke = result.data;
            })
            .catch(err => console.log(err))
            .finally(() => console.log('finish'))
    }

    render() {
        return html`
            <div>
                <h2>Detail Page</h2>
                <div>
                    <a href="#" @click=${() => window.history.back()}>Back</a>
                </div>
                ${this.poke && html`
                    <div>
                        <poke-desc label="name" .value=${this.poke.name}></poke-desc>
                        <poke-desc label="height" .value=${this.poke.height}></poke-desc>
                        <poke-desc label="weight" .value=${this.poke.weight}></poke-desc>
                    </div>
                `}
            </div>
        `;
    }
}

customElements.define('detail-page', DetailPage);
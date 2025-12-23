import { LitElement, html } from "lit";
import { getPokemon } from '../service/poke-service';
import { map } from 'lit/directives/map.js';
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
                <h2>Detail ${this.poke ? this.poke.name : '---'}</h2>
                <div>
                    <a href="#" @click=${() => window.history.back()}>Back</a>
                </div>
                ${this.poke && html`
                    <img src=${this.poke.sprites.front_default} />
                    <h3>Stats</h3>
                    <ul>
                        <li><poke-desc label="height" .value=${this.poke.height}></poke-desc></li>
                        <li><poke-desc label="weight" .value=${this.poke.weight}></poke-desc></li>
                    </ul>
                    <h3>Type</h3>
                    <ul>
                        ${map(this.poke.types, s => html`<li>${s.type.name}</li>`)}
                    </ul>
                `}
            </div>
        `;
    }
}

customElements.define('detail-page', DetailPage);
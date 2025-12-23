import { LitElement, html, css, nothing } from "lit";
import { getPokemon } from '../service/poke-service';
import { map } from 'lit/directives/map.js';
import '../components/poke-desc';

class DetailPage extends LitElement {

    static properties = {
        name: { type: String },
        poke: { state: true },
        loading: {state: true},
        error: {state: false}
    }

    constructor() {
        super();
        this.loading = true;
        this.error = false;
    }

    static styles = css`
        .pic {
            height: 96px;
            width: 96px;
        }
    `

    connectedCallback() {
        super.connectedCallback();
        setTimeout(() => {
            getPokemon(this.name)
                .then(result => {
                    console.log(result.data)
                    this.poke = result.data;
                })
                .catch(err => {
                    this.error = true;
                    console.log(err);
                })
                .finally(() => this.loading = false)
        }, 2000)
    }

    render() {
        const loadingTpl = html`
            <p>Loading...</p>
        `;

        const infoTpl = html`
            <h2>Detail ${this.poke?.name}</h2>
            <div>
                <a href="#" @click=${() => window.history.back()}>Back</a>
            </div>
            <img class="pic" src=${this.poke?.sprites.front_default} />
            <h3>Stats</h3>
            <ul>
                <li><poke-desc label="height" .value=${this.poke?.height}></poke-desc></li>
                <li><poke-desc label="weight" .value=${this.poke?.weight}></poke-desc></li>
            </ul>
            <h3>Type</h3>
            <ul>
                ${map(this.poke?.types, s => html`<li>${s.type.name}</li>`)}
            </ul>
        `;

        const errorTpl = html`<p>Hubo un error</p>`;

        return html`
            ${this.loading ? loadingTpl : nothing}
            ${!this.loading && this.poke ? infoTpl : nothing}
            ${!this.loading && this.error ? errorTpl : nothing}
        `;
    }
}

customElements.define('detail-page', DetailPage);
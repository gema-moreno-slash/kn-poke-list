import { LitElement, html, css, nothing, unsafeCSS } from "lit";
import { getPokemon } from '../service/poke-service';
import { map } from 'lit/directives/map.js';
import '../components/poke-desc';
import bulma from 'bulma/css/bulma.css?inline';
class DetailPage extends LitElement {

    static properties = {
        name: { type: String },
        poke: { state: true },
        loading: {state: true},
        error: {state: false}
    }

    constructor() {
        super();
        console.log(bulma)
        this.loading = true;
        this.error = false;
    }

    static styles = [
        unsafeCSS(bulma),
        css`
            .pic {
                height: 96px;
                width: 96px;
            }
        `
    ]

    connectedCallback() {
        super.connectedCallback();
        // Fake loading delay
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
        }, 1000)
    }

    renderDetail() {
        return html`
            <div>
                <button class="button is-primary is-medium" @click=${() => window.history.back()}>Back</button>
            </div>
            <h2 class="title is-2">Detail ${this.poke.name}</h2>
            <div class="block box">
                <img class="pic" src=${this.poke.sprites.front_default} />
                <h3 class="title is-3">Stats</h3>
                <ul>
                    <li><poke-desc label="height" .value=${this.poke.height}></poke-desc></li>
                    <li><poke-desc label="weight" .value=${this.poke.weight}></poke-desc></li>
                </ul>
                <h3 class="title is-3">Type</h3>
                <ul>
                    ${map(this.poke?.types, s => html`<li>${s.type.name}</li>`)}
                </ul>
            </div>
        `
    }

    render() {
        const loadingTpl = html`<p>Loading...</p>`;
        const errorTpl = html`<p>Hubo un error</p>`;

        return html`
            ${this.loading ? loadingTpl : nothing}
            ${!this.loading && this.poke ? this.renderDetail() : nothing}
            ${!this.loading && this.error ? errorTpl : nothing}
        `;
    }
}

customElements.define('detail-page', DetailPage);
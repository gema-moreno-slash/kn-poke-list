import { LitElement, html, css, nothing } from "lit";
import { getAllPokemon } from '../service/poke-service';
import { map } from 'lit/directives/map.js';
// import bulma from 'bulma/css/bulma.css';

const LIMIT = 10;

class ListPage extends LitElement {

    // static shadowRootOptions = {...LitElement.shadowRootOptions, mode: "open"};

    // static styles = [bulma];

    static properties = {
        pokeList: {state: true},
        loading: {state: true},
        error: {state: false}
    }

    page = 0;
    pageMax = 0;

    constructor() {
        super();
        this.pokeList = [];
        this.loading = true;
        this.error = false;
    }

    createRenderRoot() {
        return this;
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('changePage', this.getPokemonPage);
        const event = new CustomEvent('changePage', {
            detail: { page: 0 }
        });
        this.dispatchEvent(event);
    }

    disconnectedCallback() {
        this.removeEventListener('changePage', this.getPokemonPage);
        super.disconnectedCallback();
    }

    getPokemonPage(e) {
        const {detail} = e;
        getAllPokemon(detail.page, this.LIMIT)
            .then(result => {
                console.log(result.data.results);
                this.pageMax = result.data.count / LIMIT;
                this.pokeList = result.data.results;
            })
            .catch(err => {
                this.error = true;
                console.log(err);
            })
            .finally(() => this.loading = false)
    }

    renderTable() {
        return html`
            <div>
                <h2>List Page</h2>
                <div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Pic</th>
                                <th>Name</th>
                                <th>Detail</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${map(this.pokeList, poke => html`
                                    <tr>
                                        <td>--</td>
                                        <td>--</td>
                                        <td>${poke.name}</td>
                                        <td><a href="/detail/${poke.name}">detail</a></td>
                                    </tr>
                                `)}
                        </tbody>
                    </table>
                </div>
                <div>
                    <button @click=${this.prev} ?disabled=${this.page === 0}>prev</button>
                    <button @click=${this.next} ?disabled=${this.page === this.pageMax}>next</button>
                </div>
            </div>
        `;
    }

    render() {
        const loadingTpl = html`<p>Loading...</p>`;
        const errorTpl = html`<p>Hubo un error</p>`;

        return html`
            ${this.loading ? loadingTpl : nothing}
            ${!this.loading && this.pokeList ? this.renderTable() : nothing}
            ${!this.loading && this.error ? errorTpl : nothing}
        `;
    }

    prev() {
        this.page--;
        const event = new CustomEvent('changePage', {
            detail: { page: this.page }
        });
        this.dispatchEvent(event);
    }

    next() {
        this.page++;
        const event = new CustomEvent('changePage', {
            detail: { page: this.page }
        });
        this.dispatchEvent(event);
    }
}

customElements.define('list-page', ListPage);
import { LitElement, html, css } from "lit";
import { getAllPokemon } from '../service/poke-service';
import { map } from 'lit/directives/map.js';
// import bulma from 'bulma/css/bulma.css';

const LIMIT = 10;

class ListPage extends LitElement {

    // static shadowRootOptions = {...LitElement.shadowRootOptions, mode: "open"};

    // static styles = [bulma];

    static properties = {
        pokemonList: {state: true}
    }

    page = 0;
    pageMax = 0;

    constructor() {
        super();
        this.pokemonList = [];
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
                this.pokemonList = result.data.results;
            })
            .catch(err => console.log(err))
            .finally(() => console.log('finish'))
    }

    render() {
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
                            ${map(this.pokemonList, poke => html`
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
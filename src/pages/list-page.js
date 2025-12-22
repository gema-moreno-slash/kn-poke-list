import { LitElement, html } from "lit";
import { getAllPokemon } from '../service/poke-service';
import { map } from 'lit/directives/map.js';

class ListPage extends LitElement {

    static properties = {
        pokemonList: {state: true}
    }

    constructor() {
        super();
        this.pokemonList = [];
    }

    connectedCallback() {
        super.connectedCallback();
        getAllPokemon()
            .then(result => {
                console.log(result.data.results)
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
                    <table>
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
            </div>
        `;
    }
}

customElements.define('list-page', ListPage);
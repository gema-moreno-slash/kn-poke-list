import { LitElement, html, css } from "lit";

class PokeDesc extends LitElement {

    static styles = css`
        .mainCont {
            text-align: center;
            display: flex;
        }
        .label {
            font-weight: bold;
            flex-basis: 10rem;
            text-align: left;
        }
        .value {

        }
    `;

    static properties = {
        label: { type: String },
        value: { type: String }
    }

    render() {
        return html`
            <div class="mainCont">
                <div class="label">${this.label}</div>
                <div class="value">${this.value}</div>
            </div>
        `;
    }
}

customElements.define('poke-desc', PokeDesc);
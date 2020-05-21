import { LitElement, html } from 'lit-element';

export class MyCounter extends LitElement {
  static get properties() {
    return {
      clics: {
        type: Number
      }
    };
  }

  constructor() {
    super();
    this.clics = 0;
  }

  _onIncrement() {
    this.clics += 1;
  }

  render() {
    return html`
      <p>Clics realizados: ${this.clics}</p>
      <button @click=${this._onIncrement}>Click!</button>
    `;
  }
}
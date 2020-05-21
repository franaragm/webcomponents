import { html } from 'lit-html';
import '../src/components/00-spash-screen/splash-screen-component.js';
import '../src/components/01-counter/my-counter-component.js';

export default {
  title: 'webcomponents',
};

export const SplashScreen = () =>
  html`
    <splash-screen></splash-screen>
  `;

export const Counter = () =>
  html`
    <my-counter></my-counter>
  `;

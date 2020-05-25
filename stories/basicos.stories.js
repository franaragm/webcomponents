import { html } from 'lit-html';
import '../src/components/00-spash-screen/splash-screen-component.js';
import '../src/components/01-counter/my-counter-component.js';
import '../src/components/02-propiedades-atributos/properties-attributes-component.js';

export default {
  title: 'Showcase Tutorial/Basicos',
  /* parameters: { options: { 
    selectedBarPanel: 'storybook/canvas',
    uniqueBarPanel: 'storybook/canvas' 
  } }, */
};

export const SplashScreen = () =>
  html`
    <splash-screen></splash-screen>
  `;

export const Counter = () =>
  html`
    <my-counter></my-counter>
  `;

  export const PropiedadesAtributos = () =>
  html`
    <properties-and-attributes message="Hello world"></properties-and-attributes>
  `;

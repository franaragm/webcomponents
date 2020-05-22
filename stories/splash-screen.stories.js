import { html } from 'lit-html';
import '../src/components/00-spash-screen/splash-screen-component.js';

export default {
  title: 'Screens',
  includeStories: ['SplashScreen']
};

export const SplashScreen = () =>
  html`
    <splash-screen></splash-screen>
  `;

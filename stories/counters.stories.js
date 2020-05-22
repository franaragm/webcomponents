import { html } from 'lit-html';
import '../src/components/01-counter/my-counter-component.js';

export default {
  title: 'Counters',
  includeStories: ['Counter']
};

export const Counter = () =>
  html`
    <my-counter></my-counter>
  `;

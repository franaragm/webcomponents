import { Router } from '@vaadin/router';

import './components/00-spash-screen/splash-screen-component.js';
import './components/01-counter/my-counter-component.js';

// mixin
export const myRouter = (BaseClass) =>
    class extends BaseClass {

        static get properties() {
            return {
                activePage: { type: String },
            };
        }

        firstUpdated() {
            this.routes = [
                {
                    path: '/',
                    children: [
                        {
                            path: '',
                            component: 'splash-screen',
                            action: () => {
                                this.activePage = 'splash-screen';
                            },
                        },
                        {
                            path: '/counter',
                            component: 'my-counter',
                            action: () => {
                                this.activePage = 'counter';
                            },
                        },
                    ],
                },
            ];
            const router = new Router(this.shadowRoot.querySelector('main'));
            router.setRoutes(this.routes);
        }
    };
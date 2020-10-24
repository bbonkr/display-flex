import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { initializeIcons } from '@uifabric/icons';
const Hot = hot(App);

initializeIcons();

ReactDOM.render(<Hot />, document.querySelector('#app'));

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/sw.js')
            .then((registration) => {
                // tslint:disable:no-console
                console.info('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.info('SW registration failed: ', registrationError);
            });
    });
}

/* @refresh reload */
import { enableScheduling } from 'solid-js';
import { render } from 'solid-js/web';

import App from './App';

enableScheduling();

render(() => <App />, document.getElementById('root') as HTMLElement);

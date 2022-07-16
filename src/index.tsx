/* @refresh reload */
import { enableScheduling } from "solid-js"
import { render } from 'solid-js/web';

import './index.css';
import App from './App';

enableScheduling()

render(() => <App />, document.getElementById('root') as HTMLElement);

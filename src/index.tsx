/* @refresh reload */
import { render } from 'solid-js/web';
import App from './App';
import 'virtual:uno.css';

render(() => <App />, document.getElementById('app')!);

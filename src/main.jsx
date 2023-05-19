import { render } from 'preact'
import { App } from './app.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

render(<App />, document.getElementById('app'))

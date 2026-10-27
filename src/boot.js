import '../styles.css';
import { start } from '../catalog.js';

const path = location.pathname;
if (/^\/en(?=\/|$)/.test(path)) {
  const rest = path.replace(/^\/en(?=\/|$)/, '') || '/';
  history.replaceState(null, '', rest + location.search + location.hash);
}
start();

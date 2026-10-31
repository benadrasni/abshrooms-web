import '../styles.css';
import { start } from '../catalog.js';
import { replaceLocation } from './analytics.js';

const path = location.pathname;
if (/^\/en(?=\/|$)/.test(path)) {
  const rest = path.replace(/^\/en(?=\/|$)/, '') || '/';
  replaceLocation(rest + location.search + location.hash);
}
start();

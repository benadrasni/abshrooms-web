import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { COPY, href, parse } from '../catalog.js';
import { allowAnalytics, analyticsState, refuseAnalytics, subscribeAnalytics } from './analytics';

export default function ConsentBanner() {
  const location = useLocation();
  const route = parse(location.pathname);
  const copy = COPY[route.lang] || COPY.en;
  const [state, setState] = useState(analyticsState);
  const bar = useRef(null);

  useEffect(() => subscribeAnalytics(setState), []);

  useEffect(() => {
    const root = document.documentElement;
    if (!state.ask) {
      root.classList.remove('ga-ask');
      root.style.removeProperty('--ga-banner-h');
      return undefined;
    }
    root.classList.add('ga-ask');
    const node = bar.current;
    if (!node || typeof ResizeObserver === 'undefined') return undefined;
    const apply = () => root.style.setProperty('--ga-banner-h', node.offsetHeight + 'px');
    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(node);
    return () => {
      observer.disconnect();
      root.classList.remove('ga-ask');
      root.style.removeProperty('--ga-banner-h');
    };
  }, [state.ask, copy.gaBanner]);

  if (!state.ask) return null;

  return (
    <div className="ga-banner" ref={bar} role="region" aria-label={copy.privacy}>
      <p>{copy.gaBanner}</p>
      <div className="ga-actions">
        <button type="button" className="ga-choice" onClick={allowAnalytics}>{copy.gaAllow}</button>
        <button type="button" className="ga-choice" onClick={refuseAnalytics}>{copy.gaRefuse}</button>
        <a className="ga-choice" href={href('/privacy', route.lang)}>{copy.privacy}</a>
      </div>
    </div>
  );
}

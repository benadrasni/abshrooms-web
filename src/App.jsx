import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { bindCatalog, COPY, parse, render } from '../catalog.js';
import ConsentBanner from './ConsentBanner';
import { pageview, subscribeAnalytics } from './analytics';

function CatalogScreen() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    bindCatalog((url, options) => {
      navigate(url, { replace: !!(options && options.replace) });
    });
  }, [navigate]);

  useEffect(() => {
    render({ pathname: location.pathname, search: location.search });
    const route = parse(location.pathname);
    const copy = COPY[route.lang] || COPY.en;
    pageview(location, {
      appName: copy.app,
      lang: route.lang,
      pageType: route.view === 'missing' ? 'other' : route.view,
      species: route.view === 'mushroom' ? route.key : '',
    });
  }, [location.pathname, location.search, location.key]);

  useEffect(() => {
    return subscribeAnalytics(() => {
      if (parse(location.pathname).view !== 'privacy') return;
      render({ pathname: location.pathname, search: location.search, keepScroll: true });
    });
  }, [location.pathname, location.search]);

  return <div id="app" />;
}

function StripEn() {
  const location = useLocation();
  const rest = location.pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  return <Navigate to={`${rest}${location.search}${location.hash}`} replace />;
}

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/en" element={<Navigate to="/" replace />} />
        <Route path="/en/*" element={<StripEn />} />
        <Route path="*" element={<CatalogScreen />} />
      </Routes>
      <ConsentBanner />
    </>
  );
}

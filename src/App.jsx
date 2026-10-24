import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { bindCatalog, render } from '../catalog.js';

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
  }, [location.pathname, location.search, location.key]);

  return <div id="app" />;
}

function StripEn() {
  const location = useLocation();
  const rest = location.pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  return <Navigate to={`${rest}${location.search}${location.hash}`} replace />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/en" element={<Navigate to="/" replace />} />
      <Route path="/en/*" element={<StripEn />} />
      <Route path="*" element={<CatalogScreen />} />
    </Routes>
  );
}

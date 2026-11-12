import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDive from "./pages/ProductDive";
import ProductSomna from "./pages/ProductSomna";
import ProductLindungiId from "./pages/ProductLindungiId";
import ProductTitahbogani from "./pages/ProductTitahbogani";
import Games from "./pages/Games";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import PrivacyDive from "./pages/PrivacyDive";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/dive" element={<ProductDive />} />
          <Route path="/products/somna" element={<ProductSomna />} />
          <Route path="/products/lindungi-id" element={<ProductLindungiId />} />
          <Route path="/products/titahbogani" element={<ProductTitahbogani />} />
          {/* /games/<game> is served by the games deployment (see vercel.json), only the hub lives here */}
          <Route path="/games" element={<Games />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/privacy/dive" element={<PrivacyDive />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </LanguageProvider>
  );
}

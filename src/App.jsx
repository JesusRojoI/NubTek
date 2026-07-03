import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { CartProvider } from './context/CartContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Planes from './pages/Planes';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Terminos from './pages/Terminos';
import Privacidad from './pages/Privacidad';
import Reembolsos from './pages/Reembolsos';
import ProductCategory from './pages/ProductCategory';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Success from './pages/Success';
import Personalizado from './pages/Personalizado';
import ProductDetail from './pages/ProductDetail';
function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <Router>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/planes" element={<Planes />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/terminos-y-condiciones" element={<Terminos />} />
              <Route path="/politica-privacidad" element={<Privacidad />} />
              <Route path="/politica-de-devoluciones-y-reembolsos" element={<Reembolsos />} />
              <Route path="/productos/:category" element={<ProductCategory />} />
              <Route path="/carrito" element={<Cart />} />
              <Route path="/finalizar-compra" element={<Checkout />} />
              <Route path="/compra-exitosa" element={<Success />} />
              <Route path="/personalizado" element={<Personalizado />} />
              <Route path="/producto/:category/:productId" element={<ProductDetail />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;
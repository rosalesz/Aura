import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';

// Pages imports
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/Cart';
import LoginPage from './pages/Login';

const Home = () => (
  <>
    <Hero />
    <ProductGrid />
    <InfoSection />
  </>
);

function App() {
  return (
    <Router>
      <AuthProvider>
        <main className="bg-slate-950 min-h-screen text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200 flex flex-col">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
          <Footer />
        </main>
      </AuthProvider>
    </Router>
  );
}


export default App;
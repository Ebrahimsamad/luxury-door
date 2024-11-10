import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/404";
import Layout from "./layout/Layout";
import Contact from "./pages/Contact";
import CertificatesPage from "./pages/CertificatesPage";
import WpcPage from "./pages/WpcPage";
import AboutPage from "./pages/AboutPage";
import WhatsAppButton from "./features/layout/Whatsapp";

function App() {
  return (
    <BrowserRouter>
      <WhatsAppButton />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate replace to="/dashboard" />} />
          <Route path="/dashboard" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/wpc" element={<WpcPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

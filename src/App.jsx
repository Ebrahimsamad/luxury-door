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
import Design from "./pages/Design";
import Door from "./pages/Door";
import SubmitOrder from "./pages/SubmitOrder";
import { Toaster } from "react-hot-toast";
import ScrollToTopButton from "./ui/ScrollToTopButton ";

function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-left"
        gutter={15}
        containerStyle={{ margin: "80px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
          },
        }}
      />
      <ScrollToTopButton />
      <WhatsAppButton />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate replace to="/dashboard" />} />
          <Route path="/dashboard" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/wpc" element={<WpcPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/design" element={<Design />} />
          <Route path="/design/:categoryId" element={<Door />} />
          <Route path="/order" element={<SubmitOrder />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

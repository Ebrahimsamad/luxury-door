import { Outlet } from "react-router-dom";
import Footer from "../features/layout/Footer";
import Header from "../features/layout/Header";
// import ContactHeader from "../features/layout/ContactHeader";

function Layout() {
  return (
    <>
      {/* <ContactHeader /> */}
      <Header />
      <>
        <Outlet />
      </>
      <Footer />
    </>
  );
}

export default Layout;

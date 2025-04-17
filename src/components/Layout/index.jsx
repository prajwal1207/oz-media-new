// Layout.jsx

import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./header";

const Layout = () => {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      <main className="App">
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import NavBar from "./navbar/NavBar";
import TopBanner from "./navbar/TopBanner";

function AppLayout() {
  return (
    <div>
      <TopBanner />
      <header className="sticky top-0  z-30 bg-white shadow-md">
        <NavBar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default AppLayout;

import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import NavBar from "./navbar/NavBar";

function AppLayout() {
  return (
    <div>
      <header className="sticky top-0  z-30 bg-white ">
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

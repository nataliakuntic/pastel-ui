import { Outlet, useLocation } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import SideMenu from "./layout/SideMenu";
import HeroSubheader from "./layout/HeroSubheader";

export default function Root() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="max-w-screen-xl mx-auto px-6">
      <Header />

      {!isHomePage && <HeroSubheader />}

      <div className={`flex gap-4 ${isHomePage ? "" : "mt-4"}`}>
        {!isHomePage && (
          <aside className="w-1/4">
            <SideMenu />
          </aside>
        )}

        <main className={isHomePage ? "w-full" : "w-3/4"}>
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}

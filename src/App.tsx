import "./App.css";
import { Home } from "./home/home";
import { NavDesktop } from "./components/navbar/nav-desktop";
import { NavMobile } from "./components/navbar/nav-mobile";
import { MobileMenu } from "./components/navbar/mobile-menu";

function App() {
  return (
    <div className="">
      <NavDesktop />
      <NavMobile />
      <main className="xl:pl-20 lg:pl-6 overflow-hidden flex h-screen flex-col bg-off-white w-full max-w-full">
        <Home />
        <MobileMenu
          isOpen={false}
          toggleMenu={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </main>
    </div>
  );
}

export default App;

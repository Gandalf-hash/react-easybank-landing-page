import { Home } from "./home/home";
import { NavDesktop } from "./components/navbar/nav-desktop";
import { NavMobile } from "./components/navbar/nav-mobile";
import { About } from "./about/about";

function App() {
  return (
    <div>
      <NavDesktop />
      <NavMobile />
      <main className="overflow-hidden flex flex-col w-full max-w-full">
        <Home />
        <About />
      </main>
    </div>
  );
}

export default App;

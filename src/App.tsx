import { Home } from "./components/home/home";
import { NavDesktop } from "./components/navbar/nav-desktop";
import { NavMobile } from "./components/navbar/nav-mobile";
import { About } from "./components/benefits/benefits";

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

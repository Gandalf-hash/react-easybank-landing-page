import { Home } from "./home/home";
import { NavDesktop } from "./components/navbar/nav-desktop";
import { NavMobile } from "./components/navbar/nav-mobile";

function App() {
  return (
    <div>
      <NavDesktop />
      <NavMobile />
      <main className="lg:pl-20  overflow-hidden flex h-screen flex-col bg-off-white w-full max-w-full">
        <Home />
      </main>
    </div>
  );
}

export default App;

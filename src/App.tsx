import { Home } from "./components/home/home";
import { NavDesktop } from "./components/navbar/nav-desktop";
import { NavMobile } from "./components/navbar/nav-mobile";
import { LatestArticlesSection } from "./components/articles/latest-articles";
import { Footer } from "./components/footer/footer";
import { BenefitsSection } from "./components/benefits/benefits";

function App() {
  return (
    <div>
      <NavDesktop />
      <NavMobile />
      <main className="overflow-hidden flex flex-col w-full max-w-full">
        <Home />
        <BenefitsSection />
        <LatestArticlesSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;

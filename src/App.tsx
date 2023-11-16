import "./App.css";
import { Home } from "./home/home";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <main className="xl:pl-20 pl-6 overflow-hidden flex h-screen flex-col bg-off-white w-full max-w-full">
        <Home />
      </main>
    </div>
  );
}

export default App;

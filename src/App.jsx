import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import ProductViewer from "./components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)
const App = () => {
  return (
    <main>
      <NavBar/>
      <HeroSection />
      <ProductViewer/>
    </main>
  );
};

export default App;
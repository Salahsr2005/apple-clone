import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import ProductViewer from "./components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Showcase from "./components/Showcase";
import Performance from "./components/Performance";
import Features from "./components/Features";
import Footer from "./components/Footer";
gsap.registerPlugin(ScrollTrigger)
const App = () => {
  return (
    <main>
      <NavBar/>
      <HeroSection />
      <ProductViewer/>
      <Showcase/>
      <Performance/>
      <Features/>
      <Footer/>
    </main>
  );
};

export default App;
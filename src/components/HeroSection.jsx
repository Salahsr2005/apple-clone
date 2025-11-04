import { useEffect,useRef } from "react";

const HeroSection = () => {
    const videoRef = useRef()
    useEffect(()=>{
        if(videoRef.current) videoRef.current.playbackRate = 3
    },[])
  return (
    <section id="hero"> 
        <div>
            <h1>Macbook Pro</h1>
            <p className="text-white">This Template Was implemented by <span className="text-cyan-900 underline">Parabex Labs</span> For More Info Visit Us</p>
            <img src="../title.png" alt="Macbook Title" />
        </div>
        <video ref={videoRef} src="../videos/hero.mp4" autoPlay muted playsInline />
        <button>Buy</button>
        <p>From <span className="text-white">250 000 DZD</span> to <span className="text-white">500 000 DZD</span></p>
    </section>
  );
};

export default HeroSection;
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
            <img src="../title.png" alt="Macbook Title" />
        </div>
        <video ref={videoRef} src="../videos/hero.mp4" autoPlay muted playsInline />
        <button>Buy</button>
        <p>From 250 000 DZD to 500 000 DZD</p>
    </section>
  );
};

export default HeroSection;
import "./app.scss"
import {useState, useEffect} from "react";
import Navbar from "./components/NavBar/Navbar";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
//import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
//import VideoSlider from "./components/videoSlider/VideoSlider";

const App = () => {

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div className="app">
    <div className={viewportWidth > 600 ? 'wide-layout' : 'narrow-layout'}>
    <Cursor/>
    <section className="background-container" id="Homepage">
      {/* Background video common to both components */}
      <video autoPlay loop muted className="background-video">
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
     <Navbar/>
     <Hero/>
    </section>

    {/* <section id="Services">
      <Parallax type="services"/>
    </section> */}
    
    <Portfolio/>
    

    <section  id="Services">
      <Services/>
    </section>

    {/* <section>
      <Services/>
    </section> */}

    {/* <section id="Portfolio">
      <Parallax type="Portfolio"/>
    </section>  */}
    
    
    <section id="Contact">
      <Contact/>
    </section>

    </div>
  </div>;
};

export default App;

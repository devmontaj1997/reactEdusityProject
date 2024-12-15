import { useState } from "react";
import AboutUs from "./components/About us/AboutUs";
import Campus from "./components/Campus/Campus";
import Contact from "./components/Contact us/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Program from "./components/Program/Program";
import Testimonials from "./components/Testimonials/Testimonials";
import VideoPopap from "./components/videoPopap/VideoPopap";

const App = () => {
  const [showVideo, setshowVideo] = useState(false);
  const handleshowvideo = () => setshowVideo(true);
  const handleHidevideo = () => setshowVideo(false);
  return (
    <>
      {showVideo && <VideoPopap handleHidevideo={handleHidevideo} />}
      <Header />
      <Hero />
      <Program />
      <AboutUs handleshowvideo={handleshowvideo} />
      <Campus />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

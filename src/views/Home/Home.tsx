import React, { useState, useRef, useEffect } from "react";
import Navbar from "../../components/UI/Navbar/Navbar";
import VideoSection from "../../components/UI/HeroSection/VideoSection";
import ContactForm from "../../components/common/ContactForm/ContactForm";
import Footer from "../../components/UI/Footer/Footer";
import SliderComponent from "../../components/UI/Slider/Slider";

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNavClick = (index: number) => {
    setCurrentIndex(index);
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: window.innerHeight * index,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollTop = containerRef.current.scrollTop;
        const index = Math.round(scrollTop / window.innerHeight);
        setCurrentIndex(index);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div
        ref={containerRef}
        className="h-screen w-full overflow-y-scroll snap-y snap-mandatory hide-scrollbar">
        <div className="snap-start h-screen w-full">
          <VideoSection
            currentIndex={currentIndex}
            setCurrentIndex={handleNavClick}
          />
        </div>
      </div>
      <SliderComponent/>
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;

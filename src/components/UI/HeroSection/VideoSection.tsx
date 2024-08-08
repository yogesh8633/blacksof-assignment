import React from "react";
import video1 from "../../../assets/videos/heroVideo1.mp4";
import video2 from "../../../assets/videos/heroVideo2.mp4";
import video3 from "../../../assets/videos/heroVideo3.mp4";
import video4 from "../../../assets/videos/heroVideo4.mp4";
import NavSection from "./Navsection";

const videos = [
  { src: video4, content: "Apparel", description: "Enabling the creation of sustainable, stylish and Functional textile with performance-driven interlining solutions" },
  { src: video3, content: "Automotive", description: "Designing nonwoven solutions for the automotive industry with high-performance materials, enhancing comfort and durability" },
  { src: video1, content: "Filtration", description: "Delivering filtration solutions that ensure purity, health and safety for a variety of applications" },
  { src: video2, content: "Customised Solutions", description: "Addressing a wide array of applications, from hygiene products to industrial innovations" },
];

const VideoSection: React.FC<{ currentIndex: number; setCurrentIndex: (index: number) => void }> = ({ currentIndex, setCurrentIndex }) => {
  return (
    <div className="relative h-full w-full">
      {videos.map((video, index) => (
        <div key={index} className="h-screen w-full snap-start relative group">
          <video className="w-full h-full object-cover" autoPlay muted loop>
            <source src={video.src} type="video/mp4" />
          </video>
          <div className="absolute top-28 left-6 sm:top-24 sm:left-8 md:top-32 md:left-12 lg:top-40 lg:left-16 p-2 md:p-4 z-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">Elevate Experience</h1>
          </div>
          <div className="absolute bottom-2 left-6 sm:bottom-8 sm:left-8 md:bottom-12 md:left-12 lg:bottom-16 lg:left-16 p-2 md:p-4 z-20 text-white transition-all duration-500 ease-in-out group-hover:bottom-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl mb-2">{video.content}</h2>
            <p className="opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 text-lg sm:text-xl md:text-xl lg:text-xl max-w-xl">{video.description}</p>
            <button className="bg-[#00bfff] rounded-full text-white font-bold px-3 py-2 sm:px-4 sm:py-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 mt-5 text-sm sm:text-base md:text-lg">Know More</button>
          </div>
          {currentIndex === index && (
            <>
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-new text-white z-10">
              </div>
              <NavSection currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default VideoSection;

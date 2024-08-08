import React from 'react';

const headings = ["Apparel", "Automotive", "Filtration", "Customised Solutions"];

const NavSection: React.FC<{ currentIndex: number; setCurrentIndex: (index: number) => void }> = ({ currentIndex, setCurrentIndex }) => {
  return (
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 p-4  bg-opacity-75 text-white text-end space-y-4 z-20">
      {headings.map((label, index) => (
        <p
        key={index}
        onClick={() => setCurrentIndex(index)}
        className={`px-4 py-0 block font-bold cursor-pointer ${currentIndex === index ? 'text-[#00bfff]' : 'text-gray-600'}`}
        >
          {label}
        <span className={`bullet ms-2 ${currentIndex === index ? 'bg-[#00bfff]' : 'bg-gray-600'}`}></span>

        </p>
      ))}
    </div>
  );
};

export default NavSection;

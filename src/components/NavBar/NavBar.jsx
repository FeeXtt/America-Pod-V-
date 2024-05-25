import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css'; // Ensure to import Tailwind CSS
import AmericaLogo from "./AmericaLogo.png";
import PodVeziLogo from "./PodVeziLogo.png";
const navItems = ['ČLÁNKY', 'VIDEA', 'DATABÁZE', 'DISKUZE'];

export default function NavBar() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const logoStyle = {
    transform: `translateY(${Math.max(-116, 100 - scrollY)}px)`, // Slide down when at top, slide up when scrolling
    transition: 'transform 0.2s ease-out', // Smooth transition for the movement
  };

  return (
    <nav className="bg-red-900 text-white sticky top-0 z-10">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto p-6 relative">
        <div className="absolute left-0 m-6 bg-red-900 " style={logoStyle}>
          <img src={AmericaLogo} alt="America Logo" className="max-h-60 " />
          <img src={PodVeziLogo} alt="America Logo" className="max-w-60 -mt-1 mb-2" />
        </div>
        <ul className="flex space-x-8 ml-auto">
          {navItems.map((item, index) => (
            <li key={index} className="text-lg ">{item}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

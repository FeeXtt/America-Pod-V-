import {React, useState, useEffect } from 'react';
import AmericaLogo from "./AmericaLogo.png";
import PodVeziLogo from "./PodVeziLogo.png";
import "./NavBar.css";
import { Link } from 'react-router-dom';
import Button from '../Button/Button';


const navItems = [['ÚVOD', "/"], ['MENU', "/menu"], ['GALERIE', "/galerie"], ['KONTAKT', "/kontakt"]];

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
    transform: `translateY(${Math.max(-116, 100 - scrollY)}px)`,
    // transition: 'transform 0.2s ease-out',
  };

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="font-notable bg-red-900 sticky top-0 z-50 drop-shadow-element">
      <div className="md:flex items-center justify-between max-w-screen-xl mx-auto p-6">

          <div className="fixed bg-red-900 invisible md:visible rounded-b-xl" style={logoStyle}>

            <img src={AmericaLogo} alt="America Logo" className="max-h-60 " />
            <img src={PodVeziLogo} alt="America Logo" className="max-w-60 -mt-1 mb-2" />
          </div>

          <ul className="flex space-x-8 ml-auto invisible md:visible">
            {navItems.map((item, index) => (

              <li key={index}><Link to={item[1]}><Button text={item[0]} /></Link></li>

            ))}
          </ul>

        <div className='md:hidden visible'>

          <div className='flex'>
            <div >
              <img src={PodVeziLogo} alt="America Logo" className="fixed max-w-60 -mt-11" />
            </div>

            <div
              className="space-y-2 ml-auto -mt-6 cursor-pointer text-lg transform hover:drop-shadow-3d hover:-translate-y-0.25 hover:-translate-x-0.25"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 bg-white "></span>
              <span className="block h-0.5 w-8 bg-white "></span>
              <span className="block h-0.5 w-8 bg-white "></span>
            </div>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div

              className="CROSS-ICON hover:cursor-pointer  absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} 

            >
              <svg
                className="h-8 w-8 hover:text-orange-100 "
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>

            </div>

            <ul className="MENU-MOBILE-OPEN underline flex flex-col items-center justify-between space-y-16">

              {navItems.map((item, index) => (
                <li key={index}><Link to={item[1]}><Button text={item[0]} clas="text-3xl" /></Link></li>
              ))}
            </ul>

          </div>
        </div>

      </div>
    </nav>
  );
}
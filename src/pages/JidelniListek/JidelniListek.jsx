import { useState } from 'react';
import Footer from "../../components/Footer/Footer";
import ImageCard from "../../components/ImageCard/ImageCard";
import NavBar from "../../components/NavBar/NavBar";
import 'flowbite';
import BugerImg from "../Home/burger.png";
import Button from '../../components/Button/Button';
import Jidlo from './JidelniListek.json'

const navMenus = [["Stálé", "stale"], ["Denní", "denni"], ["Nápoje", "napoje"]];

export default function JidelniListek() {
  const [activeTab, setActiveTab] = useState(navMenus[0][1]);

  return (
    <div className="text-white">
      <NavBar />
      
      <ImageCard src={BugerImg} textpt1="Menu" h="h-80" border={"border-b-2 border-gray-700"}/>
      
      <div className="bg-slate-800">
        <ul className="flex justify-center -mb-px font-notable" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
            {navMenus.map((item, index) => (
              <li key={index} className="text-lg me-2" role="presentation">
                <button 
                  className={`inline-block p-4 text-lg transform hover:drop-shadow-slate900 hover:-translate-y-0.5 hover:-translate-x-0.5 ${activeTab === item[1] ? 'transform drop-shadow-slate900 -translate-y-0.5 -translate-x-0.5' : '' }`} 
                  onClick={() => setActiveTab(item[1])}
                  id={item[1] + "-tab"} 
                  data-tabs-target={"#" + item[1]} 
                  type="button" 
                  role="tab" 
                  aria-controls={item[1]} 
                  aria-selected={activeTab === item[1]}
                >
                  {item[0]}
                </button>
              </li>
            ))}
        </ul>
      </div>

      <div className='text-gray-400 font-mate flex justify-center mt-2 mb-4'>
        Alergeny: některá naše jídla obsahují alergeny. Iformace o nich na vyžádání obsluhy.
      </div>

      <div id="default-tab-content flex justify-center">
        {navMenus.map((menu, index) => (
        <div key={index} className={`max-w-screen-lg mx-auto ${activeTab === menu[1] ? '' : 'hidden'}`} id={menu[1]} role="tabpanel" aria-labelledby={`${menu[0]}-tab`}>

          {Object.keys(Jidlo[menu[1]]).map((section, i) => (
            <div key={i} className="max-w-screen-lg mx-auto">
              <div className="justify-center flex text-2xl font-notable mt-4 mb-4" >
                {section}
              </div>

              {(Jidlo[menu[1]])[section].map((item, j) => (
                <div key={j} className="font-mate p-4 border-gray-700 border-t-2">
                  
                  <div className='flex text-xl'>
                    <div>
                      {item.dish}
                    </div>
                    <div className="ml-auto">
                      {item.price},-
                    </div>
                  </div>

                  {item.description && (
                    <div className='text-gray-400 pr-44'>
                      {item.description}
                    </div>
                  )}

                </div>
              ))}
            </div>
          ))}
        </div>
        ))}
      </div>

      <br />
      <Footer />
    </div>
  );
}

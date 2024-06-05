import { useState } from 'react';
import Footer from "../../components/Footer/Footer";
import ImageCard from "../../components/ImageCard/ImageCard";
import NavBar from "../../components/NavBar/NavBar";
import 'flowbite';
import BugerImg from "../Home/burger.png";

const navMenus = [["Stálé", "stale"], ["Denní", "denni"], ["Nápoje", "napoje"]];

export default function JidelniListek() {
  const [activeTab, setActiveTab] = useState(navMenus[0][1]);

  return (
    <div className="text-white">
      <NavBar />
      
      <ImageCard src={BugerImg} textpt1="Menu" h="h-80"/>

      <div className="bg-slate-800 ">
        <ul className="flex justify-center -mb-px font-notable" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
            {navMenus.map((item, index) => (
              <li key={index} className="text-lg me-2" role="presentation">
                <button 
                  className={`inline-block p-4 hover:text-orange-200 text-white ${activeTab === item[1] ? 'text-orange-200' : 'text-white'}`} 
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

      <br />

      <div id="default-tab-content flex justify-center">
        {navMenus.map((item, index) => (
          <div key={index} className={`max-w-screen-lg mx-auto text-slate-800 ${activeTab === item[1] ? '' : 'hidden'}`} id={item[1]} role="tabpanel" aria-labelledby={`${item[0]}-tab`}>
            <div className="justify-center flex text-2xl font-notable mt-4 mb-4">
              Polévky
            </div>
            <div className="p-4 border-white border-t-2">
              {item[0]} menu
            </div>
            <div className="p-4 border-white border-t-2">
              {item[0]} menu
            </div>
            <div className="p-4 border-white border-t-2">
              {item[0]} menu
            </div>

            <div className="justify-center flex text-2xl font-notable mt-4 mb-4">
              Hlavní jídla
            </div>
            <div className="p-4 border-white border-t-2">
              {item[0]} menu
            </div>
            <div className="p-4 border-white border-t-2">
              {item[0]} menu
            </div>
            <div className="p-4 border-white border-t-2">
              {item[0]} menu
            </div>
            <div className="p-4 border-white border-t-2">
              {item[0]} menu
            </div>
            <div className="p-4 border-white border-t-2">
              {item[0]} menu
            </div>
            <div className="p-4 border-white border-t-2">
              {item[0]} menu
            </div>
            <div className="p-4 border-white border-t-2">
              {item[0]} menu
            </div>

            <div className="justify-center flex text-2xl font-notable mt-4 mb-4">
              Prílohy
            </div>
            <div className="p-4 border-white border-t-2">
              {item[0]} menu
            </div>
            <div className="p-4 border-white border-t-2">
              {item[0]} menu
            </div>
            <div className="p-4 border-white border-t-2">
              {item[0]} menu
            </div>
            <div className="p-4 border-white border-t-2">
              {item[0]} menu
            </div>
          </div>
        ))}
      </div>

      <br />
      <Footer />
    </div>
  );
}

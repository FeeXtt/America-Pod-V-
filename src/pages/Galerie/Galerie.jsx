import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import ImageCard from "../../components/ImageCard/ImageCard";
import NavBar from "../../components/NavBar/NavBar";
import "flowbite";
import BackgroundImage from "./BGgalerie.jpg";
import photosData from "./photos.json";

const navMenus = [
  ["Interiér", "Interiér"],
  ["Jídla", "Jídla"],
  ["Akce", "Akce"],
];

export default function Galerie() {
  const [activeTab, setActiveTab] = useState(navMenus[0][1]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalCaption, setModalCaption] = useState("");

  const openModal = (src, alt) => {
    setModalImage(src);
    setModalCaption(alt);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="text-white">
      <NavBar />

      <ImageCard
        src={BackgroundImage}
        textpt1="Galerie"
        h="h-80"
        fontSize={"text-5xl"}
        blurPadding={"px-28 py-14 md:py-12 md:px-10 lg:py-14 lg:px-12 xl:py-16 xl:px-14 2xl:py-16 2xl:px-16"}
      />

      <div className="bg-slate-800 ">
        <ul
          className="flex justify-center -mb-px font-notable"
          id="default-tab"
          data-tabs-toggle="#default-tab-content"
          role="tablist"
        >
          {navMenus.map((item, index) => (
            <li key={index} className="text-lg me-2" role="presentation">
              <button
                className={`transition duration-150 ease-in-out inline-block p-4 text-lg transform hover:drop-shadow-slate900 hover:-translate-y-0.25 hover:-translate-x-0.25 text-white ${
                  activeTab === item[1]
                    ? "transform drop-shadow-slate900 -translate-y-0.25 -translate-x-0.25"
                    : ""
                }`}
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
          <div
            key={index}
            className={`max-w-screen-lg mx-auto ${
              activeTab === item[1] ? "" : "hidden"
            }`}
            id={item[1]}
            role="tabpanel"
            aria-labelledby={`${item[0]}-tab`}
          ></div>
        ))}
      </div>

      <div className=" w-2/3 mx-auto">

        {/* ratio na fotky 3:4 pls*/}
        <div className=" grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 col-span-full gap-4">
          {Object.keys(photosData).map((items) => {
            if (items === activeTab) {
              return photosData[items].map((photo, i) => {
                return (
                  <img
                    key={i}
                    src={`${photo.path}`}
                    alt={`Photo ${photo.id}`}
                    className="transition duration-150 ease-in-out hover:scale-105 rounded-xl hover:cursor-pointer hover:drop-shadow-element"
                    onClick={() => openModal(photo.path, `Photo ${photo.id}`)}
                  />
                );
              });
            }
          })}
        </div>
      </div>

      {modalOpen && (
        <div className="fixed z-10 inset-0 mt-9">
          <div className="flex items-center justify-center min-h-screen ">
            <div className="fixed inset-0 bg-black opacity-75"></div>
            <div className="relative">
              <div
                className="m-2 CROSS-ICON hover:cursor-pointer absolute top-0  right-0 font-bold inline-block rounded-lg bg-red-900 uppercase leading-normal text-white
                transition duration-150 ease-in-out active:bg-red-800 transform hover:drop-shadow-slate800 hover:-translate-y-0.5 hover:-translate-x-0.5" 
                onClick={closeModal}
              >
                <svg
                  className="h-8 w-8 hover:text-orange-100"
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
              <img
                src={modalImage}
                alt={modalCaption}
                className="w-full h-256 rounded-lg"
              />
              <div className="text-center mt-4">

              </div>
            </div>
          </div>
        </div>
      )}

      <br />
      <Footer />
    </div>
  );
}
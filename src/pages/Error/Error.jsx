import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ImageCard from "../../components/ImageCard/ImageCard";
import BugerImg from "./burger-error.jpg";


export default function Error() {


  return (
    <>
      <NavBar />

      <div className="font-mate ">
        <div className="">
          <ImageCard
            src={BugerImg}
            textpt1="Nastala chyba"
            textpt2="Omlouáme se 🍔"
            link = "/"
            linkText="Přejít na Úvodní Stránku"
            h="h-2/3"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

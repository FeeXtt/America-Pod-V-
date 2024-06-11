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
            fontSize={"text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"}
            fontSize2={"text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

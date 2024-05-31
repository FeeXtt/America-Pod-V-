import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <NavBar />
      <div className="text-slate-900 text-center my-80">
        <p className="m-2 text-8xl">Nastala chyba</p>
        <p className="mb-20 text-6xl">Omlouáme se 🍔</p>
        <div><Link to={"/"} className="underline text-2xl"> Přejít na Úvodní Stránku </Link></div>
      </div>
      <Footer />
    </>
  );
}

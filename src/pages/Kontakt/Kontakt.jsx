import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ImageCard from "../../components/ImageCard/ImageCard";
import BackgroundImage from "./BGkontakt.jpg";
import FacebookLogo from "../../components/Footer/FacebookLogo.png";
import InstagramLogo from "../../components/Footer/InstagramLogo.png";
import Map from "../../components/Footer/Map/Map";
import MoneyIcon from "./PaymentMethodsIcons/money.png";
import CreditCardIcon from "./PaymentMethodsIcons/creditcard.png";
import StravenkaIcon from "./PaymentMethodsIcons/stravenka.webp";

export default function Galerie() {
  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <NavBar />
        <ImageCard
          src={BackgroundImage}
          textpt1="Kontakt"
          h="h-80"
          fontSize={"text-5xl"}
          blurPadding={
            "px-28 py-14 md:py-12 md:px-10 lg:py-14 lg:px-12 xl:py-16 xl:px-14 2xl:py-16 2xl:px-16"
          }
        />

        <div className="md:w-2/3 mx-auto font-mate mt-10 ">
          <div className="p-10 drop-shadow-element grid bg-slate-900 grid-cols-3 text-center text-2xl font-mate md:rounded-lg">
            <div className="font-notable">
              Telefon
              <div className="pt-6 font-mate text-3xl">+420 326 322 007</div>
            </div>

            <div className="font-notable">
              Rozvoz
              <div className="pt-6 font-mate underline text-3xl">
                <a href="https://www.foodora.cz/restaurant/iqu6/america-pod-vezi">
                  Foodora
                </a>
              </div>
            </div>
            <div className="font-notable">
              Sociální Média
              <div className="flex font-mate gap-4 justify-center pt-6">
                <a href="https://www.facebook.com/America-POD-V%C4%9A%C5%BD%C3%8D-1587036434862535">
                  <img src={FacebookLogo} alt="Facebook" className=" max-h-8" />
                </a>
                <a href="https://www.instagram.com/americapodvezi/">
                  <img src={InstagramLogo} alt="Facebook" className="max-h-8" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14 drop-shadow-element bg-slate-900 md:rounded-lg p-10">
            <div className="col-span-2 font-notable text-center text-2xl">
              Adresa
              <div className="text-3xl font-mate mt-3 mb-4">
                Komenského náměstí 61 29301 Mladá Boleslav
              </div>
            </div>

            <div className="mt-10">
              <Map h="lg:h-128 h-64" />
            </div>
          </div>

          <div className="my-14 drop-shadow-element bg-slate-900 p-10 md:rounded-lg">
            <div className="w-2/3 mx-auto flex flex-col justify-center text-center text-2xl ">
              <div className="text-center font-notable mb-8">Platba</div>
              <div className="flex flex-col md:flex-row">
                <img
                  src={MoneyIcon}
                  className="h-32 w-32 mx-auto"
                  alt="Hotovost"
                />
                <img
                  src={CreditCardIcon}
                  className="h-32 w-32 mx-auto"
                  alt="Hotovost"
                />
                <img
                  src={StravenkaIcon}
                  className="h-32 w-32 mx-auto"
                  alt="Hotovost"
                />
              </div>
            </div>
          </div>


          {/*Dát dohromady s Platbou do jednoho rámečku*/}
          {/* <div div className="my-14 drop-shadow-element bg-slate-900 p-10 md:rounded-lg text-center">
            <div className="text-2xl">Recenze</div>
            <div className="flex underline text-3xl">
              <div className="mx-auto">
                <a href="https://mapy.cz/zakladni?source=firm&id=12962819&recenze=1&x=14.9069991&y=50.4127897&z=18">
                  Mapy.cz
                </a>
              </div>
              <div className="mx-auto">
                <a href="https://www.google.com/maps/place/America+%E2%80%9EPod+V%C4%9B%C5%BE%C3%AD%E2%80%9C/@50.4124205,14.9006166,17z/data=!4m8!3m7!1s0x470955bee0ab33f5:0x7a74a19c4bffae9a!8m2!3d50.4124171!4d14.9031915!9m1!1b1!16s%2Fg%2F1tj5pfvq?entry=ttu">
                  Google Maps
                </a>
              </div>
            </div>
          </div> */}
        </div>

        <Footer />
      </div>
    </>
  );
}

import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

import ImageCard from "../../components/ImageCard/ImageCard";
import BugerImg from "./burger.png";
import AboutUsCard from "../../components/AboutUsCard/AboutUsCard";
import Carousel from "../../components/Carousel/Carousel";


export default function Home() {

  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <NavBar />
        <ImageCard
          src={BugerImg}
          textpt1={"Vítejte na stránkách restaurace"}
          textpt2={"Amerika Pod Věží"}
          border={"border-b-2 border-white"}
        />

        <div className="max-w-screen-xl mx-auto font-mate ">
          <AboutUsCard />
        </div>
        {/* <Carousel />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br /> */}
        <Footer />
      </div>

    </>
  );
}

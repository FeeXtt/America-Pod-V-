import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Vycep from "./vycep.jpg";
import ImageCard from "../../components/ImageCard/ImageCard";
import BugerImg from "./burger.png";
import AboutUsCard from "../../components/AboutUsCard/AboutUsCard";
import Carousel from "../../components/Carousel/Carousel";
import TwoCards from "../../components/TwoCards/TwoCards";
import ImgBGCard from "../../components/ImgBGCard/ImgBGCard";


export default function Home() {

  return (
    <>
      <div className="flex flex-col font-mate min-h-screen ">
        <NavBar />
        <ImageCard
          src={BugerImg}
          textpt1={"Vítejte na stránkách restaurace"}
          textpt2={"America Pod Věží"}
          border={"border-b-2 border-gray-400"}
          translation={"2xl:-translate-y-48 xl:-translate-y-24 md:-translate-y-20 "}
          translationAdjustment={"2xl:mt-48 xl:mt-24 md:mt-20"}
          fontSize={"text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"}
          blurPadding={"py-8 px-5 sm:py-10 sm:px-8 md:py-12 md:px-10 lg:py-14 lg:px-12 xl:py-16 xl:px-14 2xl:py-16 2xl:px-16"}
        />

        <div className="max-w-screen-xl mx-auto font-mate "> 
          <AboutUsCard 
          imgSrc={Vycep}
          headline={"O nas"}
          text={"Vítejte na stránkách restaurace Amerika Pod Věží"} />
          </div>
          <ImgBGCard/>
          <div className="max-w-screen-xl mx-auto font-mate "> 
          <TwoCards 
          imgSrc={Vycep}
          headline={"O nas"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt laborum, similique minus modi veniam placeat autem adipisci voluptatum consectetur, necessitatibus voluptas voluptate inventore quod atque dolorum repudiandae ex nemo? Quas."}  />
        </div>
        
      
        
        <Footer />
      </div>

    </>
  );
}

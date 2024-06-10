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
      <maincontent className="flex flex-col min-h-screen font-mate ">
        <NavBar />
        <ImageCard
          src={BugerImg}
          textpt1={"Vítejte na stránkách restaurace"}
          textpt2={"Amerika Pod Věží"}
          border={"border-b-2 border-white"}
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
      </maincontent>

    </>
  );
}

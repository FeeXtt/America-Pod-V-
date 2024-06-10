import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Vycep from "./vycep.jpg";
import ImageCard from "../../components/ImageCard/ImageCard";
import BugerImg from "./burger.png";
import AboutUsCard from "../../components/AboutUsCard/AboutUsCard";
import Carousel from "../../components/Carousel/Carousel";
import TwoCards from "../../components/TwoCards/TwoCards";
import ImgBGCard from "../../components/ImgBGCard/ImgBGCard";
import GalerieImg1 from "./galerie1.jpg"
import GalerieImg2 from "./galerie2.jpg"
import ONasImg from "./ONasImg.jpg"


export default function Home() {

  return (
    <>
      <div className="flex flex-col font-mate min-h-screen ">
        <NavBar />
        <ImageCard
          src={BugerImg}
          textpt1={"Vítejte na stránkách restaurace"}
          textpt2={"America Pod Věží"}
          border={"border-b-2 border-white"}
        />

        <div className="max-w-screen-xl mx-auto font-mate "> 
          <AboutUsCard 
          imgSrc={ONasImg}
          headline={"O nás"}
          text={"Stylová restaurace s americkou BBQ kuchyní nabízí burgery, steaky, pečená žebírka, křidýlka, ryby, saláty, dezerty a především naše domácí hranolky. Každý si u nás přijde na své – jak milovníci masa, tak vegetariáni. "} />
          </div>
          <ImgBGCard
          headline={"Zobrezte si celé menu!"}
          text={"Zapomeňte na vše, co jste si mysleli,"}
          text2={" že víte o hamburgerech a hranolkách."}
          link={"/menu"}
          button={"Menu"}
          />
          <div className="max-w-screen-xl mx-auto font-mate "> 
          <TwoCards 
          imgSrc={GalerieImg1}
          headline={"Galerie"}
          text={"Zhlédněte naše překrásné prostory ve sklepení pod věží u hradu."}
          link={"/galerie"}
          button={"galerie"}

          imgSrc2={GalerieImg2}
          />
        </div>
        
      
        
        <Footer />
      </div>

    </>
  );
}

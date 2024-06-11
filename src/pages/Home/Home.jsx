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
          translation={"2xl:-translate-y-48 xl:-translate-y-24 md:-translate-y-20 "}
          translationAdjustment={"2xl:mt-48 xl:mt-24 md:mt-20"}
          fontSize={"text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"}
          blurPadding={"py-8 px-5 sm:py-10 sm:px-8 md:py-12 md:px-10 lg:py-14 lg:px-12 xl:py-16 xl:px-14 2xl:py-16 2xl:px-16"}
        />

        <div className="max-w-screen-xl mx-auto font-mate "> 
          <AboutUsCard 
          imgSrc={ONasImg}
          headline={"O nás"}
          text={"Stylová restaurace s americkou BBQ kuchyní nabízí burgery, steaky, pečená žebírka, křidýlka, ryby, saláty, dezerty a především naše domácí hranolky. Každý si u nás přijde na své – jak milovníci masa, tak vegetariáni. "} />
          </div>
          <ImgBGCard
          headline={"Zobrazte si celé menu!"}
          text={"Zapomeňte na vše, co jste si mysleli,"}
          text2={" že víte o hamburgerech a hranolkách."}
          link={"/menu"}
          button={"Menu"}
          />
          <div className="max-w-screen-xl mx-auto font-mate "> 
          <TwoCards 
          imgSrc={GalerieImg1}
          headline={"Galerie"}
          text={"Zhlédněte naše překrásné prostory ve sklepení pod věží u hradu. Užijte si jedinečnou atmosféru, kde se setkává historie s moderním komfortem."}
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

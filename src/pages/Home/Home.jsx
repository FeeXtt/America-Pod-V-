import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ImageCard from "../../components/ImageCard/ImageCard";
import InfoCard from "../../components/InfoCard/InfoCard";
import BugerImg from "./burger.jpg"
import HomeInfoLayout from "../../components/HomeInfoLayout/HomeInfoLayout";

export default function Home() {
  return (
    <>
      <maincontent className = "flex flex-col min-h-screen">
        <NavBar />
        <ImageCard src={BugerImg} width="w-full"/>
        
        <HomeInfoLayout />
        
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

        
        </maincontent>

        <Footer />
      
    </>
  );
}

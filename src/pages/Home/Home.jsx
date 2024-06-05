import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import HomeMainImageCard from "../../components/HomeMainImageCard/HomeMainImageCard";
import BugerImg from "./burger.png";
import InfoCard from "../../components/InfoCard/InfoCard";

export default function Home() {
  return (
    <>
      <NavBar />
      <HomeMainImageCard src={BugerImg} textpt1={"Vítejte na stránkách restaurace"} textpt2 ={"Amerika Pod Věží"}/>
      <div className="max-w-screen-xl mx-auto">
        <InfoCard />

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
          aliquid doloribus error provident. Esse omnis ab neque ullam veniam
          sapiente delectus officia voluptas atque quae earum facilis quis,
          ducimus obcaecati.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
          aliquid doloribus error provident. Esse omnis ab neque ullam veniam
          sapiente delectus officia voluptas atque quae earum facilis quis,
          ducimus obcaecati.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
          aliquid doloribus error provident. Esse omnis ab neque ullam veniam
          sapiente delectus officia voluptas atque quae earum facilis quis,
          ducimus obcaecati.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
          aliquid doloribus error provident. Esse omnis ab neque ullam veniam
          sapiente delectus officia voluptas atque quae earum facilis quis,
          ducimus obcaecati.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
          aliquid doloribus error provident. Esse omnis ab neque ullam veniam
          sapiente delectus officia voluptas atque quae earum facilis quis,
          ducimus obcaecati. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Soluta aliquid doloribus error provident. Esse omnis ab neque
          ullam veniam sapiente delectus officia voluptas atque quae earum
          facilis quis, ducimus obcaecati. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Soluta aliquid doloribus error
          provident. Esse omnis ab neque ullam veniam sapiente delectus officia
          voluptas atque quae earum facilis quis, ducimus obcaecati. Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Soluta aliquid doloribus
          error provident. Esse omnis ab neque ullam veniam sapiente delectus
          officia voluptas atque quae earum facilis quis, ducimus obcaecati.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
          aliquid doloribus error provident. Esse omnis ab neque ullam veniam
          sapiente delectus officia voluptas atque quae earum facilis quis,
          ducimus obcaecati. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Soluta aliquid doloribus error provident. Esse omnis ab neque
          ullam veniam sapiente delectus officia voluptas atque quae earum
          facilis quis, ducimus obcaecati. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Soluta aliquid doloribus error
          provident. Esse omnis ab neque ullam veniam sapiente delectus officia
          voluptas atque quae earum facilis quis, ducimus obcaecati. Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Soluta aliquid doloribus
          error provident. Esse omnis ab neque ullam veniam sapiente delectus
          officia voluptas atque quae earum facilis quis, ducimus obcaecati.
        </p>
        </div>

        <Footer />
      
    </>
  );
}

import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ImageCard from "../../components/ImageCard/ImageCard";
import BugerImg from "./burger.png";
import AboutUsCard from "../../components/AboutUsCard/AboutUsCard";
import Carousel from "../../components/Carousel/Carousel";

export default function Home() {

  return (
    <>
      <maincontent className="flex flex-col min-h-screen">
        <NavBar />
        <ImageCard
          src={BugerImg}
          textpt1={"Vítejte na stránkách restaurace"}
          textpt2={"Amerika Pod Věží"}
        />

        <div className="max-w-screen-xl mx-auto font-mate ">
          <AboutUsCard />
        </div>
        <Carousel />

        <div className="max-w-screen-xl mx-auto font-mate bg-black">
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
            ducimus obcaecati. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Soluta aliquid doloribus error provident. Esse
            omnis ab neque ullam veniam sapiente delectus officia voluptas atque
            quae earum facilis quis, ducimus obcaecati. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Soluta aliquid doloribus error
            provident. Esse omnis ab neque ullam veniam sapiente delectus
            officia voluptas atque quae earum facilis quis, ducimus obcaecati.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            aliquid doloribus error provident. Esse omnis ab neque ullam veniam
            sapiente delectus officia voluptas atque quae earum facilis quis,
            ducimus obcaecati. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Soluta aliquid doloribus error provident. Esse
            omnis ab neque ullam veniam sapiente delectus officia voluptas atque
            quae earum facilis quis, ducimus obcaecati. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Soluta aliquid doloribus error
            provident. Esse omnis ab neque ullam veniam sapiente delectus
            officia voluptas atque quae earum facilis quis, ducimus obcaecati.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            aliquid doloribus error provident. Esse omnis ab neque ullam veniam
            sapiente delectus officia voluptas atque quae earum facilis quis,
            ducimus obcaecati. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Soluta aliquid doloribus error provident. Esse
            omnis ab neque ullam veniam sapiente delectus officia voluptas atque
            quae earum facilis quis, ducimus obcaecati.
          </p>
        </div>

        <Footer />
      </maincontent>
    </>
  );
}

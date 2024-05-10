import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { BorderHorizontal } from "@mui/icons-material";
import InfoCard from "../../components/Infocard/InfoCard";

export default function Home() {
  return (
    <>
      <body className = "flex flex-col min-h-screen">
        <NavBar />
        <InfoCard/>


        <Footer />
      </body>
    </>
  );
}

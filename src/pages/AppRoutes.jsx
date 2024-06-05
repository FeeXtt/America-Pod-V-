import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import { useEffect } from "react";

import Home from "./Home/Home";
import Error from "./Error/Error";
import JidelniListek from "./JidelniListek/JidelniListek";
import Galerie from "./Galerie/Galerie";
import Kontakt from "./Kontakt/Kontakt";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

}

export default function AppRoutes() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<JidelniListek />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

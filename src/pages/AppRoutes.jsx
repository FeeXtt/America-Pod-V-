import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import { useEffect } from "react";

import Home from "./Home/Home";
import Error from "./Error/Error";
import JidelniListek from "./JidelniListek/JidelniListek";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

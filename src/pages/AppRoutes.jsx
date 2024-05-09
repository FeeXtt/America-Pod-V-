import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import Error from "./Error/Error";
import JidelniListek from "./JidelniListek/JidelniListek";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/jidelnilistek" element={<JidelniListek />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

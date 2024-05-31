import * as React from "react";
import "../../index.css";
import ImageCard from "../../components/ImageCard/ImageCard";
import BugerImg from "/src/pages/Home/burger.jpg"

export default function InfoCard(props) {
  return (
    <>
      <div className={`${props.width}`}>
        <ImageCard src={BugerImg} width="w-full" />
        <div className={`${props.color} text-center rounded-b-xl p-2`}>
          hello
        </div>
      </div>
    </>
  );
}

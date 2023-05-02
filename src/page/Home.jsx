import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faHeart,
  faNewspaper,
  faBell,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import "../css/home.css";
export default function Home() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false, //화살표 유무를 표시함(기본값:true)
  };
  let pictures = ["1.jpg", "2.jpg", "3.jpg"];
  return (
    <div>
      <h2> 05/01 평가내용</h2>
      <Slider {...settings}>
        {/*
        <div>
          <img src={require("../image/1.jpg")} alt="" />
        </div>
        <div>
          <img src={require("../image/2.jpg")} alt="" />
        </div>
        <div>
          <img src={require("../image/3.jpg")} alt="" />
        </div>
        */}
        {pictures.map((pic, id) => (
          <div key={id}>
            <img src={require(`../image/${pic}`)} />
          </div>
        ))}
      </Slider>
      <div className={"fontawesome"}>
        <FontAwesomeIcon icon={faAddressBook} size="2xl" />
        <FontAwesomeIcon icon={faPenToSquare} size="2xl" />
        <FontAwesomeIcon icon={faNewspaper} size="2xl" />
        <FontAwesomeIcon icon={faHeart} size="2xl" className={"svgheart"} />
        <FontAwesomeIcon icon={faBell} size="2xl" />
      </div>
    </div>
  );
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", display: "none" }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
        display: "none",
      }}
      onClick={onClick}
    />
  );
}

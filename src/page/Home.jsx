import React from "react";
import Slider from "react-slick";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPenToSquare,faHeart,faNewspaper,faBell,faAddressBook} from "@fortawesome/free-solid-svg-icons";
import '../css/home.css'
export default function Home() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
        <div className={'fontawesome'}>
        <FontAwesomeIcon icon={faAddressBook}size='lg'/>
        <FontAwesomeIcon icon={faPenToSquare}size='lg'/>
        <FontAwesomeIcon icon={faNewspaper}size='lg'/>
        <FontAwesomeIcon icon={faHeart}size='lg'/>
        <FontAwesomeIcon icon={faBell}size='lg'/>
        </div>
      </div>
  );
}

import React, { Component } from "react";
import Slideshow from "./Slideshow";
import slide1 from "../assets/slide1.jpeg";
import slide2 from "../assets/slide2.jpeg";
import slide3 from "../assets/slide3.jpeg";
import slide4 from "../assets/slide4.jpeg";
import slide5 from "../assets/slide5.jpeg";
import slide6 from "../assets/slide6.jpeg";
import slide7 from "../assets/slide7.jpeg";
// import styles from './custom.css';
// import image from '../Navbar/logo.png';
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     Link,
//     Outlet,
//     useParams
// } from "react-router-dom";
//===========================================
// CREATE STYLES OBJECT
//===========================================
const style = {
    container: "screenW screenH dGray col",
    header: "flex1 fCenter fSize2",
    main: "flex8 white",
    footer: "flex1 fCenter"
};

//===========================================
// SLIDES DATA
//===========================================
const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];

//===========================================
// APP COMPONENT
//===========================================
class AppSlider extends Component {
    render() {
        return (
            <div className={style.container}>
                {/* <div className={style.header}>
                </div> */}
                <div className={style.main}>
                    <Slideshow slides={slides} />
                </div>
                {/* <div className={style.footer}>Built in React - by Namrah Siddiqua</div> */}
            </div>
        );
    }
}

export default AppSlider;
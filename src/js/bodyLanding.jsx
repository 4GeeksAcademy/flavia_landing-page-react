import React from "react";
import MyNavBar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const Body = () => {
    return (
        <div>
            <MyNavBar />
            <div className="container">
            <Jumbotron />
            <Card />
            </div>
            <Footer />
        </div>
    )
}

export default Body;
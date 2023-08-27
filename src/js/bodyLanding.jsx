import React from "react";
import MyNavBar from "./Componentes/Navbar";
import Jumbotron from "./Componentes/Jumbotron";
import MyCard from "./Componentes/Card";
import Footer from "./Componentes/Footer";

const Body = () => {
    return (
        <div>
            <MyNavBar />
            <div className="container">
            <Jumbotron />
            <MyCard />
            </div>
            <Footer />
        </div>
    )
}

export default Body;
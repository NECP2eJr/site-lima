import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import Hero from "@/components/Hero";

const MainPage = () => {
    return (
        <React.Fragment>
            <Header />
            <Hero />
            <Footer />
        </React.Fragment>
    )
}

export default MainPage;
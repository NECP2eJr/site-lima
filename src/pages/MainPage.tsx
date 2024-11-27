import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";

const MainPage = () => {
    return (
        <React.Fragment>
            <Header />
            <Hero />
            <About />
            <Footer />
        </React.Fragment>
    )
}

export default MainPage;
import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CarouselServices from "@/components/Carousel";
import FloaterLinkRedirect from "@/components/FloaterLinkRedirect";

const MainPage = (): JSX.Element => {
    return (
        <React.Fragment>
            <Header />
            <Hero />
            <About />
            <CarouselServices />
            <Footer />
            <FloaterLinkRedirect />
        </React.Fragment>
    )
}

export default MainPage;
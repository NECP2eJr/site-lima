import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";

const MainPage = () => {
    return (
        <React.Fragment>
            <Header />
            <div className="pt-20">
                <div className="h-40 bg-white w-[100%] py-80"></div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default MainPage;
import React from "react";
import Header from "../../components/Header/Header";

import Sidebar from "../../components/Sidebar/Sidebar";
import Posts from "../../components/Posts/Posts";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";


const Home = () => {
    return(
        <>
        <Header />
        <div className="home">
            <Posts />
            <Sidebar />
            <Contact />
            <Footer />
            
            
            
        </div>
        </>
    )
}

export default Home;
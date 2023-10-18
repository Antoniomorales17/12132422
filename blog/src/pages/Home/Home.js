import React from "react";
import Header from "../../components/Header/Header";

import Sidebar from "../../components/Sidebar/Sidebar";
import Posts from "../../components/Posts/Posts";
import Footer from "../../components/Footer/Footer";



const Home = () => {
    return(
        <>
        <Header />
        <div className="home">
            <Posts />
            <Sidebar />
           
            <Footer />
            
            
            
        </div>
        </>
    )
}

export default Home;
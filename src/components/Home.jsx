import React, { Component } from 'react'

//Importing Components into Home Page
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";


class Home extends Component {
    render() {
        return (
            <div>
                <Announcement />
                <Navbar />
                <Slider />
                <Newsletter />
                <Footer />
            </div>
        );
    }
}

export default Home;


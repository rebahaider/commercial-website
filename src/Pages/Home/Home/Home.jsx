import { useEffect } from "react";
import Slider from "../Slider/Slider";


const Home = () => {
    // set dynamic title
    useEffect(() => {
        document.title = "Commercial website"
    })
    return (
        <div className="">
            <Slider></Slider>
        </div>
    );
};

export default Home;
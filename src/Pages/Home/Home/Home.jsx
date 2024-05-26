import { useEffect } from "react";
import Slider from "../Slider/Slider";
import Estates from "../../Estates/Estates";


const Home = () => {
    // set dynamic title
    useEffect(() => {
        document.title = "Commercial website"
    })
    return (
        <div className="">
            <Slider></Slider>
            <Estates></Estates>
        </div>
    );
};

export default Home;

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const Slider = () => {

    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper mt-10 mb-10 rounded-3xl">
                <SwiperSlide>
                    <img className='mx-auto w-full h-96' src="https://i.ibb.co/F0WnGry/pexels-photo-269077.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='mx-auto w-full h-96' src="https://i.ibb.co/MsTS5sM/toned-image-modern-office-buildings-central-hong-kong-1112-1227.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='mx-auto w-full h-96' src="https://i.ibb.co/FXRDKgZ/business-meeting-working-room-office-building-105762-1712.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='mx-auto w-full h-96' src="https://i.ibb.co/QnVnkvc/tall-skyscraper-reflects-futuristic-city-skyline-dusk-generated-by-ai-188544-27119.jpg" alt="" />
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Slider;
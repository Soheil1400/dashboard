import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from "swiper";
import {Grid} from "@mui/material";
import "swiper/css";
import Image from 'next/image'
import pic1 from '../../src/image/4689581.jpg'
import pic2 from '../../src/image/5917658.jpg'
import pic3 from '../../src/image/6223023.jpg'

const SlideShow = () => {
    return(
        <Grid item xs={12} sm={4} height={'300px'}>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image width={'300px'} height={'280px'} objectFit={'cover'} src={pic1}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image width={'300px'} height={'280px'} objectFit={'cover'} src={pic2}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image width={'300px'} height={'280px'} objectFit={'cover'} src={pic3}/>
                </SwiperSlide>
            </Swiper>
        </Grid>
    )
}

export default SlideShow
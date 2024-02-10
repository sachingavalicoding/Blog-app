
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

import './home2.css';

// import required modules
import { EffectCreative } from 'swiper/modules';
import BlogCard from '../ui/card/BlogCard';
import { Card1 } from '../../data';

export default function Home2() {
    return (
        <>
            <Swiper
                grabCursor={true}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ['-125%', 0, -800],
                        rotate: [0, 0, -90],
                    },
                    next: {
                        shadow: true,
                        translate: ['125%', 0, -800],
                        rotate: [0, 0, 90],
                    },
                }}
                modules={[EffectCreative]}
                className="mySwiper5"
            >



                {
                    Card1.map(({ image, id, content, heading }) => {
                        return <SwiperSlide key={id}>
                            <BlogCard key={id} image={image} content={content} heading={heading} />
                        </SwiperSlide>
                    })
                }




            </Swiper>
        </>
    );
}

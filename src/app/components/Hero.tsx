'use client'
import HeroImage from '@/assets/images/hero_bg.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image from 'next/image';
import Image1 from '@/assets/images/hero-image1.png';
import Image2 from '@/assets/images/image-2.png'
import Image3 from '@/assets/images/image-3.png'

import 'swiper/css';
import SliderButtons from './SliderButtons'
import { useRef } from 'react'
import HeroContent from './HeroContent';

const SliderData = [
    {
        title: "Lorem ipsum",
        subtitle: "dolor sit amet",
        description: "Nunc porttitor tortor metus, nec sagittis lectus accumsan quis. Aenean euismod mollis tempor.",
        image: Image1,
    },
    {
        title: "Test 02",
        subtitle: "prueba 02",
        description: "Fake test 03 nec sagittis lectus accumsan quis. Aenean euismod mollis tempor.",
        image: Image2,
    },
    {
        title: "Test 03",
        subtitle: "Prueba 03",
        description: "Fake test 03 nec sagittis lectus accumsan quis. Aenean euismod mollis tempor.",
        image: Image3,
    }
]

const Hero = () => {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    const swiperRef: any = useRef();
    return (
        <div className="w-full md:h-auto backdrop-contrast-125 bg-white/30">
            <Image
                className='h-screen md:max-h-96 w-full object-cover saturate-50 backdrop-blur-xl bg-white/90' src={HeroImage}
                alt="hero-image"
            />
            <div className='absolute top-0 flex md:w-10/12 w-full md:ml-24 flex-col'>
                <div className='w-full'>
                    <Swiper
                        key="1"
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        navigation
                        spaceBetween={20}
                        slidesPerView={1}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                    >
                        {SliderData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <HeroContent
                                    key={index}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    description={item.description}
                                    image={item.image}
                                />
                            </SwiperSlide>

                        ))}
                    </Swiper>
                </div>
                <div className="flex items-center md:justify-start justify-center">
                    <SliderButtons
                        onNext={() => swiperRef.current.slideNext()}
                        onPrev={() => swiperRef.current.slidePrev()} />
                </div>
            </div>
        </div>
    )
}

export default Hero;
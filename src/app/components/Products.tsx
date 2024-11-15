'use client'
import { ProductsMock } from "@/mock/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext, useRef } from "react";
const middle = Math.floor(ProductsMock.length / 2);
const mockedFirst = ProductsMock.slice(0, middle + 1);
const mockedSecond = ProductsMock.slice(middle + 1);

import 'swiper/css';
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import CardProduct from "./CardProduct";
import SliderButtons from "./SliderButtons";
import { CartContext } from "../provider/cart";

const Products = () => {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    const { addItem } = useContext<any>(CartContext);
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    const swiperRef: any = useRef();
    return (
        <div className="flex flex-col items-center justify-center my-8 m-6">
            <p className="text-primary text-xl font-semibold text-center">Featured Collection</p>
            <div className="flex w-full flex-col">
                <div className="w-full">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        navigation
                        spaceBetween={20}
                        slidesPerView={1}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                    >
                        <SwiperSlide className="flex items-center justify-center content-center self-center w-full">
                            <div className="md:flex w-full md:justify-center">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:w-auto sm:w-full md:m-0">
                                    {mockedFirst.map((item) => (
                                        <CardProduct
                                            key={item.id}
                                            item={item}
                                            addItem={addItem}
                                        />
                                    ))}
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="md:flex w-full md:justify-center">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:w-auto sm:w-full md:m-0">
                                    {mockedSecond.map((item) => (
                                        <CardProduct
                                            key={item.id}
                                            item={item}
                                            addItem={addItem}
                                        />
                                    ))}
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="flex items-center justify-center">
                    <SliderButtons
                        onNext={() => swiperRef.current.slideNext()}
                        onPrev={() => swiperRef.current.slidePrev()}
                    />
                </div>
            </div>
        </div>
    )
}

export default Products;
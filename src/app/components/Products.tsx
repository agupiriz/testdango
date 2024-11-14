'use client'
import { ProductsMock } from "@/mock/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext, useEffect, useRef } from "react";
let mitad = Math.floor(ProductsMock.length / 2);
let mockedFirst = ProductsMock.slice(0, mitad + 1);
let mockedSecond = ProductsMock.slice(mitad + 1);

import 'swiper/css';
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import CardProduct from "./CardProduct";
import SliderButtons from "./SliderButtons";
import { CartContext } from "../provider/cart";

const Products = () => {
    const { cartItems, addItem, showModalCart } = useContext<any>(CartContext);

    const swiperRef: any = useRef();
    return (
        <div className="flex flex-col items-center justify-center my-8">
            <p className="text-primary text-xl font-semibold">Featured Collection</p>
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
                            <div className="flex justify-center">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:w-1/2">
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
                            <div className="flex justify-center">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:w-1/2">
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
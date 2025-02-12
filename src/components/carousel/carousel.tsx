"use client";

import Image from "next/image";
import { FC } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface ButtonGroupProps {
    next: () => void;
    previous: () => void;
    carouselState: { currentSlide: number; deviceType: string };
}

const ButtonGroup: FC<ButtonGroupProps> = ({ next, previous, carouselState }) => {
    const { currentSlide } = carouselState;

    return (
        <div className="carousel-button-group" style={{ position: 'absolute', width: '100%', top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}>
            <button
                className={`bg-[#F47920] py-8 px-3 rounded-2xl absolute left-10  -translate-x-1/2 ${currentSlide === 0 ? 'disable' : ''}`}
                onClick={() => previous()}
            >
                <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.89404 1L1.86136 7L5.89404 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <button
                onClick={() => next()}
                className="bg-[#F47920] py-8 px-3 rounded-2xl absolute right-0 transform translate-x-1/2"
            >
                <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.10596 1L5.13864 7L1.10596 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    );
};

const imageCarousel = [
    { image: "/banner1.png" },
    { image: "/banner2.png" },
];

export default function CarouselCards() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <div className="w-full select-none h-[300px] relative z-10 px-[103px]">
            <div className="">
                <Carousel
                    swipeable
                    draggable
                    showDots={false}
                    responsive={responsive}
                    ssr
                    infinite
                    autoPlay
                    autoPlaySpeed={5000}
                    keyBoardControl
                    customTransition="transform 0.5s ease"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    arrows={false}
                    customButtonGroup={
                        <ButtonGroup
                            next={() => { }}
                            previous={() => { }}
                            carouselState={{ currentSlide: 0, deviceType: "desktop" }}
                        />
                    }
                >
                    {imageCarousel.map((item, index) => (
                        <div key={index} className="h-full">
                            <Image
                                height={300}
                                src={item.image}
                                className="object-cover pointer-events-none w-full h-[300px]"
                                alt={`Banner ${index + 1}`}
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

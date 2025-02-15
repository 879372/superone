"use client";
import { FC } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface ButtonGroupProps {
    next: () => void;
    previous: () => void;
    carouselState: { currentSlide: number };
}

const ButtonGroup: FC<ButtonGroupProps> = ({ next, previous }) => {
    return (
        <div className="hidden absolute inset-0 top-1/3 md:flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
                className="bg-[#F47920] py-7 px-3 rounded-2xl shadow-lg absolute left-[-15px] top-1/2 transform -translate-y-1/2"
                onClick={previous}
            >
                <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.89404 1L1.86136 7L5.89404 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <button
                className="bg-[#F47920] py-7 px-3 rounded-2xl shadow-lg absolute right-[-15px] top-1/2 transform -translate-y-1/2"
                onClick={next}
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

export default function CarouselBanner() {
    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };

    return (
        <div className="w-full select-none md:h-[300px] mt-[150px] md:mt-[182px] py-2 md:py-10  relative group">
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
                renderButtonGroupOutside
                customButtonGroup={<ButtonGroup next={() => { }} previous={() => { }} carouselState={{ currentSlide: 0 }} />}
            >
                {imageCarousel.map((item, index) => (
                    <div key={index} className="carousel-item w-full h-full select-none ">
                        <LazyLoadImage
                            src={item.image}
                            alt={`Banner ${index + 1}`}
                            placeholder={
                                <div className='flex justify-center items-center bg-[#212425] w-full sm:h-[258px] h-[200px]'>
                                    <div className="w-full skeleton h-full bg-[#212425]"></div>
                                </div>
                            }
                            effect="blur"
                            threshold={200}
                            width="100%"
                            height="100%"
                            className="object-cover h-full w-full select-none"
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

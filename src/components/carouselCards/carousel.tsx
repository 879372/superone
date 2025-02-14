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
        <div className="absolute inset-0 top-[10%] flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
                className="bg-[#F47920] py-7 px-3 rounded-2xl shadow-lg absolute left-[-5px] top-1/2 transform -translate-y-1/2"
                onClick={previous}
            >
                <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.89404 1L1.86136 7L5.89404 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <button
                className="bg-[#F47920] py-7 px-3 rounded-2xl shadow-lg absolute right-[-5px] top-1/2 transform -translate-y-1/2"
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
    { image: "/card1.png", description: 'Garrafa de areia colorida', amount: 'R$ 29,61', of: 'R$ 32,90 10% OFF', payment: '3x R$ 6,33 sem juros no cartão ou R$ 18,50 no pix', seller: 'Sr. Castanha' },
    { image: "/card2.png", description: 'Bolsas variadas de fibra de Açaí', amount: 'R$ 49,90', of: 'A partir de', payment: '2x R$ 24,95 sem juros no cartão ou R$ 38,50 no pix', seller: 'Dandara' },
    { image: "/card3.png", description: 'Galinha e pintinhos de barro feitas a mão', amount: 'R$ 14,90', of: 'R$ 32,90 10% OFF', payment: 'ou R$ 13,00 no pix', seller: 'Patricia Arte' },
    { image: "/card4.png", description: 'Panelas de barro de São Gonçalo do Amarante', amount: 'R$ 29,90', of: 'Apenas', payment: '2x R$ 16,95 no cartão ou R$ 23,90 no pix', seller: 'Sebastião' },
    { image: "/card5.png", description: 'Artesanato de bonecas negras feitas a mão', amount: 'R$ 9,90', of: 'A partir', payment: '2x R$ 7,45 no cartão', seller: 'Manu Intimates' },
];

export default function CarouselCards() {
    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
    };

    return (
        <div className="h-[80vh] w-full relative">
            <div className="absolute top-10 left-20 z-50 text-3xl text-white">
                <h1>Descontos Cliente <span className="font-semibold">Unimed Natal</span></h1>
            </div>
            <LazyLoadImage
                src='/fundoUnimed.png'
                alt='fundo unimed'
                effect="blur"
                width="100%"
                height="100%"
                className="object-cover h-full w-full select-none"
            />

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-auto group z-10 px-4 cursor-pointer">
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
                    <div className="flex gap-3">
                        {imageCarousel.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-end shadow-lg rounded-md overflow-hidden h-[400px] min-w-[225px]"
                            >
                                <LazyLoadImage
                                    src={item.image}
                                    alt={`Produto ${index + 1}`}
                                    effect="blur"
                                    className="w-full h-[210px] object-cover"
                                />
                                <div className="flex flex-col justify-between p-3 w-full h-full bg-white">
                                    <h3 className="text-lg font-semibold text-gray-900">{item.description}</h3>
                                    <p className="text-xs">{item.of}</p>
                                    <p className="text-2xl font-bold">{item.amount}</p>
                                    <p className="text-gray-700 text-sm">{item.payment}</p>
                                    <p className="text-gray-500 text-xs">Vendido por: <span className="underline">{item.seller}</span></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

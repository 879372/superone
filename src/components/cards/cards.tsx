"use client";
import Image from 'next/image';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const imageCarousel = [
    { image: "/card1.png", description: 'Garrafa de areia colorida', amount: 'R$ 29,61', of: 'R$ 32,90 10% OFF', payment: '3x R$ 6,33 sem juros no cartão ou R$ 18,50 no pix', seller: 'Sr. Castanha' },
    { image: "/card2.png", description: 'Bolsas variadas de fibra de Açaí', amount: 'R$ 49,90', of: 'A partir de', payment: '2x R$ 24,95 sem juros no cartão ou R$ 38,50 no pix', seller: 'Dandara' },
    { image: "/card3.png", description: 'Galinha e pintinhos de barro feitas a mão', amount: 'R$ 14,90', of: 'R$ 32,90 10% OFF', payment: 'ou R$ 13,00 no pix', seller: 'Patricia Arte' },
    { image: "/card4.png", description: 'Panelas de barro de São Gonçalo do Amarante', amount: 'R$ 29,90', of: 'Apenas', payment: '2x R$ 16,95 no cartão ou R$ 23,90 no pix', seller: 'Sebastião' },
    { image: "/card5.png", description: 'Artesanato de bonecas negras feitas a mão', amount: 'R$ 9,90', of: 'A partir', payment: '2x R$ 7,45 no cartão', seller: 'Manu Intimates' },
];

export default function CardsDisplay() {
    return (
        <div className="relative w-full ">
            <Image
                src="/fundoUnimed.png"
                alt="fundo"
                className="absolute inset-0 -z-50"
                fill
                priority={true}
            />
            <div className="w-full h-auto group z-10 px-10 cursor-pointer">
                <div className="text-3xl py-10 text-white">
                    <h1>Descontos Cliente <span className="font-semibold">Unimed Natal</span></h1>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 justify-center gap-4 pb-20">
                    {imageCarousel.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-end shadow-lg rounded-md overflow-hidden h-[400px] w-[225px] transition-transform duration-300 hover:-translate-y-2 bg-white"
                        >
                            <LazyLoadImage
                                src={item.image}
                                alt={`Produto ${index + 1}`}
                                effect="blur"
                                className="w-full max-h-[210px] object-cover"
                                threshold={200}
                                width="100%"
                                height="100%"
                            />
                            <div className="flex flex-col justify-between p-3 w-full h-full">
                                <h3 className="text-lg font-semibold text-gray-900">{item.description}</h3>
                                <p className="text-xs">{item.of}</p>
                                <p className="text-2xl font-bold">{item.amount}</p>
                                <p className="text-gray-700 text-sm">{item.payment}</p>
                                <p className="text-gray-500 text-xs">Vendido por: <span className="underline">{item.seller}</span></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

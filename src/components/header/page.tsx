"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Input } from "../ui/input";
import DropdowMenu from "../dropdow-menu/page";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { ScrollArea } from "../ui/scroll-area";

const imageCar = [
    { image: "/car1.png", description: 'Bolsa Feminina Sacola Grande Matelassê Preto de telinha e c...', amount: 'R$ 195,00', off: 'R$200,00', observation: 'G, Azul', freight: null },
    { image: "/car2.png", description: 'Brinquedo de Atividade Bebê Box', amount: 'R$ 99,00', off: null, observation: 'Disponível em 10 dias', freight: null },
    { image: "/car3.png", description: 'Lençol Elástico Avulso 300 Fios Casa Bege Claro', amount: 'R$ 35,00', off: null, observation: 'Queen Bege', freight: 'Hoje, 27 de Junho R$ 43,00' },
    { image: "/car4.png", description: 'Mouse logitech usb bluetooth', amount: 'R$ 99,00', off: null, observation: null, freight: 'Terça-feira, 5 de novembro Frete grátis' },
    { image: "/car5.png", description: 'Voucher Univacinas Hepatite A', amount: 'R$ 99,00', off: null, observation: null, freight: null },
];

export default function Header() {
    const [isHidden, setIsHidden] = useState<boolean>(false);
    const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);
    const [tempCep, setTempCep] = useState<string>("");
    const [cep, setCep] = useState<string>("");

    const handleClick = () => {
        setCep(tempCep);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollLimit = 300;
            setIsHidden(window.scrollY > scrollLimit);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={` bg-[#EAE0D5] border-t-[#F47920] border-t-[8px] transition-transform duration-700 w-full fixed left-0 top-0 shadow-md z-50 ${isHidden ? "-translate-y-full" : "translate-y-0"
                }`}
        >
            <div className="flex justify-center items-center h-[80px] md:h-[122px]  bg-[#EAE0D5]">
                <div className="flex justify-between md:justify-around items-center gap-5 w-full max-w-[1290px] mx-auto px-5">
                    <div className="flex gap-2 items-center">
                        <svg className="md:hidden" width="30" height="35" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 14.9998H21" stroke="#F47920" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 8.5H21" stroke="#F47920" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 2H21" stroke="#F47920" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <Image
                            src="/uniclub.png"
                            height={36}
                            width={250}
                            alt="uniclub"
                            className="h-8 w-36 md:w-auto md:h-auto sm:min-w-[200px] cursor-pointer"
                        />
                    </div>
                    <div className="relative hidden md:block">
                        <Input
                            type="text"
                            placeholder="O que você gostaria hoje?"
                            className="sm:w-[200px] md:w-[300px] xl:w-[572px] h-[54px] text-[#ABABAB] text-[18px] rounded-[30px] bg-[#FFFFFF] shadow font-semibold"
                        />
                        <span className="absolute top-4 right-5 cursor-pointer hover:opacity-[0.5]">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.9956 7C12.9956 10.3123 10.3079 13 6.9956 13C3.68328 13 1 10.3123 1 7C1 5.4824 1.56305 4.09238 2.4956 3.03666C3.59531 1.78739 5.20528 1 7 1C10.3123 1 13 3.68768 13 7H12.9956Z" stroke="#ABABAB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17 17L13 13" stroke="#ABABAB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </div>
                    <div className="flex gap-5">
                        <div className="items-center gap-1 hidden md:flex">
                            <span className="cursor-pointer">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="36" height="36" rx="18" fill="#F7F3EE" />
                                    <path d="M17.9994 9C22.0219 9 25.1528 12.6206 24.9942 16.6633C24.7317 23.4347 17.9994 28 17.9994 28M11 19.3632C11.0953 19.6581 11.2012 19.9478 11.3124 20.2321C13.2453 24.9874 18.0006 27.9996 18.0006 27.9996M18.0006 9C13.9781 9 10.8472 12.2642 11.0058 15.9091M19.7357 14.0665C20.7911 15.1169 20.7911 16.8199 19.7357 17.8703C18.6804 18.9206 16.9693 18.9206 15.9139 17.8703C14.8585 16.8199 14.8585 15.1169 15.9139 14.0665C16.9693 13.0162 18.6804 13.0162 19.7357 14.0665Z" stroke="#F47920" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <div className="text-[14px] flex flex-col space-y-[-5px] cursor-pointer hover:opacity-[0.9]">
                                <span className="font-semibold">Onde</span>
                                <p className="">você está?</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="cursor-pointer">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="36" height="36" rx="18" fill="#F7F3EE" />
                                    <path d="M21.103 16.1088C22.958 14.2538 22.958 11.2462 21.103 9.39124C19.248 7.53625 16.2405 7.53625 14.3855 9.39124C12.5305 11.2462 12.5305 14.2538 14.3855 16.1088C16.2405 17.9637 19.248 17.9637 21.103 16.1088Z" stroke="#F47920" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M17.9936 21C22.0162 21 24.9941 23 24.9885 26M17.9949 21C13.9723 21 10.9941 23 11 26" stroke="#F47920" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <div className="text-[14px] md:flex hidden flex-col space-y-[-5px] cursor-pointer hover:opacity-[0.9]">
                                <span className="font-semibold">Faça Login</span>
                                <p className="">ou cadastra-se</p>
                            </div>
                        </div>
                        <div>
                            <span className="cursor-pointer" onClick={() => setIsSheetOpen(!isSheetOpen)}>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="36" height="36" rx="18" fill="#F7F3EE" />
                                    <path d="M8 12H9.93032C10.6836 12 11.3271 12.6 11.4735 13.4293L12.7866 21.0702C12.9278 21.8996 13.5765 22.4995 14.3298 22.4995L23.2295 22.5C23.9828 22.5 24.6263 21.9 24.7727 21.0707L25.9707 14.1004C26.159 13.0122 25.4162 12.0005 24.4275 12.0005H15" stroke="#F47920" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M22.3647 29C23.4693 29 24.3647 28.1046 24.3647 27C24.3647 25.8954 23.4693 25 22.3647 25C21.2602 25 20.3647 25.8954 20.3647 27C20.3647 28.1046 21.2602 29 22.3647 29Z" fill="#F47920" />
                                    <path d="M15 29C16.1046 29 17 28.1046 17 27C17 25.8954 16.1046 25 15 25C13.8954 25 13 25.8954 13 27C13 28.1046 13.8954 29 15 29Z" fill="#F47920" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen} >
                <SheetContent className="">
                    <SheetHeader>
                        <SheetTitle
                            className="text-3xl font-semibold text-[#F47920]">
                            Carrinho
                            <span className="text-xs text-[#D4D4D4]">
                                (7 itens)
                            </span>
                        </SheetTitle>
                        <div className="">
                            <ScrollArea>
                                <div className="h-96 ">
                                    {
                                        imageCar.map((item, index) => (
                                            <div key={index} className="flex gap-4 w-full  border-b pb-2">
                                                <div className="w-20 h-20 flex-shrink-0">
                                                    <Image
                                                        src={item.image}
                                                        height={80}
                                                        width={80}
                                                        alt={item.description}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="flex flex-col flex-grow  gap-2">
                                                    <div className="flex items-start justify-between">
                                                        <div className="text-sm font-medium">{item.description}</div>
                                                        <div>
                                                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M5.83081 3.7959H15.0009" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M1 3.7959H3.99447" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M13.7194 3.7959V14.3327C13.7194 15.2539 13.0233 15.9999 12.1638 15.9999H3.88431C3.02485 15.9999 2.32874 15.2539 2.32874 14.3327V3.7959" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M10.8713 6.89722V12.9075" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M5.16113 6.89746V12.9078" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M8.02393 6.89722V12.9075" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M8.00085 1C9.19864 1 10.1709 2.04201 10.1709 3.32577V3.80093H5.83472V3.32577C5.83472 2.04201 6.80695 1 8.00474 1H8.00085Z" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <span className="text-xs text-gray-500">{item.observation || ''}</span>
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center gap-2">
                                                            <span className="w-6 h-6 flex items-center justify-center border border-[#F47920] text-[#F47920] rounded-full cursor-pointer">
                                                                -
                                                            </span>
                                                            <div className="text-md">1</div>
                                                            <span className="w-6 h-6 flex items-center justify-center border border-[#F47920] text-[#F47920] rounded-full cursor-pointer">
                                                                +
                                                            </span>
                                                        </div>

                                                        <div className="text-md font-bold text-gray-900">{item.amount}</div>
                                                    </div>
                                                    <div className="flex justify-between text-xs">
                                                        {item.freight}
                                                        {item.freight &&
                                                            <span className="underline">Alterar</span>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </ScrollArea>
                            <div className=" absolute bottom-0 left-0  w-full">
                                <Accordion type="multiple" defaultValue={["item-1"]} className="w-full p-3">
                                    <AccordionItem value={`${cep ? 'item-2' : 'item-1'}`}>
                                        <AccordionTrigger value={cep}>
                                            <div className="flex justify-end w-full">
                                                {cep ?
                                                    'R$ 43,90'
                                                    :
                                                    '---'
                                                }
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="flex justify-between bg-white">
                                                <input
                                                    onChange={(e) => setTempCep(e.target.value)}
                                                    placeholder="Digite seu CEP"
                                                    className="p-2 outline-none bg-transparent"
                                                    type="text"
                                                />
                                                <svg onClick={handleClick} className="cursor-pointer" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.49988 1L15.9999 8.50011L8.49988 16" stroke="#F47920" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M1.00002 8.5L14.9286 8.5" stroke="#F47920" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                                <div className="flex items-center justify-between p-3 font-semibold">
                                    <div>
                                        Subtotal
                                    </div>
                                    <div>
                                        R$ 439,90
                                    </div>
                                </div>
                                <div className=" flex justify-center w-full bg-[#F47920] py-3">
                                    <button className="flex gap-2 text-white font-bold items-center">
                                        PROSSEGUIR
                                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.17046 1L9.59338 5.50007L5.17046 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M0.998971 5.5L9.39026 5.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
            <DropdowMenu />
        </header>
    )
}

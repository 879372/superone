'use client'
import CarouselBanner from "@/components/carousel/carousel";
import CarouselCards from "@/components/carouselCards/carousel";

import Header from "@/components/header/page";
import CardWithCircle from "@/components/ui/cardwithcircle";

const CardsDepartaments = [
  { imageSrc: '/icon1.png', description: 'Arte Papelaria e Armarinhos' },
  { imageSrc: '/icon2.png', description: 'Saúde' },
  { imageSrc: '/icon3.png', description: 'Calçados, Roupas e Bolsas' },
  { imageSrc: '/icon4.png', description: 'Bêbes' },
  { imageSrc: '/icon5.png', description: 'Casa, Móveis e Decoração' },
  { imageSrc: '/icon6.png', description: 'Esports e Fitness' },
  { imageSrc: '/icon7.png', description: 'Beleza e Cuidado Pessoal' },
  { imageSrc: '/icon8.png', description: 'Imóveis' },
  { imageSrc: '/icon9.png', description: 'Óculos' },
  { imageSrc: '/icon10.png', description: 'Serviços' },
];

export default function Home() {
  return (
    <div className="max-w-[1300px] mx-auto">
      <Header />
      <main className="flex flex-col items-center justify-center w-full">
        <CarouselBanner />
        <div className="flex w-full pt-20 overflow-auto">
          {CardsDepartaments.map((card, index) => (
            <CardWithCircle key={index} imageSrc={card.imageSrc} description={card.description} />
          ))}
        </div>
        <CarouselCards />
      </main>
    </div>
  );
}

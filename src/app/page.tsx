'use client'
import CarouselCards from "@/components/carousel/carousel";
import DropdowMenu from "@/components/dropdow-menu/page";
import Header from "@/components/header/page";
import CardWithCircle from "@/components/ui/cardwithcircle";

const CardsDepartaments = [
  { imageSrc: '/icon1.png', description: 'Arte Papelaria e Armarinhos' },
  { imageSrc: '/icon2.png', description: 'Saúde' },
  { imageSrc: '/icon3.png', description: 'Calçados, Roupas e Bolsas' },
  { imageSrc: '/icon4.png', description: 'Bêbes' },
  { imageSrc: '/icon5.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { imageSrc: '/icon6.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { imageSrc: '/icon7.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { imageSrc: '/icon8.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { imageSrc: '/icon9.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { imageSrc: '/icon10.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
]

export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="">
        <DropdowMenu />
        <CarouselCards />
        <div className="flex gap-2 justify-center items-end">
          {CardsDepartaments.map((card, index) => (
            <CardWithCircle key={index} imageSrc={card.imageSrc} description={card.description} />
          ))}
        </div>
      </main>
    </div>
  );
}

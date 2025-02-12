'use client'
import CarouselCards from "@/components/carousel/carousel";
import DropdowMenu from "@/components/dropdow-menu/page";
import Header from "@/components/header/page";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="">
      <DropdowMenu />
        <CarouselCards />
      </main>
    </div>
  );
}

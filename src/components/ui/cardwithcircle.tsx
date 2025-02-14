import Image from "next/image";

const CardWithCircle = ({ imageSrc, description }: { imageSrc: string; description: string }) => {
  return (
    <div className="group flex flex-col items-center bg-transparent rounded-2xl p-4 max-w-[150px] cursor-pointer">
      <div className="flex justify-center items-center w-24 h-24 rounded-full overflow-hidden bg-[#EAE0D5] transition-colors duration-300 group-hover:bg-[#F47920]">
        <Image
          src={imageSrc}
          alt="Card Image"
          width={50}
          height={50}
          className="object-cover transition-all duration-300 group-hover:grayscale group-hover:brightness-[1000%]"
        />
      </div>
      <p className="flex flex-wrap mt-4 text-center text-gray-700 text-sm transition-all duration-300 group-hover:font-semibold">
        {description}
      </p>
    </div>
  );
};

export default CardWithCircle;

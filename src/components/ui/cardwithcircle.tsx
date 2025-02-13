import Image from "next/image";

const CardWithCircle = ({ imageSrc, description}: { imageSrc: string, description: string }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-4 w-64">
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-300">
        <Image src={imageSrc} alt="Card Image" width={96} height={96} className="object-cover w-full h-full" />
      </div>
      <p className="mt-4 text-center text-gray-700 text-sm">{description}</p>
    </div>
  );
};

export default CardWithCircle;

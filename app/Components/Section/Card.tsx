import Location from "@/app/assets/Location";
import Add from "@/app/assets/Add";
import { Cards } from "../../data/data";
import Image from "next/image";

interface Card {
  card: Cards;
}

function Card({ card }: Card) {
  return (
    <>
      <div className="card hidden sm:flex mt-4 border border-gray-200">
        <div className="left relative w-[400px] flex">
          <div className="w-[200px] h-full bg-black"></div>
          <Image
            loading="lazy"
            className="img ml-12"
            src={card?.img}
            alt="image"
          />
          <span className={`tag text-center ${card?.color}`}>{card?.tag}</span>
          <span className="text ">{card.date}</span>
        </div>
        <div className="flex flex-1 justify-between ml-2">
          <div className="right flex mt-6">
            <div className="content flex gap-2">
              <h1 className="card-title font-extrabold">{card.title}</h1>
              <div className="flex items-center gap-x-2">
                <Location />
                <span className="text-[#9C9C9C] text-sm">
                  Maximum UNIQ Hall
                </span>
              </div>
              <p className="text-[#000000]">
                1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda
                aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra
                aynı rolde ve genç bir.... Detaylı Bilgi
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 ml-auto mr-5 justify-center items-end">
            <button className="bg-[#FF0D87] p-2 px-8 text-white">
              Bilet Al
            </button>
            <div className="flex items-center gap-2">
              <Add />
              <span>Takvime Ekle</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-4  p-2 border border-gray-200 sm:hidden">
        <div className="flex flex-col">
          <div className="w-[350px] h-full p-6 bg-black">
            <span
              className={`text-white mobile-tag p-1 mr-4 text-center ${card?.color}`}
            >
              {card?.tag}
            </span>

            <div className="flex justify-center items-center gap-2 ml-4 mb-2">
              <span className="text-white text-xl">
                {card?.date?.substring(0, 7)}
              </span>
              <span className="text-gray-400">
                {card?.date?.substring(7, card?.date?.length)}
              </span>
            </div>

            <img loading="lazy" src={card.img.src} alt="logo" />
          </div>
          <h1 className="text-black text-center mt-4 font-bold">
            {card.title}
          </h1>
          <div className="flex mt-2 justify-center">
            1978 yılında ilk kez
            <span className="underline font-bold ml-2">Detaylı Bilgi..</span>
          </div>
          <div className="flex justify-center items-center gap-2 mt-4">
            <button className="bg-[#FF0D87] p-2 px-8 text-white">
              Bilet Al
            </button>
            <div className="flex items-center gap-2">
              <Add />
              <span>Takvime Ekle</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

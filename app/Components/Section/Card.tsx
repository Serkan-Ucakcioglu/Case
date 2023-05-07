import Location from "@/app/assets/Location";
import img from "../../hor.jpg";
import Add from "@/app/assets/Add";

const arr = [
  {
    img: img,
    date: "8 Eylül Çarşamba 21:15",
    tag: "TİYATRO",
    title: "BKM Yaz Etkinlikleri:Zengin Mutfağı",
  },
  {
    img: img,
    date: "Yasemin Sakallıoğlu",
    tag: "STANDUP",
    title: "BKM Yaz Etkinlikleri:Zengin Mutfağı",
  },
  {
    img: img,
    date: "8 Eylül Çarşamba 21:15",
    tag: "SİNEMA",
    title: "Sinema Keyfi: Rifkin’s Festival",
  },
  {
    img: img,
    date: "8 Eylül Çarşamba 21:15",
    tag: "TİYATRO",
    title: "BKM Yaz Etkinlikleri:Zengin Mutfağı",
  },
  {
    img: img,
    date: "8 Eylül Çarşamba 21:15",
    tag: "TİYATRO",
    title: "BKM Yaz Etkinlikleri:Zengin Mutfağı",
  },
  {
    img: img,
    date: "8 Eylül Çarşamba 21:15",
    tag: "TİYATRO",
    title: "BKM Yaz Etkinlikleri:Zengin Mutfağı",
  },
  {
    img: img,
    date: "8 Eylül Çarşamba 21:15",
    tag: "TİYATRO",
    title: "BKM Yaz Etkinlikleri:Zengin Mutfağı",
  },
];

function Card() {
  return (
    <>
      {arr?.map((card) => {
        return (
          <div className="card flex mt-4 border border-gray-200">
            <div className="left relative w-[400px] flex">
              <div className="w-[200px] h-full bg-black"></div>
              <img className="img ml-10" src={card?.img?.src} alt="image" />
              <span className="test text-center">{card.tag}</span>
              <span className="text">{card.date}</span>
            </div>
            <div className="flex flex-1 justify-between">
              <div className="right flex mt-6">
                <div className="ca flex gap-2">
                  <h1 className="card-title font-bold">{card.title}</h1>
                  <div className="flex items-center gap-x-2">
                    <Location />
                    <span className="text-[#9C9C9C] text-sm">
                      Maximum UNIQ Hall
                    </span>
                  </div>
                  <p className="text-[#000000]">
                    1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda
                    aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan
                    sonra aynı rolde ve genç bir.... Detaylı Bilgi
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
        );
      })}
    </>
  );
}

export default Card;

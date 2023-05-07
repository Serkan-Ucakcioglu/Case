import Selected from "@/app/assets/Selected";

type Bar = {
  setShow: React.Dispatch<React.SetStateAction<Boolean>>;
};

type arr = {
  name: String;
};

function BarPopup({ setShow }: Bar) {
  const arr: arr[] = [
    { name: "Maxium Uniq Box" },
    { name: "Maximum Uniq Lounge" },
    { name: "Maximum Uniq Açıkhava" },
    { name: "Bahçe Fuaye" },
  ];

  return (
    <div
      className="popup flex flex-col shadow-xl bg-white mt-2 ml-10 py-6 px-4"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <section>
        <h1 className="font-bold mb-3">Etkinlik Alanı</h1>
        <div className="flex gap-3 items-center border-b p-1 border-gray-100">
          <div className="bg-[#FF0D87] h-5 w-5 flex justify-center items-center">
            <Selected />
          </div>
          <span className="text-[#000000]">Maximum Uniq Hall</span>
        </div>
        {arr?.map((obj, i) => {
          return (
            <div
              key={i + 1}
              className="flex mt-2 p-1 gap-3 border-b last:border-none border-gray-100 items-center"
            >
              <div className="h-5 w-5 border border-gray-200"></div>
              <span className="text-[#000000]">{obj?.name}</span>
            </div>
          );
        })}
      </section>
      <section>
        <h1 className="font-bold mt-8">Etkinlik Tarihi</h1>
        <div className="flex mt-2 p-1 gap-3 border-b  border-gray-100 items-center">
          <div className="h-5 w-5 border border-gray-200"></div>
          <span className="text-[#000000]">Güncel Etkinlikler</span>
        </div>
        <div className="flex mt-2 p-1 gap-3 items-center">
          <div className="h-5 w-5 border border-gray-200"></div>
          <span className="text-[#000000]">Geçmiş etkinlikler</span>
        </div>
      </section>
    </div>
  );
}

export default BarPopup;

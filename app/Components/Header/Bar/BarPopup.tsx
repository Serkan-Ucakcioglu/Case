import Selected from "@/app/assets/Selected";

type Bar = {
  setShow: React.Dispatch<React.SetStateAction<Boolean>>;
};

function BarPopup({ setShow }: Bar) {
  const arr = [
    { name: "Maxium Uniq Box" },
    { name: "Maximum Uniq Lounge" },
    { name: "Maximum Uniq Açıkhava" },
    { name: "Bahçe Fuaye" },
  ];

  return (
    <div
      className="popup shadow-xl bg-white mt-2 ml-10 py-6 px-4"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div className="flex gap-2 items-center">
        <div className="bg-[#FF0D87] h-5 w-5 flex justify-center items-center">
          <Selected />
        </div>
        <span className="text-[#000000]">Maximum Uniq Hall</span>
      </div>
      {arr?.map((obj) => {
        return (
          <div className="flex mt-2 gap-2 items-center">
            <div className="h-5 w-5 border border-gray-200"></div>
            <span className="text-[#000000]">{obj?.name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default BarPopup;

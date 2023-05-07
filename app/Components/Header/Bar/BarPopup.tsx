import Selected from "@/app/assets/Selected";

type Bar = {
  setShow: React.Dispatch<React.SetStateAction<Boolean>>;
};

function BarPopup({ setShow }: Bar) {
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
        <label htmlFor="ch">Maximum Uniq Hall</label>
      </div>
    </div>
  );
}

export default BarPopup;

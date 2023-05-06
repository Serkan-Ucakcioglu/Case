import Calender from "@/app/assets/Calender";
import Points from "@/app/assets/Points";

function Bar() {
  return (
    <div className="w-full flex justify-between p-3 bg-[#F5F5F5] mt-6 px-8">
      <div className="flex">
        <Points />
        <span>Filtreler</span>
      </div>
      <div className="flex">
        <Calender />
        <span>Takvimde Gör</span>
      </div>
    </div>
  );
}

export default Bar;

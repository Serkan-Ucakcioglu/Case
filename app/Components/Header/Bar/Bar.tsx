"use client";
import React, { useState } from "react";
import Calender from "@/app/assets/Calender";
import Points from "@/app/assets/Points";
import BarPopup from "./BarPopup";

function Bar() {
  const [show, setShow] = useState<Boolean>(true);
  return (
    <>
      <div className="w-full flex justify-between p-4 bg-[#F5F5F5] mt-6 px-12">
        <div
          className="flex items-center ml-2"
          onMouseEnter={() => setShow(true)}
        >
          <Points />
          <span className="ml-2 text-[#FF0D87]">Filtreler</span>
          {show && <BarPopup setShow={setShow} />}
        </div>
        <div className="flex items-center">
          <Calender />
          <span className="ml-2">Takvimde Gör</span>
        </div>
      </div>
    </>
  );
}

export default Bar;

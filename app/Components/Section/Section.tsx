"use client";
import Card from "./Card";
import { useAppSelector } from "../../Features/store";
import { selectedData } from "@/app/Features/searchSlice";
function Section() {
  const data = useAppSelector(selectedData);
  return (
    <div className="flex w-full flex-col justify-center items-center p-8">
      {data?.map((card, i) => {
        return <Card card={card} key={i + 1} />;
      })}
    </div>
  );
}

export default Section;

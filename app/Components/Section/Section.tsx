import { arr } from "@/app/data/data";
import Card from "./Card";

function Section() {
  return (
    <div className="flex w-full flex-col justify-center items-center p-8">
      {arr?.map((card) => {
        return <Card card={card} />;
      })}
    </div>
  );
}

export default Section;

import Image from "next/image";
import Header from "./Components/Header/Header";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between py-5">
      <Header />
    </main>
  );
}

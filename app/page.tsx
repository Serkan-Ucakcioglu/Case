import Image from "next/image";
import Header from "./Components/Header/Header";
import Section from "./Components/Section/Section";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between py-5">
      <Header />
      <Section />
    </main>
  );
}

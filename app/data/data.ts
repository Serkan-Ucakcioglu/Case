import { StaticImageData } from "next/image";
import img1 from "../cardimg/1.jpg";
import img2 from "../cardimg/2.jpg";
import img3 from "../cardimg/3.jpg";
import img4 from "../cardimg/4.jpg";

type Arrays = {
  img: StaticImageData;
  date: String;
  tag: String;
  title: String;
  color: String;
};

export const arr: Arrays[] = [
  {
    img: img4,
    date: "8 Eylül Çarşamba 21:15",
    tag: "TİYATRO",
    title: "BKM Yaz Etkinlikleri:Zengin Mutfağı",
    color: "#B77CB8",
  },
  {
    img: img1,
    date: "Yasemin Sakallıoğlu",
    tag: "STANDUP",
    title: "BKM Yaz Etkinlikleri:Zengin Mutfağı",
    color: "#F19653",
  },
  {
    img: img2,
    date: "8 Eylül Çarşamba 21:15",
    tag: "SİNEMA",
    title: "Sinema Keyfi: Rifkin’s Festival",
    color: "#F07266",
  },
  {
    img: img4,
    date: "8 Eylül Çarşamba 21:15",
    tag: "KONSER",
    title: "BKM Yaz Etkinlikleri:Zengin Mutfağı",
    color: "9FAE5D",
  },
  {
    img: img1,
    date: "8 Eylül Çarşamba 21:15",
    tag: "STANDUP",
    title: "Yasemin Sakallıoğlu",
    color: "#F19653",
  },
  {
    img: img3,
    date: "8 Eylül Çarşamba 21:15",
    tag: "SİNEMA",
    title: "Sinema Keyfi: Rifkin’s Festival",
    color: "#F07266",
  },
];

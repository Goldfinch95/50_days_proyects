import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Card from "@/components/Card";

const inter = Inter({ subsets: ["latin"] });

const data = [
  {
    bgURL: "/Images/anivia.jpg",
    name: "Anivia",
  },
  {
    bgURL: "/Images/ashe.jpg",
    name: "Ashe",
  },
  {
    bgURL: "/Images/braum.jpg",
    name: "Braum",
  },
  {
    bgURL: "/Images/lissandra.jpg",
    name: "Lissandra",
  },
  {
    bgURL: "/Images/sejuani.jpg",
    name: "Sejuani",
  },
];
export default function Home() {
  return (
    <>
      <Head>
        <title>Expandible Cards</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.gallery}>
          {data.map((d) => (
            <Card info={d} />
          ))}
        </div>
      </main>
    </>
  );
}

import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Card from "@/components/Card";
// en data tenemos los valores de la ubicación del archivo y el nombre del campeón.
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
//se pasa la data al componente card
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

import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Card from "@/components/Card";
<<<<<<< HEAD
// en data tenemos los valores de la ubicación del archivo y el nombre del campeón.
=======

>>>>>>> ccf248400f3bf2e2c2d7cc968d447b4481b0dfa2
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
<<<<<<< HEAD
//se pasa la data al componente card
=======
>>>>>>> ccf248400f3bf2e2c2d7cc968d447b4481b0dfa2
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

import styles from "@/styles/Home.module.css";
<<<<<<< HEAD
// la carta recibe la info de data
export default function card({ info }) {
  // se elige la imagen de fondo
  const bgStyle = {
    backgroundImage: `url(${info.bgURL})`,
  };
  //el componente carta retorna la imagen y el nombre
=======

export default function Card({ info }) {
  const bgStyle = {
    backgroundImage: `url(${info.bgURL})`,
  };
>>>>>>> ccf248400f3bf2e2c2d7cc968d447b4481b0dfa2
  return (
    <div className={styles.img_box} style={bgStyle}>
      <h3>{info.name}</h3>
    </div>
  );
}

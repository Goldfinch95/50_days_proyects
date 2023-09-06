import styles from "@/styles/Home.module.css";
// la carta recibe la info de data
export default function card({ info }) {
  // se elige la imagen de fondo
  const bgStyle = {
    backgroundImage: `url(${info.bgURL})`,
  };
  //el componente carta retorna la imagen y el nombre
  return (
    <div className={styles.img_box} style={bgStyle}>
      <h3>{info.name}</h3>
    </div>
  );
}

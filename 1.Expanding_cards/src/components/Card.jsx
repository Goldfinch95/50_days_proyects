import styles from "@/styles/Home.module.css";

export default function Card({ info }) {
  const bgStyle = {
    backgroundImage: `url(${info.bgURL})`,
  };
  return (
    <div className={styles.img_box} style={bgStyle}>
      <h3>{info.name}</h3>
    </div>
  );
}

import styles from "../styles/page.module.css";
//la clase del circulo cambiara depende de si esta activo o no.
export default function Circle({ info, isActive }) {
  const circleClass = isActive ? styles.activeCircle : styles.circle;
  return <span className={circleClass}>{info.id}</span>;
}

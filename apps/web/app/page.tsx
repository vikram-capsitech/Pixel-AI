import styles from "./page.module.css";
import WebHomePage from "./pages";

export default function Home() {
  return (
    <div className={styles.page}>
      <WebHomePage />
    </div>
  );
}

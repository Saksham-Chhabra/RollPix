import PhotoUpload from "../components/PhotoUpload";
import styles from "./Home.module.css";
import "../general.css";
import Navbar from "../components/Navbar";
function Home() {
  return (
    <div className={styles.home}>
      <Navbar />
      <div className={styles.homeContainer}>
        <PhotoUpload />
      </div>
    </div>
  );
}

export default Home;

import type { NextPage } from 'next';
import styles from '../styles/index.module.css';

const Home: NextPage = () => (
  <div>
    <div className={styles.hero}>
      <div className={styles.heroName}>Eric Choi</div>
      <div className={styles.heroSubtitle}>developer based in Seattle</div>
    </div>
  </div>
);

export default Home;

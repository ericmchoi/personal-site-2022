import styles from '../styles/NavBar.module.css';

function NavBar(): JSX.Element {
  return (
    <nav className={styles.navbar}>
      <a className={styles.link} href="#about">About</a>
      <a className={styles.link} href="#skills">Skills</a>
      <a className={styles.link} href="#projects">Projects</a>
      <a className={styles.link} href="#contact">Contact</a>
    </nav>
  );
}

export default NavBar;

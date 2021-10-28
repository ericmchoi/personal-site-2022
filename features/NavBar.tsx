import styles from '../styles/NavBar.module.css';

function NavBar(): JSX.Element {
  return (
    <nav className={styles.navbar}>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

export default NavBar;

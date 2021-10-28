import styles from '../styles/Footer.module.css';

function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      &#169; {new Date().getFullYear()} Eric Choi
    </footer>
  );
}

export default Footer;

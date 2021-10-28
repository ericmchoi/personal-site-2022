import type { AppProps } from 'next/app';
import Footer from '../features/Footer';
import NavBar from '../features/NavBar';
import '../styles/globals.css';
import styles from '../styles/App.module.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className={styles.app}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;

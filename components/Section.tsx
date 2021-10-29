import { ReactNode } from 'react';
import styles from '../styles/Section.module.css';

function Section({ children }: { children: ReactNode }): JSX.Element {
  return <section className={styles.section}>{children}</section>;
}

export default Section;

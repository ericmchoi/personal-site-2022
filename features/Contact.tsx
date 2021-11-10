import styles from '../styles/Contact.module.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact(): JSX.Element {
  return (
    <div>
      <div>
        <FaEnvelope className={styles.icon} size="1.25rem" />
        <a className={styles.link} href="mailto:emchoi91&#64;gmail&#46;com">
          emchoi91&#64;gmail&#46;com
        </a>
      </div>
      <div>
        <FaGithub className={styles.icon} size="1.25rem" />
        <a className={styles.link} href="https://github.com/ericmchoi">Github</a>
      </div>
      <div>
        <FaLinkedin className={styles.icon} size="1.25rem" />
        <a className={styles.link} href="https://www.linkedin.com/in/eric-choi-5906071a/">LinkedIn</a>
      </div>
    </div>
  );
}

export default Contact;

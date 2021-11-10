import { FaGithub, FaLink } from 'react-icons/fa';
import styles from '../styles/ProjectInfo.module.css';
import { Project } from '../utils/project';

function ProjectInfo({ project }: { project: Project }): JSX.Element {
  const { name, description, tags, link, repo } = project;
  return (
    <div>
      <h2 className={styles.name}>{name}</h2>
      <div className={styles.tags}>
        {tags.map(({ type, text }) => (
          <div key={text} className={`${styles.tag} ${styles[`tag-${type}`]}`}>
            {text}
          </div>
        ))}
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.links}>
        <a href={link}>
          <FaLink className={styles.linkIcon} size="1rem" />
          Demo
        </a>
        <a href={repo}>
          <FaGithub className={styles.linkIcon} size="1rem" />
          Repo
        </a>
      </div>
    </div>
  );
}

export default ProjectInfo;

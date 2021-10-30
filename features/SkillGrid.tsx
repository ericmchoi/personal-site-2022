import styles from '../styles/SkillGrid.module.css';
import { BsWindow } from 'react-icons/bs';
import { SiJavascript, SiLinux } from 'react-icons/si';
import { VscJson } from 'react-icons/vsc';
import { FaDatabase, FaPencilRuler } from 'react-icons/fa';

const skills = [
  {
    id: 'web-design',
    title: 'web design & development',
    items: ['HTML', 'CSS', 'Javascript', 'Typescript'],
    icon: <BsWindow className={styles.skillIcon} size="2rem" />,
  },
  {
    id: 'front-end',
    title: 'front-end frameworks',
    items: ['React', 'Next.js'],
    icon: <SiJavascript className={styles.skillIcon} size="2rem" />,
  },
  {
    id: 'back-end',
    title: 'back-end frameworks',
    items: ['express.js', 'Django'],
    icon: <VscJson className={styles.skillIcon} size="2rem" />,
  },
  {
    id: 'ux',
    title: 'UX engineering and tools',
    items: ['needfinding', 'prototyping', 'figma'],
    icon: <FaPencilRuler className={styles.skillIcon} size="2rem" />,
  },
  {
    id: 'databases',
    title: 'databases',
    items: ['MySQL', 'PostgreSQL'],
    icon: <FaDatabase className={styles.skillIcon} size="2rem" />,
  },
  {
    id: 'linux',
    title: 'linux operating system',
    items: ['RHEL', 'CentOS', 'bash'],
    icon: <SiLinux className={styles.skillIcon} size="2rem" />,
  },
];

function SkillGrid(): JSX.Element {
  return (
    <div className={styles.grid}>
      {skills.map(({ id, title, items, icon }) => (
        <div className={styles.skill} key={id}>
          {icon}
          <div>
            <h1 className={styles.skillTitle}>{title}</h1>
            <div className={styles.skillItems}>{items.join(', ')}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillGrid;

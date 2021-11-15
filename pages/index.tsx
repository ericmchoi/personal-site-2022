import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Container from '../components/Container';
import ProjectInfo from '../components/ProjectInfo';
import Section from '../components/Section';
import Contact from '../features/Contact';
import SkillGrid from '../features/SkillGrid';
import styles from '../styles/index.module.css';
import getProjects, { Project } from '../utils/project';

const getStaticProps: GetStaticProps = async () => {
  return { props: { projects: getProjects() } };
};

const Home: NextPage<{ projects: Project[] }> = ({ projects }) => {
  return (
    <div>
      <Head>
        <title>Eric Choi | Software Engineer | Home</title>
      </Head>
      <div className={styles.hero}>
        <div className={styles.heroName}>Eric Choi</div>
        <div className={styles.heroSubtitle}>developer based in Seattle</div>
      </div>
      <main>
        <Section>
          <Container>
            <h1 id="about" className={styles.sectionHeading}>
              About me
            </h1>
            <p>
              Hi there! 👋 My name is Eric, and I am a programmer 🖥️ currently
              focusing on full-stack development. I also have previous
              experience in infrastructure and devops engineering.
            </p>
            <p>
              In my free time, you might find me enjoying a freshly brewed cup
              of coffee. ☕ My current beverage of choice is{' '}
              <a href="https://www.kumacoffee.com/">Kuma Coffee</a> made in my{' '}
              <a href="https://en.wikipedia.org/wiki/Moka_pot">Moka Pot</a> and
              poured over ice.
            </p>
            <p>
              Thanks for visiting! If you&apos;d like to learn more about me,
              continue scrolling, and feel free to reach out using my contact
              info below.
            </p>
          </Container>
        </Section>
        <Section>
          <Container>
            <h1 id="skills" className={styles.sectionHeading}>
              Skills
            </h1>
            <SkillGrid />
          </Container>
        </Section>
        <Section>
          <Container>
            <h1 id="projects" className={styles.sectionHeading}>
              Projects
            </h1>
            {projects.map((project) => (
              <ProjectInfo key={project.name} project={project} />
            ))}
          </Container>
        </Section>
        <Section>
          <Container>
            <h1 id="contact" className={styles.sectionHeading}>
              Contact
            </h1>
            <Contact />
          </Container>
        </Section>
      </main>
    </div>
  );
};

export default Home;
export { getStaticProps };

import type { NextPage } from 'next';
import Container from '../components/Container';
import Section from '../components/Section';
import SkillGrid from '../features/SkillGrid';
import styles from '../styles/index.module.css';

const Home: NextPage = () => (
  <div>
    <div className={styles.hero}>
      <div className={styles.heroName}>Eric Choi</div>
      <div className={styles.heroSubtitle}>developer based in Seattle</div>
    </div>
    <main>
      <Section>
        <Container>
          <h1 className={styles.sectionHeading}>About me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            bibendum, ante vel aliquet fringilla, neque lacus vulputate justo,
            non convallis felis velit eget lorem.
          </p>
          <p>
            Proin dictum tellus sem, vitae semper tellus consectetur et. Nullam
            blandit vulputate tortor, ac venenatis elit elementum sit amet.
            Etiam malesuada, leo a lobortis consequat, eros ipsum cursus augue,
            sed finibus urna neque non turpis. Phasellus nunc magna, gravida
            ultricies tortor eu, hendrerit mollis sem.
          </p>
          <p>
            Sed sem tortor, vestibulum fringilla posuere nec, viverra dapibus
            massa. Nulla posuere ultricies nisl, a cursus enim mollis at.
          </p>
          <p>
            Ut in ex ornare, lobortis lacus sed, condimentum velit. Nulla
            vulputate feugiat est vitae accumsan. Aenean ut ligula laoreet,
            feugiat ante sed, suscipit nibh. Vestibulum quis velit arcu. Integer
            suscipit elementum dolor, id bibendum sapien placerat id.
          </p>
        </Container>
      </Section>
      <Section>
        <Container>
          <h1 className={styles.sectionHeading}>Skills</h1>
          <SkillGrid />
        </Container>
      </Section>
    </main>
  </div>
);

export default Home;

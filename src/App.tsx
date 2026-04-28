import { resumeData } from './data/resumeData';
import Navigation from './components/Navigation/Navigation';
import Summary from './components/Summary/Summary';
import Experience from './components/Experience/Experience';
import TechStack from './components/TechStack/TechStack';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import Education from './components/Education/Education';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.app}>
      <Navigation />
      <main className={styles.main}>
        <section id="summary" className={styles.section}>
          <Summary data={resumeData.summary} />
        </section>
        <section id="experience" className={styles.section}>
          <Experience data={resumeData.experience} />
        </section>
        <section id="techstack" className={styles.section}>
          <TechStack data={resumeData.techStack} />
        </section>
        <section id="projects" className={styles.section}>
          <Projects data={resumeData.projects} />
        </section>
        <section id="certifications" className={styles.section}>
          <Certifications data={resumeData.certifications} />
        </section>
        <section id="education" className={styles.section}>
          <Education data={resumeData.education} />
        </section>
      </main>
    </div>
  );
}

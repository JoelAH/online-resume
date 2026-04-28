import type { ExperienceEntry } from '../../data/resumeData';
import { useInView } from '../../hooks/useInView';
import styles from './Experience.module.css';

interface ExperienceProps {
  data: ExperienceEntry[];
}

function ExperienceCard({ entry, index }: { entry: ExperienceEntry; index: number }) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`${styles.entry} ${isInView ? styles.entryVisible : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={styles.header}>
        <h3 className={styles.jobTitle}>{entry.jobTitle}</h3>
        <span className={styles.dateRange}>
          {entry.startDate} – {entry.endDate}
        </span>
      </div>
      <p className={styles.company}>
        {entry.company} · {entry.location}
      </p>
      <ul className={styles.accomplishments}>
        {entry.accomplishments.map((item, i) => (
          <li key={i} className={styles.accomplishment}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience({ data }: ExperienceProps) {
  const { ref, isInView } = useInView({ threshold: 0.05 });

  return (
    <div ref={ref} className={styles.experience}>
      <h2 className={`${styles.heading} ${isInView ? styles.headingVisible : ''}`}>
        Work Experience
      </h2>
      {data.map((entry, index) => (
        <ExperienceCard key={index} entry={entry} index={index} />
      ))}
    </div>
  );
}

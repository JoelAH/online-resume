import type { ExperienceEntry } from '../../data/resumeData';
import styles from './Experience.module.css';

interface ExperienceProps {
  data: ExperienceEntry[];
}

export default function Experience({ data }: ExperienceProps) {
  return (
    <div className={styles.experience}>
      <h2 className={styles.heading}>Work Experience</h2>
      {data.map((entry, index) => (
        <div key={index} className={styles.entry}>
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
      ))}
    </div>
  );
}

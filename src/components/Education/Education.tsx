import type { EducationEntry } from '../../data/resumeData';
import styles from './Education.module.css';

interface EducationProps {
  data: EducationEntry;
}

export default function Education({ data }: EducationProps) {
  return (
    <div className={styles.education}>
      <h2 className={styles.heading}>Education</h2>
      <div className={styles.card}>
        <h3 className={styles.institution}>{data.institution}</h3>
        <p className={styles.degree}>{data.degree}</p>
        <p className={styles.period}>{data.period}</p>
      </div>
    </div>
  );
}

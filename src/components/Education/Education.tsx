import type { EducationEntry } from '../../data/resumeData';
import { useInView } from '../../hooks/useInView';
import styles from './Education.module.css';

interface EducationProps {
  data: EducationEntry;
}

export default function Education({ data }: EducationProps) {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <div ref={ref} className={styles.education}>
      <h2 className={`${styles.heading} ${isInView ? styles.headingVisible : ''}`}>
        Education
      </h2>
      <div className={`${styles.card} ${isInView ? styles.cardVisible : ''}`}>
        <h3 className={styles.institution}>{data.institution}</h3>
        <p className={styles.degree}>{data.degree}</p>
        <p className={styles.period}>{data.period}</p>
      </div>
    </div>
  );
}

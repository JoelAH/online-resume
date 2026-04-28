import type { SummaryData } from '../../data/resumeData';
import { useInView } from '../../hooks/useInView';
import styles from './Summary.module.css';

interface SummaryProps {
  data: SummaryData;
}

export default function Summary({ data }: SummaryProps) {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`${styles.summary} ${isInView ? styles.visible : ''}`}
    >
      <h1 className={styles.name}>{data.name}</h1>
      <p className={styles.title}>{data.title}</p>
      <p className={styles.text}>{data.summaryText}</p>
      <div className={styles.contact}>
        <a href={`mailto:${data.email}`} className={styles.contactLink}>
          {data.email}
        </a>
        <a
          href={data.linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactLink}
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

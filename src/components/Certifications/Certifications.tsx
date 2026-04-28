import type { CertificationEntry } from '../../data/resumeData';
import { useInView } from '../../hooks/useInView';
import styles from './Certifications.module.css';

interface CertificationsProps {
  data: CertificationEntry[];
}

function CertCard({ cert, index }: { cert: CertificationEntry; index: number }) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`${styles.card} ${isInView ? styles.cardVisible : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={styles.badge}>✦</div>
      <h3 className={styles.certName}>{cert.name}</h3>
      {cert.issuer && (
        <p className={styles.issuer}>{cert.issuer}</p>
      )}
    </div>
  );
}

export default function Certifications({ data }: CertificationsProps) {
  const { ref, isInView } = useInView({ threshold: 0.05 });

  return (
    <div ref={ref} className={styles.certifications}>
      <h2 className={`${styles.heading} ${isInView ? styles.headingVisible : ''}`}>
        Certifications
      </h2>
      <div className={styles.grid}>
        {data.map((cert, index) => (
          <CertCard key={cert.name} cert={cert} index={index} />
        ))}
      </div>
    </div>
  );
}

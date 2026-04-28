import type { CertificationEntry } from '../../data/resumeData';
import styles from './Certifications.module.css';

interface CertificationsProps {
  data: CertificationEntry[];
}

export default function Certifications({ data }: CertificationsProps) {
  return (
    <div className={styles.certifications}>
      <h2 className={styles.heading}>Certifications</h2>
      <div className={styles.grid}>
        {data.map((cert) => (
          <div key={cert.name} className={styles.card}>
            <h3 className={styles.certName}>{cert.name}</h3>
            {cert.issuer && (
              <p className={styles.issuer}>{cert.issuer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

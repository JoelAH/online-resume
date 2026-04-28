import type { ProjectEntry } from '../../data/resumeData';
import styles from './Projects.module.css';

interface ProjectsProps {
  data: ProjectEntry[];
}

export default function Projects({ data }: ProjectsProps) {
  return (
    <div className={styles.projects}>
      <h2 className={styles.heading}>Side Projects</h2>
      <div className={styles.grid}>
        {data.map((project) => (
          <div key={project.name} className={styles.card}>
            <h3 className={styles.projectName}>{project.name}</h3>
            <p className={styles.description}>{project.description}</p>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

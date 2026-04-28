import type { ProjectEntry } from '../../data/resumeData';
import { useInView } from '../../hooks/useInView';
import styles from './Projects.module.css';

interface ProjectsProps {
  data: ProjectEntry[];
}

function ProjectCard({ project, index }: { project: ProjectEntry; index: number }) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`${styles.card} ${isInView ? styles.cardVisible : ''}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
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
  );
}

export default function Projects({ data }: ProjectsProps) {
  const { ref, isInView } = useInView({ threshold: 0.05 });

  return (
    <div ref={ref} className={styles.projects}>
      <h2 className={`${styles.heading} ${isInView ? styles.headingVisible : ''}`}>
        Side Projects
      </h2>
      <div className={styles.grid}>
        {data.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

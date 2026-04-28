import type { TechStackData } from '../../data/resumeData';
import { useInView } from '../../hooks/useInView';
import styles from './TechStack.module.css';

interface TechStackProps {
  data: TechStackData;
}

function CategoryCard({ category, index }: { category: TechStackData['categories'][number]; index: number }) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`${styles.category} ${isInView ? styles.categoryVisible : ''}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <h3 className={styles.categoryName}>{category.categoryName}</h3>
      <div className={styles.skills}>
        {category.skills.map((skill, skillIndex) => (
          <span
            key={skill.name}
            className={`${styles.skill} ${
              category.categoryName === 'Languages/Frameworks'
                ? skill.isCurrent
                  ? styles.current
                  : styles.previouslyUsed
                : ''
            } ${isInView ? styles.skillVisible : ''}`}
            style={{ transitionDelay: `${(index * 120) + (skillIndex * 50)}ms` }}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechStack({ data }: TechStackProps) {
  const { ref, isInView } = useInView({ threshold: 0.05 });

  return (
    <div ref={ref} className={styles.techStack}>
      <h2 className={`${styles.heading} ${isInView ? styles.headingVisible : ''}`}>
        Tech Stack
      </h2>
      <div className={styles.categories}>
        {data.categories.map((category, index) => (
          <CategoryCard key={category.categoryName} category={category} index={index} />
        ))}
      </div>
    </div>
  );
}

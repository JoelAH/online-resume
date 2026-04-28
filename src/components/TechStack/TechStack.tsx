import type { TechStackData } from '../../data/resumeData';
import styles from './TechStack.module.css';

interface TechStackProps {
  data: TechStackData;
}

export default function TechStack({ data }: TechStackProps) {
  return (
    <div className={styles.techStack}>
      <h2 className={styles.heading}>Tech Stack</h2>
      <div className={styles.categories}>
        {data.categories.map((category) => (
          <div key={category.categoryName} className={styles.category}>
            <h3 className={styles.categoryName}>{category.categoryName}</h3>
            <div className={styles.skills}>
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`${styles.skill} ${
                    category.categoryName === 'Languages/Frameworks'
                      ? skill.isCurrent
                        ? styles.current
                        : styles.previouslyUsed
                      : ''
                  }`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useState } from 'react';
import styles from './Navigation.module.css';

const NAV_ITEMS = [
  { label: 'Summary', sectionId: 'summary' },
  { label: 'Work Experience', sectionId: 'experience' },
  { label: 'Tech Stack', sectionId: 'techstack' },
  { label: 'Side Projects', sectionId: 'projects' },
  { label: 'Certifications', sectionId: 'certifications' },
  { label: 'Education', sectionId: 'education' },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <div className={styles.inner}>
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          aria-label="Toggle navigation menu"
        >
          <span className={styles.hamburgerBar} />
          <span className={styles.hamburgerBar} />
          <span className={styles.hamburgerBar} />
        </button>

        <ul
          id="nav-menu"
          className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}
          aria-hidden={!menuOpen ? 'true' : undefined}
        >
          {NAV_ITEMS.map(({ label, sectionId }) => (
            <li key={sectionId}>
              <a
                href={`#${sectionId}`}
                onClick={(e) => handleNavClick(e, sectionId)}
                className={styles.link}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

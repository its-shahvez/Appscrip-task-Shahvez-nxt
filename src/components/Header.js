import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      {/* Colorful Top Strip */}
      <div className={styles.topStrip}>
        Free Shipping on Orders Over $50
      </div>

      {/* Main Navigation */}
      <nav className={styles.nav}>
        <div className={styles.logo}>
          APPSCRIP
        </div>

        <ul className={styles.navLinks}>
          <li>Shop</li>
          <li>Skills</li>
          <li>Stories</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>

        <div className={styles.icons}>
          <span>🔍</span>
          <span>❤️</span>
          <span>🛍️</span>
          <span>👤</span>
        </div>
      </nav>

      {/* Hero Section */}
      <div className={styles.heroSection}>
        <h1 className={styles.heroTitle}>
          <span className={styles.highlight}>Discover</span> Our Products
        </h1>
        <p className={styles.heroDescription}>
          Explore our premium collection of designer items. 
          Crafted with passion, designed for you. Experience the new trend.
        </p>
      </div>
    </header>
  );
}
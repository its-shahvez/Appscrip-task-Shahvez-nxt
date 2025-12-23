import { useState } from 'react';
import styles from './FilterBar.module.css';

export default function FilterBar({ isFilterVisible, setFilterVisible }) {
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [selectedSort, setSelectedSort] = useState('RECOMMENDED');

  // List of sorting options
  const sortOptions = [
    'RECOMMENDED',
    'NEWEST FIRST',
    'POPULAR',
    'PRICE: HIGH TO LOW',
    'PRICE: LOW TO HIGH'
  ];

  return (
    <div className={styles.filterBar}>
      {/* Left Side: Count and Hide/Show Button */}
      <div className={styles.leftSection}>
        <span className={styles.itemCount}>3425 ITEMS</span>
        <button 
          className={styles.toggleBtn} 
          onClick={() => setFilterVisible(!isFilterVisible)}
        >
          {isFilterVisible ? '< HIDE FILTER' : '> SHOW FILTER'}
        </button>
      </div>

      {/* Right Side: Recommended Dropdown */}
      <div 
        className={styles.sortSection} 
        onClick={() => setShowSortMenu(!showSortMenu)}
      >
        {selectedSort} 
        <span>{showSortMenu ? '▲' : '▼'}</span>

        {/* Dropdown Menu */}
        <div className={`${styles.dropdownMenu} ${showSortMenu ? styles.show : ''}`}>
          {sortOptions.map((option) => (
            <div 
              key={option} 
              className={styles.dropdownItem}
              onClick={() => setSelectedSort(option)}
            >
              {option}
              {selectedSort === option && <span className={styles.checkIcon}>✓</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
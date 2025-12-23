import { useState } from 'react';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  // All the filter categories mentioned in your screenshot
  const filters = [
    { name: 'IDEAL FOR', options: ['Men', 'Women', 'Baby & Kids'] },
    { name: 'OCCASION', options: ['Casual', 'Formal', 'Party'] },
    { name: 'WORK', options: ['Office', 'Field', 'Remote'] },
    { name: 'FABRIC', options: ['Cotton', 'Silk', 'Linen'] },
    { name: 'SEGMENT', options: ['Premium', 'Economy'] },
    { name: 'SUITABLE FOR', options: ['Summer', 'Winter'] },
    { name: 'RAW MATERIALS', options: ['Organic', 'Synthetic'] },
    { name: 'PATTERN', options: ['Solid', 'Striped', 'Checked'] },
  ];

  // Logic to handle opening/closing of each section
  const [openSections, setOpenSections] = useState({
    'IDEAL FOR': true, // Keep the first one open by default
  });

  const toggleSection = (name) => {
    setOpenSections((prev) => ({
      ...prev,
      [name]: !prev[name], // Toggle the state
    }));
  };

  return (
    <aside className={styles.sidebar}>
      {/* Customizble Checkbox */}
      <div className={styles.filterGroup}>
        <label className={styles.label}>
          <input type="checkbox" className={styles.checkbox} />
          CUSTOMIZABLE
        </label>
      </div>

      {/* Dynamic Filter Sections */}
      {filters.map((filter) => (
        <div key={filter.name} className={styles.filterGroup}>
          <div 
            className={styles.filterHeader} 
            onClick={() => toggleSection(filter.name)}
          >
            <span>{filter.name}</span>
            <span>{openSections[filter.name] ? '▲' : '▼'}</span>
          </div>

          {/* Show options only if section is open */}
          {openSections[filter.name] && (
            <div className={styles.filterOptions}>
              <span className={styles.unselectAll}>Unselect All</span>
              {filter.options.map((opt) => (
                <label key={opt} className={styles.label}>
                  <input type="checkbox" className={styles.checkbox} />
                  {opt}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
}
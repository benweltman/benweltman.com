import React from 'react';
import styles from './Logo.module.css';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`${className} relative ${styles.logoContainer}`}>
      <div className={styles.logoTriangle} />
      <div className={`${styles.dot} ${styles.dotTop}`} />
      <div className={`${styles.dot} ${styles.dotBottomLeft}`} />
      <div className={`${styles.dot} ${styles.dotBottomRight}`} />
    </div>
  );
};

export default Logo;


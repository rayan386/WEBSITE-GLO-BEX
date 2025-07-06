import AuthButtons from './AuthButtons';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>ZARVA</div>
      <nav className={styles.nav}>
        <AuthButtons />
      </nav>
    </header>
  );
}
 
  
     
    

      

import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zarva | منصة التسوق الإلكتروني</title>
        <meta name="description" content="منصة بيع وشراء عصرية" />
      </Head>

      <Header />
      
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <h1>مرحبًا بكم في Zarva</h1>
          <p>منصة التسوق الأسرع والأسهل</p>
        </section>
      </main>
    </div>
  );
}
        

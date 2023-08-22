import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="og:title" content="Next js Title"></meta>
        <meta name="og:description" content="Description of dummy app"></meta>

        <meta
          name="og:image"
          content="https://assets.airtel.in/static-assets/safo/dth/images/jpg/img_stb_2.jpg"
        ></meta>
      </Head>

      <main className={styles.main}>
        <h1>SSR Meta example</h1>
      </main>
    </div>
  );
}

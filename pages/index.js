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
          content="https://fastly.picsum.photos/id/388/256/256.jpg?hmac=wEVx8GX1LbHpkxQF7fr83eitFEBTr5H4H-NdY75C6lQ"
        ></meta>
      </Head>

      <main className={styles.main}>
        <h1>SSR Meta example</h1>
      </main>
    </div>
  );
}

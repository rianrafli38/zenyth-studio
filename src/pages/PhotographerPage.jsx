import styles from '../styles/PhotographerSection.module.css';

export default function PhotographerSection() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Untuk Fotografer & Videografer</h2>
      <p className={styles.description}>
        Tampilkan portofoliomu secara elegan dan profesional. Website dari ZenythX membantumu menarik lebih banyak klien dengan desain visual yang modern dan performa yang cepat.
      </p>
      <div className={styles.features}>
        <div className={styles.featureCard}>
          <h3>📸 Portofolio Elegan</h3>
          <p>Galeri dinamis untuk memamerkan hasil karya terbaikmu.</p>
        </div>
        <div className={styles.featureCard}>
          <h3>🎯 Landing Page Profesional</h3>
          <p>Desain yang cocok untuk memperkuat branding personal.</p>
        </div>
        <div className={styles.featureCard}>
          <h3>📞 Fitur Kontak & Booking</h3>
          <p>Mudah dihubungi klien lewat formulir atau WhatsApp langsung.</p>
        </div>
      </div>
    </section>
  );
}
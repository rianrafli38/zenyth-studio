import styles from './PhotographerPage.module.css';

function PhotographerPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>📸 Photographer & Videographer Web Service</h1>
      <p className={styles.subtitle}>
        Meningkatkan visibilitas dan daya tarik portofolio Anda secara profesional dan elegan.
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🖼️ Portfolio Elegan</h2>
        <p className={styles.text}>
          Galeri full-width, lightbox, dan sistem kategori karya yang dapat disesuaikan dengan gaya Anda.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>📅 Booking & Jadwal</h2>
        <p className={styles.text}>
          Formulir pemesanan otomatis, integrasi Google Calendar, dan reminder via email/WhatsApp.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🌐 SEO & Kecepatan</h2>
        <p className={styles.text}>
          Optimasi mesin pencari, kecepatan loading, dan desain yang mobile-friendly.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Tampilkan keahlian Anda di panggung digital</h2>
        <p className={styles.text}>
          Konsultasikan kebutuhan Anda bersama tim Zenyth Studio secara gratis.
        </p>
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Konsultasi Sekarang
        </a>
      </section>
    </div>
  );
}

export default PhotographerPage;
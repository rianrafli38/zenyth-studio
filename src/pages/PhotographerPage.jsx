import styles from './Photographer.module.css';

function PhotographerPage() { return ( <div className={styles.photographerPage}> <section className={styles.hero}> <h1>📸 Photographer & Videographer Web Service</h1> <p>Meningkatkan visibilitas dan daya tarik portofolio Anda secara profesional dan elegan.</p> </section>

<section className={styles.features}>
    <div className={styles.featureBox}>
      <h2>🖼️ Portfolio Elegan</h2>
      <p>Galeri full-width, lightbox, dan sistem kategori karya yang dapat disesuaikan dengan gaya Anda.</p>
    </div>

    <div className={styles.featureBox}>
      <h2>📅 Booking & Jadwal</h2>
      <p>Formulir pemesanan otomatis, integrasi Google Calendar, dan reminder via email/WhatsApp.</p>
    </div>

    <div className={styles.featureBox}>
      <h2>🌐 SEO & Kecepatan</h2>
      <p>Optimasi mesin pencari, kecepatan loading, dan desain yang mobile-friendly.</p>
    </div>
  </section>

  <section className={styles.cta}>
    <h2>Tampilkan keahlian Anda di panggung digital</h2>
    <p>Konsultasikan kebutuhan Anda bersama tim Zenyth Studio secara gratis.</p>
    <a href="https://wa.me/6281234567890" target="_blank" className={styles.ctaButton}>
      Konsultasi Sekarang
    </a>
  </section>
</div>

); }

export default PhotographerPage;
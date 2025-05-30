import { motion } from 'framer-motion';
import styles from './About.module.css';
import { useLocation } from 'react-router-dom';

function About() {
  const location = useLocation();

  return (
    <section id="about" className={styles.about}>
      <motion.div
        key={location.pathname + '-about'} // triknya di sini
        className={styles.inner}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3, amount: 0.3 }}
      >
        <h2 className={styles.sectionTitle}>Tentang Zenyth Studio</h2>
        <p className={styles.content}>
          <span className={styles.highlight}>Zenyth Studio</span> adalah ruang digital tempat kami membangun lebih dari sekadar kode.
          Dengan semangat <span className={styles.highlight}>“More Than A Code”</span>, kami menciptakan pengalaman digital yang menyatu antara teknologi, estetika, dan makna.
          <br /><br />
          Kami menghadirkan solusi web dan sistem cerdas yang tidak hanya berfungsi, tapi juga berbicara—mewakili karakter dan visi setiap klien.
          <br /><br />
          Zenyth Studio bukan agensi biasa. Kami adalah rekan transformasi digital, yang siap berjalan bersama Anda membangun masa depan yang lebih terarah, kuat, dan bernilai.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
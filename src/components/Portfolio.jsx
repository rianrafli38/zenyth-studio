import { motion } from 'framer-motion';
import styles from './Portfolio.module.css';
import { link } from 'framer-motion/client';

const portfolioItems = [
  {
    title: 'Auraskin',
    desc: 'Sistem pemesanan produk skincare online dengan dashboard admin dinamis dan manajemen pesanan.',
    link: 'https://auraskin.my.id'
  },
  {
    title: 'Luna Miel',
    desc: 'Website branding untuk produk waffle rumahan dengan desain minimalis dan elegan.' ,
    link: 'https://lunaamiel.netlify.app/'
  },
  {
    title: 'AI Chatbot',
    desc: 'Chatbot pintar dengan API Gemini dan OpenAI, siap membantu bisnis dengan layanan cerdas.'
  }
];

function Portfolio() {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <motion.h2
        className={styles.sectionTitle}
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.3 }}
      >
        Portfolio Kami
      </motion.h2>

      <div className={styles.projectGrid}>
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            className={styles.projectCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            viewport={{ amount: 0.3 }}
          >
            <h3 className={styles.projectTitle}>{item.title}</h3>
            <p className={styles.projectDesc}>{item.desc}</p>
            {item.link && (
              <a
                href={item.link}
                className={styles.linkButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Lihat Website
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
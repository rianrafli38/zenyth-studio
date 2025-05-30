import { motion } from 'framer-motion';
import styles from './Portfolio.module.css';
import { link } from 'framer-motion/client';

const portfolioItems = [
  {
    title: 'Auraskin',
    desc: 'Online skincare product ordering system with dynamic admin dashboard and order management.',
    link: 'https://en.auraskin.my.id'
  },
  {
    title: 'Luna Miel',
    desc: 'Branding website for home waffle products with minimalist and elegant design.' ,
    link: 'https://lunaamiel.netlify.app/'
  },
  {
    title: 'AI Chatbot',
    desc: 'Smart chatbot with Gemini API and OpenAI, ready to help businesses with intelligent services.'
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
        Our Portfolio
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
                View Website
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
import { motion } from 'framer-motion';
import styles from './Services.module.css';

const services = [
  {
    title: 'Website Development',
    desc: 'Landing Page, Company Profile, Dashboard Bisnis. Custom atau template siap pakai.'
  },
  {
    title: 'AI Chatbot',
    desc: 'Chatbot cerdas dengan Gemini/OpenAI API. Multi-platform dan adaptif untuk bisnis Anda.'
  },
  {
    title: 'Digital Support',
    desc: 'SEO, Konsultasi Branding, dan Maintenance. Kami bantu Anda tumbuh dengan arah yang tepat.'
  }
];

function Services() {
  return (
    <motion.section
      id="services"
      className={styles.services}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ amount: 0.3 }}
    >
      <motion.h2
        className={styles.sectionTitle}
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.3 }}
      >
        Layanan Kami
      </motion.h2>

      <div className={styles.cardContainer}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.5 }}
            viewport={{ amount: 0.3, amount: 0.3 }}
          >
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDesc}>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Services;
import styles from './Contact.module.css';
import { useState } from 'preact/hooks';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Contact() {
  const navigate = useNavigate();
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mpwraqzj', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (response.ok) {
        navigate('/thankyou');
        form.reset();
      } else {
        const data = await response.json();
        if (data?.errors) {
          alert(data.errors.map((err) => err.message).join('\n'));
        } else {
          alert('Failed to send message. Please try again.');
        }
      }
    } catch (error) {
      alert('A connection error occurred. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className={styles.contact}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ amount: 0.2 }}
    >
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.3 }}
      >
        Contact Us
      </motion.h2>

      <motion.form
        className={styles.form}
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ amount: 0.3 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className={styles.input}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className={styles.textarea}
          required
        ></textarea>

        <button type="submit" className={styles.button} disabled={sending}>
          {sending ? 'Sending...' : 'Send Message'}
        </button>
      </motion.form>

      <motion.div
        className={styles.links}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ amount: 0.3 }}
      >
        <a
          href="https://wa.me/6285174380251"
          className={styles.linkButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
        <a href="mailto:studiozenyth@gmail.com" className={styles.linkButton}>
          Email
        </a>
      </motion.div>
    </motion.section>
  );
}

export default Contact;
import styles from "./footer.module.css";
import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <p className={styles.copyright}>
          © 2024 Tienda Online
          <span className={styles.divider}>|</span>
          React CoderHouse
        </p>
        <div className={styles.socialLinks}>
          <a href="#">
            <Linkedin size={18} />
          </a>
          <a href="#">
            <Github size={18} />
          </a>
          <a href="#">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

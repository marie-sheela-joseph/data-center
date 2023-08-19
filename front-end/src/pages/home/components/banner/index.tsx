import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const BannerComponent = () => {
  return (
    <section className={styles.banner}>
      <div className="container">
        <div className={styles.banner__content}>
          <div>
            <h1>Data Center</h1>
            <h3>
              The Pulse of Digital Transformation by Redefining Data
              Possibilities
            </h3>
            <Link to="/">Get Started Now</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerComponent;

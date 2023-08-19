import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__content}>
          <div className="col-sm-9">
            <h2>Sitemaps</h2>
            <div>
              <div className={styles.footer__content__row}>
                <div className="col-sm-4 col-lg-2">
                  <h3>services</h3>
                  <ul>
                    <li>
                      <Link to={'/'}>connectivity</Link>
                    </li>
                    <li>
                      <Link to={'/'}>cloud access</Link>
                    </li>
                    <li>
                      <Link to={'/'}>infrastructure</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-4 col-lg-2">
                  <h3>infrastructure</h3>
                  <ul>
                    <Link to={'/'}>qoS</Link>
                    <Link to={'/'}>routes servers</Link>
                  </ul>
                </div>
                <div className="col-sm-4 col-lg-2">
                  <h3>resellers</h3>
                  <ul>
                    <Link to={'/'}>resellers</Link>
                  </ul>
                </div>
                <div className="col-sm-4 col-lg-2">
                  <h3>Marketplace</h3>
                  <ul>
                    <Link to={'/'}>Marketplace</Link>
                  </ul>
                </div>
                <div className="col-sm-4 col-lg-2">
                  <h3>about datacentral paris</h3>
                  <ul>
                    <Link to={'/'}>our values</Link>
                    <Link to={'/'}>press</Link>
                    <Link to={'/'}>management</Link>
                    <Link to={'/'}>legal information</Link>
                    <Link to={'/'}>cookies Policy</Link>
                    <Link to={'/'}>Annual Report 2022</Link>
                  </ul>
                </div>
                <div className="col-sm-4 col-lg-2">
                  <h3>pops</h3>
                  <ul>
                    <Link to={'/'}>Paris</Link>
                    <Link to={'/'}>Marseille</Link>
                    <Link to={'/'}>Lyon</Link>
                    <Link to={'/'}>Grenoble</Link>
                    <Link to={'/'}>Aix-en-Provence</Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <p>Subscribe to our newsletter :</p>
            <Link to={'/'} className={styles.footer__subscribe}>
              Subscribe
            </Link>
            <div className={styles.footer__socialIcons}>
              <Link to={'/'}>
                <i className="fa-brands fa-facebook"></i>
              </Link>
              <Link to={'/'}>
                <i className="fa-brands fa-linkedin"></i>
              </Link>
              <Link to={'/'}>
                <i className="fa-brands fa-twitter"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

import logo from 'assets/images/logo.png';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const Header=()=>{
    return (
        <header className={styles.header}>
            <nav>
                <div className="container">
                    <div className={styles.header__content}>
                    <div className={styles.header__logo}>
                        <Link to='/'><img src= {logo} alt="data center"/></Link>
                    </div>
                    <div className={styles.header__list}>
                        <ul>
                            <li><Link to='/about'>about</Link></li>                                                        
                        </ul>
                    </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header
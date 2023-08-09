import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Banner=()=>{
    return (
    <section className={styles.banner}>                
        <div className='container'>
        <div className={styles.banner__content}>
            <div>
            <h1>data center</h1>
            <h3>the pulse of digital transformation by redefining data possibilities.</h3>
            <Link to={'/'}>get started now</Link>
            </div>
        </div>
        </div>
    </section>
    )
}
export default Banner
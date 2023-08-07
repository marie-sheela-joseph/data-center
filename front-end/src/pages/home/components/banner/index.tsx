import styles from './styles.module.css';

const Banner=()=>{
    return (
    <section className={styles.banner}>                
        <div className='container'>
        <div className={styles.banner__content}>
            <div>
            <h1>Data center</h1>
            <h3>The Pulse of Digital Transformation by redefining Data Possibilities.</h3>
            </div>
        </div>
        </div>
    </section>
    )
}
export default Banner
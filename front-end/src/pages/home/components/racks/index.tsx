import styles from './styles.module.css';
import { useAppSelector } from 'store/hooks';
import PaginatedItems from '../pagination';

const Racks=()=>{
    const racks=useAppSelector((state)=>state.racks.rackItems)
    return (
        <section className={styles.racks}>
            <div className='container'>            
            <h2>racks</h2>            
                <PaginatedItems itemsPerPage={10} items={racks}/>
            </div>            
        </section>
    )
}
export default Racks
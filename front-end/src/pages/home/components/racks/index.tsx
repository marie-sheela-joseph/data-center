import styles from './styles.module.css';
import { useAppSelector } from 'store/hooks';
import PaginatedItems from '../pagination';
import { Spinner } from '@chakra-ui/react';

const Racks = () => {
    const racks = useAppSelector(state => state.racks.rackItems);
    const status = useAppSelector(state => state.racks.status);
    const loading=<Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
  />
    return (
        <section className={styles.racks}>
            <div className="container">
                <h2>Racks</h2>
                {status==='loading'?<div className={styles.racks__spinner}>{loading}</div>:<PaginatedItems itemsPerPage={10} items={racks} />}
            </div>
        </section>
    );
};

export default Racks;

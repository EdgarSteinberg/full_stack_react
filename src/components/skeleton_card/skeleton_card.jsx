import Skeleton from 'react-loading-skeleton';
import { Card } from 'react-bootstrap';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './styles.module.css';

const SkeletonCard = () => {
    return (
        <>
            {[...Array(8)].map((_, index) => (
                <Card key={index} className={styles.skeletonCard} style={{ width: '18rem', margin: '7px' }}>
                    <div className={styles.skeletonCardBody}>
                        <Skeleton height={200} width={150} style={{ marginBottom: '10px' }} />
                        <div className={styles.skeletonText}>
                            <Skeleton height={30} width="80%" style={{ marginBottom: '5px' }} />
                            <Skeleton height={20} width="60%" />
                        </div>
                        <Skeleton height={40} width="80%" style={{ marginTop: '10px' }} />
                    </div>
                </Card>
            ))}
        </>
    );
};

export default SkeletonCard;

import HeartIcon from 'app/assets/icons/heart-icon';
import styles from './like-with-count.module.css';
import { memo } from 'react';
import { formatLikeCount } from 'app/utils';

type LikeWithCountType = {
    isActive: boolean;
    totalLikes: number;
    toggle: () => void;
};

function LikeWithCount({ isActive, totalLikes, toggle }: LikeWithCountType) {
    return (
        <div data-testid="like-count-container" className={styles.heartContainer} onClick={toggle}>
            <HeartIcon isActive={isActive} /> <p data-testid="total-like-count">{formatLikeCount(totalLikes)}</p>
        </div>
    );
}

export default memo(LikeWithCount);

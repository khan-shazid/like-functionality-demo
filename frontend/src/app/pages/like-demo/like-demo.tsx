import LikeWithCount from 'app/components/like-with-count/like-with-count';
import SetUser from 'app/components/set-user/set-user';
import useUserLikeController from 'app/hooks/user-like-controller-hook';
import styles from './like-demo.module.css';

export default function LikeDemo() {
    const {
        state: { userId, totalLikeCount, hasUserLiked },
        toggle,
        updateUser,
    } = useUserLikeController();

    return (
        <div className={styles.container}>
            <SetUser user={userId} updateUser={updateUser} />
            <LikeWithCount isActive={hasUserLiked} totalLikes={totalLikeCount} toggle={toggle} />
        </div>
    );
}

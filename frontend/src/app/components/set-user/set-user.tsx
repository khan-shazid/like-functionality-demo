import { memo, useEffect, useState } from 'react';
import styles from './set-user.module.css';

type SetUserType = {
    user: string;
    updateUser: (user: string) => void;
};

function SetUser({ user, updateUser }: SetUserType) {
    const [userId, setUserId] = useState(user);

    useEffect(() => {
        setUserId(user);
    }, [user]);
    return (
        <div className={styles.userInputContainer}>
            <input  data-testid="set-user-input" value={userId} onChange={(e) => setUserId(e.target.value)} />
            <button onClick={() => updateUser(userId)} data-testid="set-user-button">Submit</button>
        </div>
    );
}

export default memo(SetUser);

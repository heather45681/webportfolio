import React from 'react';
import styles from '../../styles/all.scss';
import { useHistory } from 'react-router-dom';


const Prev = () => {
    let history = useHistory();
    return (
        <div onClick={() => history.goBack()} className={styles.prev}>
            返回上一頁
        </div>
    );
};

export default Prev;
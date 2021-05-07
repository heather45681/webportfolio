import React from 'react';
import styles from '../../styles/all.scss';


const Banner = () => {
    return (
        <div id={styles.banner}>
            <div className={styles.name_c}>
                <p className={styles.name}>L</p>
                <p className={styles.name}>E</p>
                <p className={styles.name}>E</p>
            </div>
            <div className={styles.name_c}>
                <p className={styles.name}>Y</p>
                <p className={styles.name}>U</p>
                <p className={styles.name}>N</p>
            </div>
            <div className={styles.name_c}>
                <p className={styles.name}>L</p>
                <p className={styles.name}>I</p>
                <div className={styles.name_txt}>From <span>Taipei, Taiwan</span></div>
            </div>
            <div className={styles.n_scroll}>
                <p>SCROLL</p>
                <div className={styles.n_line}></div>   
            </div>
        </div>
    );
};

export default Banner;
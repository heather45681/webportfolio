import React from 'react';
import styles from '../../styles/all.scss';
import work01 from '../../img/img_work01.png';
import work02 from '../../img/img_work02.png';
import work03 from '../../img/img_work03.png';
import { Link } from 'react-router-dom';


const Work = () => {
    return (
        <div>
            <div className={styles.title}>
                <h2>WORKS</h2>
            </div>
            <div id={styles.work}>            
                <div className={styles.w_item}>
                    <Link to="/case01">
                        <img src={work01} alt="" className={styles.img_rwd}/>
                        <h5>國語小舖 mdnkids</h5>
                        <small>E-commerce Website</small>
                    </Link>
                </div>
                <div className={styles.w_item}>
                    <Link to="/case02">
                        <img src={work02} alt="" className={styles.img_rwd}/>
                        <h5>台灣網際網路協會 TWIA</h5>
                        <small>Organization Website</small>
                    </Link>
                </div>
                <div className={styles.w_item}>
                    <Link to="/case03">
                        <img src={work03} alt="" className={styles.img_rwd}/>
                        <h5>十方苑 Shifanginc</h5>
                        <small>Activity Website</small>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Work;
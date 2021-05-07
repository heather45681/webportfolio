import React from 'react';
import styles from '../../styles/all.scss';
import case03 from '../../img/img_case03.png';
import Prev from '../Prev';
import Contact from '../Contact';


const Case03 = () => {
    return (
        <div>
            <div className={styles.case}>
                <div className={styles.container}>
                    <div className={styles.c_info}>
                        <div className={styles.cif_block}>
                            <p className={styles.cif_title}>RWD 網站設計</p>
                            <h1>日月蛋糕 好禮二重送</h1>
                        </div>
                        <div className={styles.cif_block}>
                            <p className={styles.cif_title}>客戶</p>
                            <h5>十方苑</h5>
                        </div>
                        <div className={styles.cif_block}>
                            <p className={styles.cif_title}>主要功能</p>
                            <h5>抽獎登錄活動</h5>
                            <h5>會員系統</h5>
                        </div>
                        <div className={styles.cif_block}>
                            <p className={styles.cif_title}>負責項目</p>
                            <h6>網站整體風格設計</h6>
                            <h6>網站頁面切版</h6>
                        </div>
                        <div className={styles.cif_block}>
                            <p className={styles.cif_title}>專案說明</p>
                            <p>十方苑是一間秉持著初衷與信念的食品品牌，在這個專案中與霹靂布袋戲偶跨界合作，以累積購買新推出的日月蛋糕積分競賽為活動，期待吸引消費者目光。</p>
                            <p>因為在獎品的部分需要使用霹靂布袋戲偶的元素，因此在設計時必須遵守霹靂的品牌規範，於是以宇宙感的圖像背景與活動主標作搭配，字體選用襯線體。</p>
                            <p>一頁式的網站設計讓參加者簡單明瞭，登錄活動序號及查詢目前排名等功能。</p>
                        </div>
                    </div>
                    <div className={styles.c_img}>
                        <img src={case03} alt="" className={styles.img_rwd} />
                    </div>
                </div>
            </div>
            <Prev />
            <Contact />
        </div>
    );
};

export default Case03;
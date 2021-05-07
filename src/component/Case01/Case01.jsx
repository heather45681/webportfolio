import React from 'react';
import styles from '../../styles/all.scss';
import case01 from '../../img/img_case01.png';
import Prev from '../Prev';
import Contact from '../Contact';


const Case01 = () => {
    return (
        <div>
            <div className={styles.case}>
                <div className={styles.container}>
                    <div className={styles.c_info}>
                        <div className={styles.cif_block}>
                            <p className={styles.cif_title}>RWD 網站設計</p>
                            <h1>國語小舖</h1>
                        </div>
                        <div className={styles.cif_block}>
                            <p className={styles.cif_title}>客戶</p>
                            <h5>國語日報</h5>
                        </div>
                        <div className={styles.cif_block}>
                            <p className={styles.cif_title}>主要功能</p>
                            <h5>訂報線上數位化</h5>
                            <h5>國語小舖會員系統</h5>
                        </div>
                        <div className={styles.cif_block}>
                            <p className={styles.cif_title}>負責項目</p>
                            <h6>網站架構規劃</h6>
                            <h6>網站整體風格設計</h6>
                            <h6>網站頁面切版</h6>
                        </div>
                        <div className={styles.cif_block}>
                            <p className={styles.cif_title}>專案說明</p>
                            <p>國語日報為國內知名優良刊物，為最深入家庭與學校教育的媒體。</p>
                            <p>刊物主要讀者為國中小學生，但網站使用者為老師及家長。因此在網站元件的設計上著重於易用性：碩大的表格輸入框、顯眼的按鈕等。</p>
                            <p>網站所有內容及圖片皆為客戶自行增加，參考過去客戶網站上的元素得出風格稍微複雜的結論，也因此在網頁風格上不如一般電商網站花俏以吸引購買，保留簡潔留白讓客戶未來有發揮的空間但又不失平衡。</p>
                        </div>
                        <a href="https://shop.mdnkids.com" className={styles.cif_btn} target="blank">網站連結</a>
                    </div>
                    <div className={styles.c_img}>
                        <img src={case01} alt="" className={styles.img_rwd} />
                    </div>
                </div>
            </div>
            <Prev />
            <Contact />
        </div>
    );
};

export default Case01;
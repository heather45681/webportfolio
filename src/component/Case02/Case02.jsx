import React from 'react';
import styles from '../../styles/all.scss';
import case02 from '../../img/img_case02.png';
import Prev from '../Prev';
import Contact from '../Contact';


const Case02 = () => {
    return (
        <div>
            <div className={styles.case}>
                <div className={styles.container}>
                    <div className={styles.c_info}>
                        <div className={styles.cif_block}>
                            <p className={styles.cif_title}>RWD 網站設計</p>
                            <h1>台灣網際網路協會<br/>官方網站</h1>
                        </div>
                        <div className={styles.cif_block}>
                            <p className={styles.cif_title}>客戶</p>
                            <h5>台灣網際網路協會</h5>
                        </div>
                        <div className={styles.cif_block}>
                            <p className={styles.cif_title}>主要功能</p>
                            <h5>原有舊式網站改版</h5>
                            <h5>聯絡表單</h5>
                        </div>
                        <div className={styles.cif_block}>
                            <p className={styles.cif_title}>負責項目</p>
                            <h6>網站整體風格設計</h6>
                            <h6>網站頁面切版</h6>
                        </div>
                        <div className={styles.cif_block}>
                            <p className={styles.cif_title}>專案說明</p>
                            <p>台灣網際網路協會有鑑於網路產業的蓬勃發展與應用，於 1999 年創立。</p>
                            <p>本專案資訊架構相對單純，依照原來的網站基本上沒有太大改動，內容多為條文、法律較多篇幅的文字，因此在設計上面有比較大的自由空間。</p>
                            <p>設計時著重在文字的閱讀性，配色以深藍色為主，網際網路等元素為輔，創造出沈穩並且具有公信力的協會形象。</p>
                        </div>
                        <a href="https://www.twia.org.tw/" className={styles.cif_btn} target="blank">網站連結</a>
                    </div>
                    <div className={styles.c_img}>
                        <img src={case02} alt="" className={styles.img_rwd} />
                    </div>
                </div>
            </div>
            <Prev />
            <Contact />
        </div>
    );
};

export default Case02;
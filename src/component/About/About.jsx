import React from 'react';
import styles from '../../styles/all.scss';


const About = () => {
    return (
        <div id={styles.about}>
            <div className={styles.ab_title}>
                <h1>李&nbsp;&nbsp;&nbsp;芸&nbsp;澧</h1>
                <h3 className={styles.sf_color}>UI/UX Designer</h3>
            </div>
            <div className={styles.ab_box}>
                <div className={styles.ab_item}>
                    <div className={`${styles.ab_icon} ${styles.a1}`}></div>
                    <div className={styles.ab_con}>
                        <h4>4<span>⁺</span>Years</h4>
                        <div className={styles.ab_txt}>
                            <p className={styles.f_bold}>2011-2014</p>
                            <p>Fu Jen Catholic University</p>    
                            <p>Major in Landscape Architecture</p>
                        </div>
                        <div className={styles.ab_txt}>
                            <p className={styles.f_bold}>2015-2016</p>
                            <p>Marketing and Graphic Designer</p>    
                        </div>
                        <div className={styles.ab_txt}>
                            <p className={styles.f_bold}>2017-2019</p>
                            <p>UI/UX Designer</p>    
                        </div>
                        <div className={styles.ab_txt}>
                            <p className={styles.f_bold}>2020-2021</p>
                            <p>UI Designer</p>    
                            <p>Frontend Engineer</p>
                        </div>
                    </div>
                </div>
                <div className={styles.ab_item}>
                    <div className={`${styles.ab_icon} ${styles.a2}`}></div>
                    <div className={styles.ab_con}>
                        <h4>40<span>⁺</span>Projects</h4>
                        <div className={styles.ab_txt}>
                            <p><span className={styles.f_bold}>30+</span> RWD website</p>
                        </div>
                        <div className={styles.ab_txt}>
                            <p><span className={styles.f_bold}>3+</span> APP</p>
                        </div>
                        <div className={styles.ab_txt}>
                            <p><span className={styles.f_bold}>5+</span> UI/UX provement</p>
                        </div>
                    </div>
                </div>
                <div className={styles.ab_item}>
                    <div className={`${styles.ab_icon} ${styles.a3}`}></div>
                    <div className={styles.ab_con}>
                        <h4>5<span>⁺</span>Skills</h4>
                        <div className={styles.ab_txt}>
                            <p className={styles.f_bold}>JLPT N2 / TOEIC 735</p>
                        </div>
                        <div className={styles.ab_txt}>
                            <p className={styles.f_bold}>Mac user</p>
                        </div>
                        <div className={styles.ab_txt}>
                            <p className={styles.f_bold}>UI / UX Design</p>
                            <p>Figma / Adobe XD</p>
                        </div>
                        <div className={styles.ab_txt}>
                            <p className={styles.f_bold}>Images</p>
                            <p>Adobe Photoshop / Illustrator</p>
                        </div>
                        <div className={styles.ab_txt}>
                            <p className={styles.f_bold}>Website</p>
                            <p>HTML5 / CSS3 / SCSS</p>
                            <p>javascript / React.js</p>
                            <p>Webpack / Git</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
import React from 'react';
import styles from '../../styles/all.scss';


const Contact = () => {
    return (
        <a href="mailto:heather45681@gmail.com" id={styles.contact} target="blank">
            <div>
                <h4>Hire Me for Your Project.</h4>
                <small>If you have interests for more information of me,
                    please contact by E-mail.</small>
            </div>
            <div class={styles.c_btn}>
                <p>CONTACT</p>
            </div>
        </a>
    );
};

export default Contact;
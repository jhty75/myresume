import styles from '../styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpaceAwesome } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.title}>
                <p>© 2023 - Made by <a href='mailto:jhuguespam@gmail.com' className={styles.jhpLink}>JHP</a> <FontAwesomeIcon icon={faSpaceAwesome} style={{color :"white", transform: 'rotate(30deg)', marginLeft: '5px'}}/> </p>
            </div>
        </div>
    )
}

export default Footer;
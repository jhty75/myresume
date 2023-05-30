import styles from '../styles/Footer.module.css';

function Footer() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.title}>
                <p>© 2023 - Made by <a href='mailto:jhuguespam@gmail.com' className={styles.jhpLink}>JHP</a></p>
            </div>
        </div>
    )
}

export default Footer;
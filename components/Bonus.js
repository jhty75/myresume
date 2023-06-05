import styles from '../styles/Bonus.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';




function Bonus() {
    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.mainTitle}>Et aussi...</h1>
            <div>
                <h3 className={styles.bonusTitle}>Dreamweaver, Google Analytics, Certfication Google Digital Active
                </h3>
            </div>

            <div>
                <div className={styles.flexbox}>
                    <h3 className={styles.bonusTitle}> Créativité, auteur, compositeur, interprète membre de la SACEM </h3>
                    <a href='https://open.spotify.com/artist/18d22cjC2eWLDsJ7f2sVAr'><FontAwesomeIcon icon={faSpotify} className={styles.iconStyle} /></a>
                </div>

                <h3 className={styles.bonusTitle}>Sociétaire de l'ADAGP (Société des Auteurs dans les Arts Graphiques et Plastiques)</h3>
            </div>

        </div>
    )
}

export default Bonus;
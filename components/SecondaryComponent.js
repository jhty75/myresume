import styles from '../styles/SecondaryComponent.module.css';
import { faJediOrder } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SecondaryComponent({ LinkedinText, linkedinLink }) {
    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.mainTitle}>Missions en tant que Jedi <FontAwesomeIcon icon={faJediOrder} style={{paddingLeft: "5px"}}/> </h1>
            <p className={styles.usedTechText}><strong>Technologies utilisées :</strong> React JS, Express, Node.JS, MongoDB, JavaScript, HTML, CSS, Redux.</p>

            <div className={styles.parentImagesContainer}>
                <div>
                    <a href='https://newmorningfrontexo-9m5438ye4-jhty75.vercel.app/'>
                        <img src='MorningNewsExo.png' className={styles.imageExo} />
                    </a>
                </div>
                <div>
                    <a href="https://mymovizfrontendexo.vercel.app/">
                        <img src='MyMovizExo.png' className={styles.imageExo} />
                    </a>
                </div>
            </div>
            <p className={styles.text}>Consultez mes projets sur GitHub</p>
            <button className={styles.btnLinkedin}><a href={linkedinLink} className={styles.LinkedinText}>{LinkedinText}</a>
            </button>

        </div>
    )
}

export default SecondaryComponent;
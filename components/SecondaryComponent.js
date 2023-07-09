import styles from '../styles/SecondaryComponent.module.css';
import { faJediOrder } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SecondaryComponent({ LinkedinText, linkedinLink }) {
    return (
        <div className={styles.mainContainer}>
            <div>
            <h1 className={styles.mainTitle}>Missions en tant que Jedi <FontAwesomeIcon icon={faJediOrder} style={{paddingLeft: "5px"}}/> </h1>
            <h2 className={styles.usedTechText}><strong>Applications Web:</strong></h2>
            <p className={styles.usedTechText}><strong>Technologies utilisées :</strong> React JS, Express, Node.JS, MongoDB, JavaScript, Redux, Vercel.</p>
            </div>
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
            <div>
            <h2 className={styles.usedTechText} style={{marginTop:"60px"}}><strong>Application Mobile:</strong></h2>
            <p className={styles.usedTechText} style={{marginTop:"40px"}}><strong>Technologies utilisées :</strong> React Native, Express, Node.JS, MongoDB, JavaScript, HTML, CSS, Redux, Cloudinary, Expo Go, Vercel.</p>
                    <a href="https://drive.google.com/file/d/10kXGmU8LvfMG5r7nnLF18qlUn7R1azva/view?usp=sharing">
                        <img src="PlanitApp.png" className={styles.imageExo} style={{width: '15%'}} />
                    </a>
            </div>
            <p className={styles.text}>Consultez mes projets sur GitHub</p>
            <button className={styles.btnLinkedin}><a href={linkedinLink} className={styles.LinkedinText}>{LinkedinText}</a>
            </button>

        </div>
    )
}

export default SecondaryComponent;
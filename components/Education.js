import styles from '../styles/Education.module.css';

function Education() {
    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.mainTitle}>Le réveil de la Force</h1>
            <div>
                <h3 className={styles.diplomaTitle}>Diplôme professionnel Chef de projet développement d'applications Web & Mobile (BAC+3/4) </h3>
            </div>
            <p className={styles.EducationPlaces}>2023 La Capsule, à Paris | Développeur Web & Mobile JavaScript Full Stack 
            </p>
            <div>
                <h3 className={styles.diplomaTitle}>Master 2 Communication Rédactionnelle et Mutimédia
                </h3>
            </div>
            <p className={styles.EducationPlaces}> 2007 Université  Paris X | Gestion de projet mutlimédia
            </p>
        </div>
    )
}

export default Education;
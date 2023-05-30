import styles from '../styles/Education.module.css';

function Education() {
    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.mainTitle}>Formation</h1>
            <div>
                <h3 className={styles.diplomaTitle}>Chef de projet développement d'applications web & Mobile</h3>
            </div>
            <p className={styles.EducationPlaces}>2023 La Capsule, à Paris | Développeur Full Stack JavaScript | Projet de fin de batch : co-développement de l’application
                Mobile d’organisation de voyages entre ami(e)s : PlanIt (React Native)
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
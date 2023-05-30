import styles from '../styles/Content.module.css';
import SecondaryComponent from './SecondaryComponent';


function Content ({className, title, text, text2, text3, text4, text5, text6, LinkedinText, linkedinLink}) {
    const contentClassName = `${styles.mainContentContainer} ${className} ${className === styles.projectsTab ? styles.projectsTab : ''}`;

    return (
        <div className={contentClassName}>
        <h1 className={styles.mainTitle}>{title}</h1>
        <p className={styles.ContentText}>{text}</p>
        <p className={styles.ContentText}>{text2}</p>
        <p className={styles.ContentText}>{text3}</p>
        <p className={styles.ContentText}>{text4}</p>
        <p className={styles.ContentText}>{text5}</p>
        <p className={styles.ContentText}>{text6}</p>
        <button className={styles.btnLinkedin}><a href={linkedinLink}className={styles.LinkedinText}>{LinkedinText}</a>
        </button>
      

      
     
    </div>

    );
}

export default Content;
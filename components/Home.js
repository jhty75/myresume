import styles from '../styles/Home.module.css';
import Content from './Content';
import SecondaryComponent from './SecondaryComponent';
import ProExperience from './ProExperience';
import Education from './Education';
import Bonus from './Bonus';
import Footer from './Footer';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSpotify } from '@fortawesome/free-brands-svg-icons';


function Home() {
  return (
      <main className={styles.main}>
        <div className={styles.titleWrapper} >
        <h1 className={styles.title}>Jean-Hugues </h1>
        <h1 className={styles.title2}>Pam</h1>
        <p className={styles.text}>Développeur full stack React JS | React Native |</p>
        <p className={styles.text}>Spécialiste communication digitale.</p>
        <button className={styles.btn}><a href='mailto:jhuguespam@gmail.com'className={styles.mailto}>Email Me</a></button>
        </div >
        <div className={styles.picContainer}>
        <img src='TyeCeePic.jpg' alt='Photographie de JH' className={styles.mainPicture} />
        </div>
        <Content className={styles.content} title='Compétences Professionnelles' text='Création, développement & coordination de projets digitaux : applications web & mobiles, e-magazines, e-mailing responsives. JavaScript, TypeScript,' 
        text2='Node.JS, HTML, CSS, React JS, React Native, Express, Redux, MongoDB, Git, Git Hub, VS Code'
        text3='Graphisme et PAO : Photoshop, Illustrator, InDesign, Figma, Excalidraw.'
        text4='Montage video : Premiere Pro, After Effects, iMovie'
        text5='Définition et mise en oeuvre de stratégies de communication digitale à destination d’audiences'
        text6='ciblées, communication de crise, animation de réseaux sociaux.'
        LinkedinText='Linkedin'
        linkedinLink='https://www.linkedin.com/in/jean-hugues-pam/'
        />
        <SecondaryComponent className={styles.SecondaryComponent} title='Mes Projets' text='Consultez mes projets sur GitHub' LinkedinText='GitHub' linkedinLink='https://github.com/jhty75' />
        <ProExperience className={styles.ProExperience} />
        <Education />
        <Bonus />
        <Footer />
      </main>

  );
}

export default Home;

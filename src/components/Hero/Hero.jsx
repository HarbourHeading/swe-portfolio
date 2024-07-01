import styles from "./Hero.module.css";
import {getImageUrl} from "../../utils";

export const Hero = () => {

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I&apos;m Liam</h1>
                <p className={styles.description}>
                    I am an ICT graduate and Software Engineer with five years of experience in the tech industry,
                    primarily working with Python.
                </p>
                <div className={styles.sub}>
                    <a href="mailto:liam.e.swe@gmail.com" className={styles.contactBtn}>
                        Contact Me
                    </a>
                    <a aria-label="Github link" target="_blank" rel="noopener noreferrer" href="https://www.github.com/HarbourHeading">
                        <img src={getImageUrl("contact/github.png")}
                             alt="github icon"
                             className={styles.subIcons}
                        />
                    </a>
                    <a aria-label="Linkedin link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/Liam-e-swe">
                        <img src={getImageUrl("contact/linkedin.png")}
                             alt="linkedin icon"
                             className={styles.subIcons}
                        />
                    </a>
                </div>
            </div>
            <img src={getImageUrl("hero/portrait.jpg")}
                 alt="Portrait of me"
                 className={styles.heroImg}
            />
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    );
};

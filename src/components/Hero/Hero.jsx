import styles from "./Hero.module.css";
import {getImageUrl} from "../../utils";

export const Hero = () => {

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I&apos;m Liam.</h1>
                <p className={styles.description}>
                    I&apos;m a Software Engineer with 4 years of experience in the tech field, mainly using Java and
                    Python.
                    Reach out if you&apos;d like to learn more!
                </p>
                <div className={styles.sub}>
                    <a href="mailto:liam.a.ek05@gmail.com" className={styles.contactBtn}>
                        Contact Me
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/HarbourHeading">
                        <img
                            src={getImageUrl("contact/githubIcon.png")}
                            alt="github icon"
                            className={styles.subIcons}
                        />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/Liam-ek">
                        <img

                            src={getImageUrl("contact/linkedinIcon.png")}
                            alt="linkedin icon"
                            className={styles.subIcons}
                        />
                    </a>
                </div>
            </div>
            <img
                src={getImageUrl("hero/heroImage.png")}
                alt="Portrait of me"
                className={styles.heroImg}
            />
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    );
};

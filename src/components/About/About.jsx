import styles from "./About.module.css";
import {getImageUrl} from "../../utils.js";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/ui.png")} alt="UI icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Software Developer</h3>
                            <p>
                                2 years of experience developing secure, effective and maintainable software
                                applications.
                                Proficient in using Git for progress tracking and efficient code management.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/server.png")} alt="Server icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>System Administrator</h3>
                            <p>
                                Managed and maintained a game VPS on Linux systems, serving up to 500 members.
                                Integrated user feedback and implemented new technologies, improving performance by 40%
                                from factory settings.
                                Performed over a span of 3 years.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursor.png")} alt="Cursor icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>
                                Built responsive, optimized websites using the latest technologies, such as Vite and
                                react.
                                Focused on creating user-friendly and visually appealing designs (like this one!)
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

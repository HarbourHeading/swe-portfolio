import styles from "./Contact.module.css";
import {getImageUrl} from "../../utils";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <a href="mailto:liam.e.swe@gmail.com">
                        <img src={getImageUrl("contact/email.png")} alt="Email icon"/>
                        <p>liam.e.swe@gmail.com</p>
                    </a>
                </li>

                <li className={styles.link}>
                    <a target="_blank"
                       rel="noopener noreferrer"
                       aria-label="Link to my linkedin"
                       href="https://www.linkedin.com/in/Liam-e-swe">
                        <img src={getImageUrl("contact/linkedin.png")} alt="LinkedIn icon"/>
                        <p>https://linkedin.com/in/liam-e-swe</p>
                    </a>
                </li>

                <li className={styles.link}>
                    <a target="_blank"
                       rel="noopener noreferrer"
                       aria-label="Link to my github"
                       href="https://www.github.com/HarbourHeading">
                        <img src={getImageUrl("contact/github.png")} alt="Github icon"/>
                        <p>https://github.com/HarbourHeading</p>
                    </a>
                </li>
            </ul>
        </footer>
    )
        ;
};

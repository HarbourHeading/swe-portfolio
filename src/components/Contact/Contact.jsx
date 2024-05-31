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
                    <img src={getImageUrl("contact/email.png")} alt="Email icon"/>
                    <a href="mailto:liam.a.ek05@gmail.com">liam.a.ek05@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedin.png")} alt="LinkedIn icon"/>
                    <a target="_blank"
                       rel="noopener noreferrer"
                       aria-label="Link to my linkedin"
                       href="https://www.linkedin.com/in/Liam-ek">https://linkedin.com/in/liam-ek
                    </a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/github.png")} alt="Github icon"/>
                    <a target="_blank"
                       rel="noopener noreferrer"
                       aria-label="Link to my github"
                       href="https://www.github.com/HarbourHeading">https://github.com/HarbourHeading
                    </a>
                </li>
            </ul>
        </footer>
    );
};

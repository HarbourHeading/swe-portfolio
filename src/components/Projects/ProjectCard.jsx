import styles from "./ProjectCard.module.css";
import {getImageUrl} from "../../utils";
import PropTypes from "prop-types";

export const ProjectCard = ({project: {title, imageSrc, description, skills, source},}) => {


    return (
        <div className={styles.card}>
            <div>
                <img
                    src={getImageUrl("projects/file.png")}
                    alt="File"
                    className={styles.image_file}/>

                <a href={source} aria-label="Github link" target="_blank" rel="noopener noreferrer">
                    <img
                        src={getImageUrl(imageSrc)}
                        alt="Github"
                        className={styles.image_github}
                    />
                </a>
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id) => {
                    return (
                        <li key={id} className={styles.skill}>
                            {skill}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        skills: PropTypes.arrayOf(PropTypes.string).isRequired,
        source: PropTypes.string.isRequired,
    }).isRequired,
};
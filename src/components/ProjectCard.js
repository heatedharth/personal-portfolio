import styles from "../styles/ProjectCard.module.css";

export default function ProjectCard({ title, description, image, link }) {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} />
            <div className={styles.content}>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    View Project →
                </a>
            </div>
        </div>
    );
}
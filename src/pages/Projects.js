import ProjectCard from "../components/ProjectCard";
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";
import styles from "../styles/Projects.module.css";


export default function Projects() {
    const projects = [
        {
            title: "Survey",
            description: "A simple survey with validation and radio buttons, using Javascript.",
            image: proj1,
            link: "https://students.gaim.ucf.edu/~am170333/dig3716c/assignment2/survey.html",
        },
        {
            title: "Survey Form",
            description: "A simple survey, like the last project, but using PHP and cookies instead.",
            image: proj2,
            link: "https://students.gaim.ucf.edu/~am170333/dig3134c/assignment02/assignment02-part1/form_all.php",
        },
        {
            title: "Game Review CMS",
            description: "PHP and MySQL-based content management system for game reviews (Please don't actually delete or add a review to the site).",
            image: proj3,
            link: "https://students.gaim.ucf.edu/~am170333/dig3134c/assignment05/login.php",
        },
    ];

    return (
        <div className={styles.projectsContainer}>
            <h2 className={styles.heading}>Projects</h2>
            <div className={styles.grid}>
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} {...project} />
                ))}
            </div>
        </div>
    );
}

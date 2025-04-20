import styles from "../styles/About.module.css";

export default function About() {
    return (
        <div className={styles.container}>
            <h2>About Me</h2>
            <p>I'm Amy Nguyen, a student at UCF currently working towards a degree in Digital Media. I am relatively new to coding, so this is my first time making an entire portfolio on my own.</p>
            <h3>Skills</h3>
            <ul>
                <li>JavaScript</li>
                <li>PHP</li>
                <li>HTML5</li>
                <li>CSS</li>
            </ul>
            <h3>Interests</h3>
            <p>In my spare time, I enjoy gaming and the arts. I typically enjoy indie games of varying genres from cozy to surreal. The type of art I create is digital art on Procreate, making fanart of my current interests.</p>
        </div>
    );
}
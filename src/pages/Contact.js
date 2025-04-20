import { useState } from "react";
import styles from "../styles/Contact.module.css";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required.";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid.";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required.";
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // Submit the form or do something
            alert("Message sent!");
            setFormData({ name: "", email: "", message: "" });
        }
    };

    return (
        <div className={styles.contactContainer}>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p className={styles.error}>{errors.name}</p>}
                </div>

                <div className={styles.formGroup}>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className={styles.error}>{errors.email}</p>}
                </div>

                <div className={styles.formGroup}>
                    <label>Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                    {errors.message && <p className={styles.error}>{errors.message}</p>}
                </div>

                <button type="submit">Send</button>
            </form>

            <div className={styles.reachOut}>
                <h2>Reach Out to Me</h2>
                <div className={styles.socialLinks}>
                    <a href="https://github.com/heatedharth">GitHub</a>
                    <a href="https://www.linkedin.com/in/amy-nguyen-8124b3239/">LinkedIn</a>
                    <a href="mailto:am170333@ucf.edu">Email</a>
                </div>
            </div>
        </div>
    );
}

import labelLinks from "./const"
import FooterLink from "@components/footer-link/FooterLink";
import styles from "./styles.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <ul className={styles.listLinks}>
                    {labelLinks.map(link => <FooterLink key={link} label={link}/>)}
                </ul>
                <span style={{color: "#018EB9"}}>© 2025 BAIKALSEA Company</span>
            </div>
        </footer>
    );
};

export default Footer;
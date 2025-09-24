import linkIcon from "@assets/icons/link-icon.svg"
import styles from "@components/footer/styles.module.css"
import { Link } from "react-router-dom";

interface IFooterLinkProps {
    label: string;
}

const FooterLink = ({ label }: IFooterLinkProps) => {
    return (
        <li className={styles.listItem}>
            <Link to="/">
                <img src={linkIcon} alt="ссылка" />
                <span>{label}</span>
            </Link>
        </li>
    );
};

export default FooterLink;
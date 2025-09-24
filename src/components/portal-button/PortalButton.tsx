import earthIcon from "@assets/icons/earth-icon.svg"
import styles from "./styles.module.css"

const PortalButton = () => {
    return (
        <a className={styles.portalButton} href="https://nash-baikal.ru/" target="_blank" rel="noreferrer">
            <img width={32} height={32} src={earthIcon} alt="иконка глобуса" />
            <h3>nash-baikal.ru</h3>
        </a>
    );
};

export default PortalButton;
import styles from "./styles.module.css"
import PortalButton from "@components/portal-button/PortalButton.tsx";

const Portal = () => {
    return (
        <section className={styles.portal}>
            <div className={styles.container}>
                <h2>Подробная информация о продукции представлена на портале</h2>
                <PortalButton />
            </div>
        </section>
    );
};

export default Portal;
import styles from "./styles.module.css"
import { bottlesMocks, listPolicy } from "./const"
import ProductionCard from "@components/production-card/ProductionCard";

const Production = () => {
    return (
        <section className={styles.prod}>
            <div className={styles.container}>
                <article className={styles.saleCard}>
                    {bottlesMocks.map(bottle => <ProductionCard key={bottle.volume} {...bottle} />)}
                </article>
                <div className={styles.contacts}>
                    <div>
                        <h2>Задать вопрос по почте</h2>
                        <a href="mailto:112@baikal-sea.com">112@baikal-sea.com</a>
                    </div>
                    <div>
                        <h2>Горячая линия</h2>
                        <a href="tel:88003331616">8 800 333-16-16</a>
                    </div>
                    <div>
                        <h3 style={{paddingBottom: "8px"}}>Политика обработки персональных данных</h3>
                        <ul className={styles.policyList}>
                            {listPolicy.map(policy => (
                                <li key={policy} className={styles.policyItem}>{policy}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Production;
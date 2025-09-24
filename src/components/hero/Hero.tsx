import styles from "./styles.module.css"
import heroBottleIcon from "@assets/bg/hero_bottle.png"

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.bottleHero}>
                <img width={378} height={850} src={heroBottleIcon} alt="новая упаковка" />
            </div>
            <div className={styles.news}>
                <span className={styles.newsTitle}>Новости</span>
                <span>Важные изменения в маркировке упакованной воды</span>
            </div>
        </section>
    );
};

export default Hero;
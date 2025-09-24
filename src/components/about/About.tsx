import styles from "./style.module.css"
import aboutMocks from "./const.ts"
import AboutAchievementCard from "@components/about-achievement-card/AboutAchievementCard.tsx";

const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <div className={styles.leftText}>
                    <h2>Мы заботимся о Вашем здоровье, доставляя Вам
                        чистейшую байкальскую воду и сохраняя озеро Байкал</h2>
                    <p>Являясь производителем национальных брендов воды, наша компания выступает
                        за сохранение уникальной природы Байкала. Производство спланировано и размещено
                        таким образом, чтобы не наносить природе никакого</p>
                </div>
                <div className={styles.aboutAchievements}>
                    {aboutMocks.map((about) => <AboutAchievementCard key={about.icon} {...about} />)}
                </div>
            </div>
        </section>
    );
};

export default About;
import styles from "./style.module.css"

interface IAboutAchievementCardProps {
    icon: string;
    text: string;
}

const AboutAchievementCard = ({ icon, text }: IAboutAchievementCardProps) => {
    return (
        <article className={styles.aboutArticle}>
            <img width={56} height={56} src={icon} alt="иконка" />
            <p>{text}</p>
        </article>
    );
};

export default AboutAchievementCard;
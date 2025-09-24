import styles from "@components/production/styles.module.css"

interface IProductionCardProps {
    icon: string;
    volume: string;
}

const ProductionCard = ({ icon, volume }: IProductionCardProps) => {
    return (
        <div className={styles.prodCard}>
            <img src={icon} alt="товар" />
            <span>{volume} л</span>
        </div>
    );
};

export default ProductionCard;
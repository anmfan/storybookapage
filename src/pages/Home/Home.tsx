import Hero from "@components/hero/Hero";
import About from "@components/about/About";
import Portal from "@components/portal/Portal";
import Footer from "@components/footer/Footer";
import Production from "@components/production/Production";

import styles from "./styles.module.css"

const Home = () => {
    return (
        <div className={styles.wrapper}>
            <Hero />
            <About />
            <Portal />
            <div className={styles.productionWrapper}>
                <Production />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
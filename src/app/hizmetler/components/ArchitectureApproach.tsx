import styles from "./ArchitectureApproach.module.css";

const ArchitectureApproach = () => {
    return (
        <section className={styles.section}>

            <div className={styles.container}>

                <div className={styles.content}>

                    <span className={styles.eyebrow}>
                        YAKLAŞIMIMIZ
                    </span>

                    <h2>
                        Mimariyle
                        <br />
                        birlikte tasarlıyoruz.
                    </h2>

                    <p>
                        Havuzu yapının sonradan eklenen bir parçası
                        olarak değil, mimari projenin doğal bir
                        parçası olarak ele alıyoruz.
                    </p>

                    <div className={styles.points}>

                        <div>
                            <strong>01</strong>
                            <span>Estetik bütünlük</span>
                        </div>

                        <div>
                            <strong>02</strong>
                            <span>Teknik entegrasyon</span>
                        </div>

                        <div>
                            <strong>03</strong>
                            <span>Uzun ömürlü sistemler</span>
                        </div>

                    </div>

                </div>


                <div className={styles.imageContainer}>
                    <img
                        src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85"
                        alt="Mimari havuz projesi"
                    />
                </div>

            </div>

        </section>
    );
};

export default ArchitectureApproach;

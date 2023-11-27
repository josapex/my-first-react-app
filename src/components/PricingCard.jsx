import Styles from "./PricingCard.module.css";

function PricingCard({
        label,
        price,
        duration = "",
        image,
        imageAlt,
        benefits
    }) {

    return (
        <div className={Styles.card}>
            <div className={Styles.card_wrapper}>
                <span className={Styles.card_label}>{label}</span>
                <div >
                    <img src={image} alt={imageAlt} className={Styles.card_image} />
                </div>
                <div className={Styles.card_price_container}>
                    <span className={Styles.card_price}>{price}</span>
                    <span className={Styles.card_duration}> {duration}</span>
                </div>
                <span className={Styles["card_benefit-label"]}>Everything in Free, Plus</span>
                <ul className={Styles.card_benefits}>
                    {benefits.map(benefit => {
                        return(
                            <li key={label} className={Styles.card_benefit}><img src="images/icon/check.png" alt="" className={Styles["card_benefit-icon"]} />{benefit}</li>
                        )
                    })}
                </ul>
                <button className={Styles.card_button}>CHOOSE</button>
            </div>
        </div>
    );
}

export default PricingCard;

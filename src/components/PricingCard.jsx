import Styles from "./PricingCard.module.css";
import Button from "./Button/Button";

function PricingCard({
        label,
        price,
        duration = "",
        image,
        imageAlt,
        benefits
    }) {
        
    const themeClasses = {
        "Start-UP": Styles["card--startup"],
        "Pro": Styles["card--pro"],
        "Enterprise": Styles["card--enterprise"],
    }

    const themeClass = themeClasses[label]

    return (
        <div className={`${Styles.card} ${themeClass}`}>
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
                <Button className={Styles.card_button}>CHOOSE</Button>
            </div>
        </div>
    );
}

export default PricingCard;

import Styles from "./PricingCard.module.css";
import Button from "./Button/Button";
import PropTypes from 'prop-types'

function PricingCard({card}) {
        
    const themeClasses = {
        "Start-UP": Styles["card--startup"],
        "Pro": Styles["card--pro"],
        "Enterprise": Styles["card--enterprise"],
    }

    const {label, price, duration, image, imageAlt, benefits,} = card

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
                    {benefits.map((benefit) => {
                        return(
                            <li key={benefit} className={Styles.card_benefit}><img src="images/icon/check.png" alt="" className={Styles["card_benefit-icon"]} />{benefit}</li>
                        )
                    })}
                </ul>
                <Button className={Styles.card_button}>CHOOSE</Button>
            </div>
        </div>
    );
}

PricingCard.propTypes = {
    card: PropTypes.exact({
        label: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        duration: PropTypes.string,
        image: PropTypes.string.isRequired,
        imageAlt: PropTypes.string.isRequired,
        benefits: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
}

export default PricingCard;

import Styles from "./App.module.css";
import PricingCard from "./components/PricingCard";

function App() {
    const cards = [
    {
        label: "Start-UP",
        price: "Free",
        image: "images/bicycle.png",
        imageAlt: "Moving bike",
        benefits: [
            "Unlimited Downloads",
            "Email Support",
            "Limited Access",
        ],
    }, {
        label: "Pro",
        price: "49$",
        duration: "/year",
        image: "images/car.png",
        imageAlt: "Moving car",
        benefits: [
            "Upto 10 Users",
            "Email Support, Call Support",
            "1 Year Access",
        ],
    }, {
        label: "Enterprise",
        price: "99$",
        image: "images/airplane.png",
        imageAlt: "Moving plane",
        benefits: [
            "Unlimited Access",
            "On demand request",
            "Lifetime Access",
        ],
    },
    ]
    return(
        <div>
            <div className={Styles.bg}>
                <h1 className={Styles.header}>Choose your plane</h1>
                <p className={Styles.discription}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At veritatis mollitia omnis iure qui? Ratione earum</p>
            </div>
            <div className={Styles.main}>
                {cards.map((card) => {
                    return(
                        <PricingCard 
                            card={card}
                            key={card.label}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default App;

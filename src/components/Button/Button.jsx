import Styles from "./Button.module.css"

function Button({className, children}) {
    return(
        <button className={`${Styles.button} ${className}`}>{children}</button>
    )
}

export default Button
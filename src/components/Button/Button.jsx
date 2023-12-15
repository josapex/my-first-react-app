import Styles from "./Button.module.css";
import PropTypes from 'prop-types';

function Button({className, children, whenButtonIsClick}) {
    return(
        <button onClick={whenButtonIsClick} className={`${Styles.button} ${className}`}>
            {children}
        </button>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    whenButtonIsClick: PropTypes.func.isRequired
}

export default Button
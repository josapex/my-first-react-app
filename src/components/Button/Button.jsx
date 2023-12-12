import Styles from "./Button.module.css";
import PropTypes from 'prop-types';

function Button({className, children}) {
    return(
        <button className={`${Styles.button} ${className}`}>{children}</button>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired 
}

export default Button
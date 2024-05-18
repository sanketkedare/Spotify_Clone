import PropTypes from 'prop-types';


const Button = ({children, primaryColor, background, borderColor}) => {
    const buttonStyles = {
        color: primaryColor,
        backgroundColor: background,
        border: `1px solid ${borderColor}`
    }
  return (
    <button style={buttonStyles} className="rounded-full px-2 py-1">{children}</button>
  )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    primaryColor: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    borderColor: PropTypes.string.isRequired
};

export default Button

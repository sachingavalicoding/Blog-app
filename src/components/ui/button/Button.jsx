
// eslint-disable-next-line react/prop-types
const Button = ({ text, className }) => {
    return (
        <button type="button" className={` btn  ${className} `}> {text} </button>
    )
}

export default Button
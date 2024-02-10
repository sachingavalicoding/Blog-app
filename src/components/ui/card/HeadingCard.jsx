

// eslint-disable-next-line react/prop-types
const HeadingCard = ({ heading, subheading, content }) => {
    return (
        <div className="card__heading__container">
            <h4> {subheading} </h4>
            <h2> {heading} </h2>
            <p> {content} </p>
        </div>
    )
}

export default HeadingCard
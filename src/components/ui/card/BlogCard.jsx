
import './card.css'
// eslint-disable-next-line react/prop-types
const BlogCard = ({ image, heading, content, buttontext }) => {
    return (
        <div className="card__container "
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className='card__content'>
                <h3> {heading} </h3>
                <p> {content} </p>
                <button className="btn"> {buttontext ? buttontext : " Read More "} </button>
            </div>
        </div>
    )
}

export default BlogCard
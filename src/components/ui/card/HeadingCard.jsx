import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const HeadingCard = ({ heading, subheading, content, path }) => {
  return (
    <div className="card__heading__container">
      <h4> {subheading} </h4>
      <h2> {heading} </h2>
      <p> {content} </p>
      <button className="btn ">
        <Link to={path}> Read more </Link>
      </button>
    </div>
  );
};

export default HeadingCard;

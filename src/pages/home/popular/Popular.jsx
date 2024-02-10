import HeadingCard from "../../../components/ui/card/HeadingCard";
import "../home.css";
// eslint-disable-next-line react/prop-types
const Popular = ({ image, heading, subheading, content }) => {
  return (
    <div className="popular__lg-container">
      <div className=" container popular__container ">
        <img src={image} alt="not found " />
        <HeadingCard
          path={"/blogs"}
          heading={heading}
          subheading={subheading}
          content={content}
        />
      </div>
    </div>
  );
};

export default Popular;

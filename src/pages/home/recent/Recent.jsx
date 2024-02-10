import BlogCard from "../../../components/ui/card/BlogCard";
import HeadingCard from "../../../components/ui/card/HeadingCard";

import "../home.css";
const Recent = () => {
  return (
    <section className="recent__section">
      <div className="container recent__container">
        <div className="recent__content">
          <HeadingCard
            path={"blogs"}
            heading={"Welcome to Computer Science Blogs"}
            subheading={"Coding ERA "}
            content={
              "Dive into the latest JavaScript trends! Our recent blog explores ECMAScript 2022 proposals, showcasing features like optional chaining and nullish coalescing. Learn how these enhancements streamline code and improve developer productivity. Stay on the cutting edge of JavaScript development, unlocking new possibilities for efficient and elegant coding."
            }
          />
        </div>
        <div className="recent__images">
          <BlogCard
            image={"./assets/coding/slide1.jpg"}
            buttontext={"Check More "}
          />
          <BlogCard
            image={"./assets/coding/slide2.jpg"}
            buttontext={"Check More "}
          />
        </div>
      </div>
    </section>
  );
};

export default Recent;

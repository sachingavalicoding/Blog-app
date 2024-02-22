import { IoSearchSharp } from "react-icons/io5";
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa6";
import "./blog.css";
import { useState, useEffect } from "react";
import { databases } from "../../server/appwrite";
const BlogLayout = () => {
  const [search, setSearch] = useState("");
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);
  // Function to fetch blog data from Appwrite
  const fetchBlogs = async () => {
    try {
      // Replace 'YOUR_COLLECTION_ID' with the actual collection ID where your blogs are stored in Appwrite
      const documents = await databases.listDocuments(
        "65c550a5cf78fda2ccfe",
        "65c550b5bf7a160dfdce"
      );

      setBlogs(documents.documents);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  // useEffect to fetch blogs when the component mounts
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <div className="blog__container">
        <div className="blog__inputbox">
          <input
            type="text"
            placeholder="Which one You like to see....."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <IoSearchSharp />
        </div>
        <div className="blog__filter">
          <button className=" btn light-btn"> Computer Science </button>
          <button className=" btn light-btn"> Web Development </button>
          <button className=" btn light-btn"> App Development </button>
          <button className=" btn light-btn"> Mathematics </button>
          <button className=" btn light-btn"> Data Science </button>
        </div>

        <ul className="blog__wrapper">
          {blogs.map(
            ({ id, title, subheading, author, likes, comments, image }) => {
              return (
                <li key={id} className="post">
                  <img src={image} alt="post" />
                  <div className="post__content">
                    <h3> {author} </h3>
                    <h2> {title} </h2>
                    <p> {subheading} </p>
                    <div className="btn__container">
                      <button className="btn"> Read More </button>
                      <div className="likes">
                        <p>
                          {" "}
                          <AiFillLike className="red" /> {likes}{" "}
                        </p>
                        <p>
                          {" "}
                          <FaComment /> {comments}{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </>
  );
};

export default BlogLayout;

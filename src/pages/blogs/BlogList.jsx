import { useEffect, useState } from 'react';
import { databases } from '../../server/appwrite';

const BlogList = () => {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        // Fetch blog posts from Appwrite when the component mounts
        fetchBlogPosts();
    }, []);

    const fetchBlogPosts = async () => {
        try {
            // Replace 'blogPostsCollectionId' with the actual ID of your blog posts collection
            const response = await databases.listDocuments("65c550a5cf78fda2ccfe", "65c550b5bf7a160dfdce");

            // Update the state with the fetched blog posts
            setBlogPosts(response.documents);
        } catch (error) {
            console.error('Error fetching blog posts:', error);
        }
    };

    return (
        <div>
            <h2>Blog Posts</h2>
            {blogPosts.map((post) => (
                <div key={post.$id}>
                    <h3>{post.title}</h3>
                    <p>Author: {post.author}</p>
                    <p>{post.content}</p>
                    {post.image && (
                        <img
                            src={`https://cloud.appwrite.io/v1/storage/buckets/{"65c551d32bbbc22f5dab"}files/${post.image}/preview`}
                            alt="Blog Post"
                        />
                    )}
                    <p>Public: {post.isPublic ? 'Yes' : 'No'}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default BlogList;

import { useState } from 'react';
import { databases, storeage } from '../../server/appwrite';
import { ID } from 'appwrite';

const BlogForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [is_public, setIsPublic] = useState(false);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const fileResponse = await storeage.createFile('65c551d32bbbc22f5dab', ID.unique(), image);

            // Create blog post document
            const blogData = {
                title,
                author,
                content,
                image: fileResponse.$id, // Use the file ID returned by Appwrite
                is_public,
            };

            const documentResponse = await databases.createDocument("65c550a5cf78fda2ccfe", "65c550b5bf7a160dfdce", ID.unique(), blogData);
            console.log('Blog post created:', documentResponse);

            // Reset form after successful submission
            setTitle('');
            setAuthor('');
            setContent('');
            setImage(null);
            setIsPublic(false);
        } catch (error) {
            console.error('Error creating blog post:', error);
        }
    };

    return (
        <div>
            <h2>Add Blog Post</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </label>
                <br />
                <label>
                    Author:
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </label>
                <br />
                <label>
                    Content:
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
                </label>
                <br />
                <label>
                    Image:
                    <input type="file" accept="image/*" onChange={handleFileChange} required />
                </label>
                <br />
                <label>
                    Public:
                    <input type="checkbox" checked={is_public} onChange={() => setIsPublic(!is_public)} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default BlogForm;

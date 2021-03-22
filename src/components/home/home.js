import { useState } from 'react';
import BlogList from '../blogs/bloglist';

const Home = () => {

    const [blogPosts, setBlogPosts] = useState(
        [
            { title: "Blog Post 1 Title", body: "Blog post 1 body", author: 'Palash', id: 1 },
            { title: "Blog Post 2 Title", body: "Blog post 2 body", author: 'Pritam', id: 2 },
            { title: "Blog Post 3 Title", body: "Blog post 3 body", author: 'Ghosh', id: 3 }
        ]
    )

    const handleDelete = (id) => {
        const newBlogPosts = blogPosts.filter((blog) => blog.id !== id);
        setBlogPosts(newBlogPosts);
    }

    return (
        <div className="home">
            <BlogList blogPosts={blogPosts} title="All Blogposts" handleDelete={handleDelete}></BlogList>
            {/* <BlogList blogPosts={blogPosts.filter((blog) => blog.author === 'Pritam')} title="All Blogposts"></BlogList> */}
        </div>
    );
}

export default Home;
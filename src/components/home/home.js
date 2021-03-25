import { useState, useEffect } from 'react';
import BlogList from '../blogs/bloglist';

const Home = () => {

    const [blogPosts, setBlogPosts] = useState(null)

    const handleDelete = (id) => {
        const newBlogPosts = blogPosts.filter((blog) => blog.id !== id);
        setBlogPosts(newBlogPosts);
    }

    useEffect(() => {

        // npx json-server --watch src/data/db.json --port 8000s
        fetch('http://localhost:8000/blogposts')
            .then(res => {
                return res.json();
            }).then((data) => {
                setBlogPosts(data);
            })
    }, [])

    return (
        <div className="home">
            <BlogList blogPosts={blogPosts} title="All Blogposts" handleDelete={handleDelete}></BlogList>

            {/* <BlogList blogPosts={blogPosts.filter((blog) => blog.author === 'Pritam')} title="All Blogposts"></BlogList> */}
        </div>
    );
}

export default Home;
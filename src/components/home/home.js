import { useState, useEffect } from 'react';
import BlogList from '../blogs/bloglist';

const Home = () => {

    const [blogPosts, setBlogPosts] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    const handleDelete = (id) => {
        const newBlogPosts = blogPosts.filter((blog) => blog.id !== id);
        setBlogPosts(newBlogPosts);
    }

    useEffect(() => {

        // npx json-server --watch src/data/db.json --port 8000s
        setTimeout(() => {
            fetch('http://localhost:8000/blogposts')
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could not fetch data for that resource');
                    }

                    return res.json();
                })
                .then((data) => {
                    setBlogPosts(data);
                    setIsPending(false);
                    setError(null)
                })
                .catch(err => {
                    setError(err.message)
                    setIsPending(false);
                })
        }, 1000)
    }, [])

    return (
        <div className="home">

            {error && <div> {error} </div>}
            {isPending && <div> Loading... </div>}

            <BlogList blogPosts={blogPosts} title="All Blogposts" handleDelete={handleDelete}></BlogList>

            {/* <BlogList blogPosts={blogPosts.filter((blog) => blog.author === 'Pritam')} title="All Blogposts"></BlogList> */}
        </div>
    );
}

export default Home;
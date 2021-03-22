import { useState } from 'react';

const Home = () => {

    const [blogPosts, setBlogPosts] = useState(
        [
            {title: "Blog Post 1 Title", body: "Blog post 1 body", author: 'Palash', id: 1},
            {title: "Blog Post 2 Title", body: "Blog post 2 body", author: 'Pritam', id: 2},
            {title: "Blog Post 3 Title", body: "Blog post 3 body", author: 'Ghosh', id: 3}
        ]
    )
    
    return ( 
        <div className="home">
            {
                blogPosts.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{ blog.title }</h2>
                        <h4>Author: {blog.author}</h4>
                        <p>Content: {blog.body}</p>
                    </div>
                ))
            }
        </div>
     );
}
 
export default Home;
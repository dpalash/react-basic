
const BlogList = ({ blogPosts, title, handleDelete }) => {

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {
                blogPosts.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <h4>Author: {blog.author}</h4>
                        <p>Content: {blog.body}</p>
                        <button onClick={() => handleDelete(blog.id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    );
}

export default BlogList;
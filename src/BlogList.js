const  BlogList= ({blogs, title,  }) => {
   /*  const blogs = props.blogs;
    const title = props.title; */
    return (
        <div className="blog-list">

            <h2> { title }</h2>
        {blogs.map((blog) => (
            //key is a special attribute that react uses to keep track of each element in the list
      
            //looping through the blogs array and for each blog we are going to return a div
             <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
               
                </div>
        ))}
    </div>
      );
}
 
export default BlogList;
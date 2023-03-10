import { useState, useEffect} from 'react';
import BlogList from './BlogList';
const Home = () => {
    

const [blogs, setBlogs] = useState([
   { title: 'Welcome to my new blog', body: 'lorem ipsum...', author: 'mario', id: 1},
    { title: 'Web party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'yoshi', id: 3}
]);  //useState hook

    // function to delete a blog
const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
setBlogs(newBlogs);
}
      

//useEffect hook
useEffect(() => {
    console.log('use effect ran');
    console.log(blogs);
})        
    //passing the blogs array as a prop to the BlogList component
    return (
   <div className="home">


<BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete} /> 
 <BlogList blogs={blogs} title="Mario's blogs!" />  
    </div>
            
    ); 
}
 export default Home;
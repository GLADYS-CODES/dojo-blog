import { useState, useEffect} from 'react';
import BlogList from './BlogList';
const Home = () => {
    

const [blogs, setBlogs] = useState(null)
     //useState hook gives us access to the state and a function to update the state

const [isPending, setIsPending] = useState(true);

const [error, setError] = useState(null);
    // function to delete a blog
// const handleDelete = (id) => {
//     const newBlogs = blogs.filter(blog => blog.id !== id);
// setBlogs(newBlogs);
// }
      

//useEffect hook to fetch data from the server
useEffect(() => {
    setTimeout(() => {
    fetch('http://localhost:8000/blogs')
    .then(response => {
        console.log(response);
        if (!response.ok) {
            throw Error('could not fetch the data for that resource')

        }
        return response.json()})

        .then(data => {
          
            setBlogs(data);
            setIsPending(false);
            
        })
        // catch error and log it to the console
   .catch(err => {
         // auto catches network / connection error
        setError(err.message);
        setIsPending(false);
        
   })
        
    }, 1000); //timeout of 1 second
    
}, []);        

// if error is true, display the error message

    //passing the blogs array as a prop to the BlogList component
    return (
   <div className="home">
{isPending && <div>Loading...</div>}


{error && <div>{error}</div>}

{blogs && <BlogList blogs={blogs} title="All blogs!" />} 
 
    </div>
            
    ); 
}
 export default Home;
import { useState} from 'react';
import BlogList from './BlogList';
const Home = () => {
    

const [blogs, setBlogs] = useState([
   { title: 'Welcome to my new blog', body: 'lorem ipsum...', author: 'mario', id: 1},
    { title: 'Web party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'yoshi', id: 3}
]);  //useState hook

    
  
        
    //p
    return (
   <div className="home">


<BlogList blogs={blogs} />    
    </div>
            
    ); 
}
 
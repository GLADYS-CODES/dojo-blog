import { useHistory } from "react-router-dom";
import { useState } from "react";
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');

    const [isPending, setIsPending] = useState(false);


    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

setIsPending(true);

fetch('http://localhost:8000/blogs', {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(blog)

}).then(() =>{
    console.log('new blog added');
    setIsPending(false);
    //history.go(-1);
    history.push('/');  // redirects user to the home page
})


    } // handleSubmit to get the data from the form


    return ( 
        <div classsName="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog.title</label>
                <input 
                type="text" 
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />

                <label>Blog.body</label>
                <textarea 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>Blog.author</label>
                <select 
                value={author}
                onChange={(e) => setAuthor(e.target.value
                )}>

                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>   
                </select>
               { !isPending && <button>Add Blog</button>}
               {isPending && <button disabled>Adding Blog</button>}
                <p>{title}</p>
                <p>{body}</p>
            </form>
        </div>
     );
}
 
export default Create;
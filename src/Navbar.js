import {Link } from 'react-router-dom'; //link is a react component that we can use to create links to different routes


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                
                <Link to="/create">New Blog</Link>
                
                </div>
        </nav>
     );
}
 
export default Navbar;
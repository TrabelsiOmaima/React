import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {

    const [blogs, setBlogs] = useState(null);


    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    
    useEffect( () => {
        setTimeout( () => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    //catch res error
                    if (! res.ok) {
                        throw Error ('could not fetch the data for that resource');
                        // l msg li nda5lou heka.. chy5arajhouli fl catch le5ra
                    }
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                    // if data existe , stop fetch loading
                    setIsPending(false);
                    setError(null);
                })
                .catch( err => {  //1. network err--sakkart server:NetworkError when attempting to fetch resource.
                    setIsPending(false);
                    setError(err.message);
                })

        }, 1000);
    }, []); 


    return ( 
        <div className="home">
            { error && <div> {error} </div> }
            {isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
     );
}
 
export default Home;
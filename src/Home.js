import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {

    //useFetch hook with the endpoint we nned in this component
    const { data : blogs , isPending, error } = useFetch('http://localhost:8000/blogs');
    // extract 'data' but here call it 'blogs'


    
    return ( 
        <div className="home">
            { error && <div> {error} </div> }
            {isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
     );
}
 
export default Home;
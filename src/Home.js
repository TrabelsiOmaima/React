import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {

    const [name, setName] = useState('mario');


    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ]);


    const handleDelete =(id) => {
        const newBlogs = blogs.filter(blog => blog.id !==id);
        setBlogs(newBlogs);
    }

    //useEffect :
    useEffect( () => {
        console.log('use effect ran');
        console.log(blogs); // just affiche , mch ki ttbadal state
        console.log(name);
   // }, []);  // just in the 1st component render
    }, [name]);  // just state name (blogs nn)


    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs"  handleDelete={handleDelete}/>
            <button onClick={() => setName('luigi')} >change name</button>
            <p> {name} </p>
        </div>
     );
}
 
export default Home;
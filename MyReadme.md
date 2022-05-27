
# 1. intro :
install ... emmet.. + write div.content+tab => 
      <div className="content">  </div>

+ install package vscode :
Simple react snippets

..helpfull


# 2. creating react-app :
cmd : npx create-react-app reactjs

+  ------ archi react :
> node-modules : project's dependency.. packages.. modules...
> public :   public to the browser
        index.html .. browser
> src : 
- all react components
- app.js 
- test...css.. files

- index.js  // pt de départ de project   !!

- package.json  /dependencies" + scripts

--------------------------------

+ ------ start server : npm run start
http://localhost:3000    / src> app.js



- inspect :<div class="App">

app.js  <div className="App">
index.js     <App />

+ ---------- 
if download react project :
npm install / to install node-modules(dependeciys)


# 3.  components & templates :

+ page web = n components
+ each component has : template(html/css) + logic (js)
----
+ index.js --> app.js
function App() {
  return (
    <div className="App">
      // JSX  
      PS : jsx # html.. fih fazet f syntax className(jsx fl code)/class(html fl browser))
        li affiché fl page
    </div>


# 4. Dynamique values in template :
put values..variables...in html..jsx
a..emmmet .. veeeeeryy helpfull  !!!!
dynamique links..data..values.. 
const  x = "kkkkkkkkkkk";
<> {x} <>


# 5. Multiple components :
+ components is a function qui return a jsx template. / navbar : template jsx
+ x.js / components.. export
+ y.js > import x .. <x/>
+ exemple navbar , home...


# 6.Adding Styles :
+ css .... app.css/ index.css

> App.js / delete importe app.css
> index.css > delete all..then.. copy..paste github

> navbar.js > / css.. wst jsx


# 7. Click Events :


> home.js 
 <button onClick={handleClick} >Click me</button>  // ref
<button onClick={handleClick()} >Click me</button> // exécution without click

+ case : fnct with params :  use arow function invoke functionX(params) :
<button onClick={() =>  handleClickAgain('emma')} >Click me again</button>

+ e ..event 



# 8. using State :
+ state = data manage 
name = "x", when i click => name="y"  // nn in the console, but in the template (browser)=> we need state (reel data)
+ useState Hook :

> Home.js >
   const [name, setName ] = useState('mario');
   setName('luigi');



# 9. React dev Tools :
+ add extension "react developer tools" to chrome or firefox
+ give u .. ur page component tree + hooks + props, js, rendred by, states,,....etc =>  inspect.. components ..
+ give u .. ?? =>  inspect.. profiler ??
+ narja3lou ki nst7a9ou
+ fazet l test..debug..


# 10. outputting lists :
+ building mini blog 
+ state : use state hooks
> home.js  / blogs.map / ps :  key={blog.id} = unique 
> index.css / add /* blog previews / list */


# 11. Props :

+ reusibale components / create blog_liste component
+ props 
> blogList :
            const BlogList = ({blogs, title}) => { 
               {title}  
               {blogs}
> home.js
            <BlogList blogs={blogs} title="All Blogs" />

+ Props =  like function args : invoke (homejs) / function params component : destruction


# 11. Reusing components : 
 <BlogList blogs={blogs} title="All Blogs" />
 <BlogList blogs={blogs.filter((blog) => blog.author ==='mario' )} title="Mario's Blogs" />



# Functions as Props : delete an item  from list Blogs
> home.js /data ..invoke

    const handleDelete =(id) => {
        const newBlogs = blogs.filter(blog => blog.id !==id);
        setBlogs(newBlogs);

    }


 <BlogList blogs={blogs} title="All Blogs"  handleDelete={handleDelete}/>   //w npassiha l function as props  :            


> BlogLIst.js : 
const BlogList = ({ blogs, title, handleDelete }) => { <button onClick={ ()=> handleDelete(blog.id) }>delete blog</button>

+ PS : when we refrech.. tarja3 data l 9dima li f state 


# 14. 


 












# Tips :
+ import .. export  of components
+ h1+tab => <h1> </h1>

+ sfc + tab :
        const  = () => {
            return (  );
        }
        
        export default ;

 + elemnt.nameClass + tab 
 / nav.navbar + tab ==> <nav className="navbar"></nav>

+ app.js = "root component"

+ arrow function = call back function
+ 


const Home = () => {

    const  handleClick = (e) => {  //event object
        console.log('ghello,ninjas', e);
    }

    const  handleClickAgain = (name, e) => {
        console.log(`hello ${name} ${e.target}`);
    }



    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick} >Click me</button>
            <button onClick={(e) =>  handleClickAgain('emma',e )} >Click me again</button>
        </div>
     );
}
 
export default Home;
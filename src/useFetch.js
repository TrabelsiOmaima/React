import { useEffect, useState } from "react";



const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

   
    useEffect( () => {
        setTimeout( () => {
            fetch(url) 
                .then(res => {
                    //catch res error
                    if (! res.ok) {
                        throw Error ('could not fetch the data for that resource');
                        // l msg li nda5lou heka.. chy5arajhouli fl catch le5ra
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data); //ps data hedhi wl const data #
                    // if data existe , stop fetch loading
                    setIsPending(false);
                    setError(null);
                })
                .catch( err => {  //1. network err--sakkart server:NetworkError when attempting to fetch resource.
                    setIsPending(false);
                    setError(err.message);
                })
 
        }, 1000);
    }, [url]); 


    return { data, isPending, error }


}
 
export default useFetch;
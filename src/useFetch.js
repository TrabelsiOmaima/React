import { useEffect, useState } from "react";



const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

   
    useEffect( () => {

        //cleanup - to stop the fect req 
        const abortCont = new AbortController();

        setTimeout( () => {
            //fetch(url) 
            fetch(url, {signal : abortCont.signal}) 
                .then(res => {
                    if (! res.ok) {
                        throw Error ('could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data); 
                    setIsPending(false);
                    setError(null);
                })
                .catch( err => {  
                    setIsPending(false);
                    setError(err.message);
                })
 
        }, 1000);
        //cleanup
        return () => abortCont.abort();
    }, [url]); 


    return { data, isPending, error }


}
 
export default useFetch;
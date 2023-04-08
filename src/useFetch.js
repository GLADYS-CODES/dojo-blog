import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null)
    //useState hook gives us access to the state and a function to update the state

const [isPending, setIsPending] = useState(true);

const [error, setError] = useState(null);






  //  /useEffect hook to fetch data from the server
useEffect(() => {

const abortController = new AbortController();


    setTimeout(() => {
    fetch(url, {signal: abortController.signal})
    .then(response => {
       // console.log(response);
        if (!response.ok) {
            throw Error('could not fetch the data for that resource')

        }
        return response.json()
    })

        .then(data => {
          
            setData(data);
            setIsPending(false);
            setError(null);
        })
        // catch error and log it to the console
   .catch(err => {

    if (err.name === 'AbortError')
    {
        console.log('fetch aborted');
    } else {
         // auto catches network / connection error
        
        setIsPending(false);
        setError(err.message);
    }
   })
        
    }, 1000); //timeout of 1 second
    

return function cleanup() {
    abortController.abort();
}
}, [url]);      



return {data, isPending, error}
}
 
export default useFetch;
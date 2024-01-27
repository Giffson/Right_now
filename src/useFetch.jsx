import React,{useState, useEffect} from 'react'

const useFetch = (url) => {

    const [data, setData] = useState();
const [isPending, setIsPending] = useState(true);
const [error, setError] = useState();


useEffect(()=> {

    fetch(url) //'http://localhost:8000/blogPosts'
    .then( async (res) => {
        if(!res.ok) {
            throw Error('Cannot Fetch from the resource !')
        }
       return await res.json();
    })
    .then((data) => {
        setIsPending(false)
        setData(data)
    })
    .catch ((error) => {
        setIsPending(false)
        setError(error.message)
    })
},[])
  return { data, isPending, error}
}

export default useFetch
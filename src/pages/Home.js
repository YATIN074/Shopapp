import React, { useEffect, useState } from 'react'
import Spinner from '../Components/Spinner';
import Product from '../Components/Product';
const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    async function fetchData(){
        setLoading(true);
        try{
            const res = await fetch(API_URL);
            const data =await res.json();
            setPosts(data);
        }
        catch(e){
            console.log("error aagya");
            setPosts([]);
        }
        setLoading(false);
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div>
        {
            loading ? <Spinner></Spinner>
            : posts.length > 0 ?
            (<div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
            {
            posts.map((post)=>{
               return <Product post = {post} key={post.id}></Product>
            })
            }
            </div>) :
            <div className="flex justify-center items-center">
                <p>No data found</p>
            </div>
        }
    </div>
  )
}

export default Home
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import Product from '../components/Product';
 import Spinner from "../components/Spinner"
const Home = () => {

const API_URL = "https://fakestoreapi.com/products";
const [loading, setLoading] =useState(false);
const [posts, setPosts] = useState([]);
 async function fetchProductData(){
  setLoading(true);
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    setPosts(data);
  } catch (er) {
    console.log("error agya ji", er)
    setPosts([]);
    toast("error thik karo");
  }
  setLoading(false);
 }

 useEffect(() => {
  fetchProductData();
 },[]);


  return (
    <div>
      {
        loading ? <Spinner /> : 
        posts.length > 0 ? ( 
        <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-x-5 space-y-10 '>
        {
          posts.map((post)=>{ return <Product key = {post.id} post={post}/>})
        } 
         </div> ) :
        <div className='flex justify-center items-center'><p>No data found</p></div>
      }
    </div>
  )
}

export default Home;

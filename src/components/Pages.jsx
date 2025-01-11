import React from 'react'
import {Link} from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

const Pages = () => {

  const [page, setPage]=useState(1);

  const fetchData = async (id)=>{
    const res = await axios.get(`http://localhost:3000/walmart?_limit=4&_page=${id}`)
    console.log(res)
    return res.data
  }
  const {data, isLoading, isFetching, isError, error, refetch }=useQuery({
    queryKey:['pages'],
    queryFn:()=>fetchData(page),
    // staleTime: 3000, // How time data is fresh
    // refetchInterval:1000, // fetch data in which interval
    // refetchIntervalInBackground:true // even user is away
    // enabled:false //  Not fetching data on mounted
})

if(isLoading){
    return <div>Page is Loading</div>
}

if(isError){
    return <div>{error.message}</div>
}

// console.log( isLoading, isFetching )
// const stl={ display:"block",width: "2rem", height: "2rem", backgroundColor: product.isNew?"green":"red" }

  return (
  <>
  <button onClick={refetch}>Find</button>
    <div key={"o"} style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      {data?.map((product) => (
        <Link to={`/page`}>
        
        <div 
          key={product._id} 
          style={{ border: "1px solid #ddd", padding: "16px", maxWidth: "300px" }}
        >
          <img 
          key={product._id} 
            src={product.image} 
            alt={product.title} 
            style={{ width: "100%", height: "20rem" }} 
          />
          <h2>{product.title}</h2>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Price:<s>{product.oldPrice}</s></strong> ${product.price}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Description:</strong> {product.des}</p>
          <p><span style={{ display:"block",width: "2rem", height: "2rem", backgroundColor: product.isNew?"green":"yellow" }} ></span></p>
        </div>
        </Link>
      ))}
      <button key={1} onClick={()=>setPage(prev=>prev-1)}>Prev</button>
      <button key={2} onClick={()=>setPage(prev=>prev+1)}>Next</button>
    </div>
    </>
  )
}

export default Pages;
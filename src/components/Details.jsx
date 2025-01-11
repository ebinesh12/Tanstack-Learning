import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchData = async (id)=>{
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
    return res.data
}

const Details = () => {
    const {id} =useParams()

    // const fetchData = async ()=>{
    //     const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
    //     return res.data
    // }

    const {data, isLoading, isFetching, isError, error, refetch }=useQuery({
        queryKey:['Product', id],
        // queryFn: fetchData,
        queryFn: ()=>fetchData(id),
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
    
    console.log( isLoading, isFetching )

  return (
    <>
    <button onClick={refetch}>Find</button>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
          <div 
            key={data.id} 
            style={{ border: "1px solid #ddd", padding: "16px", maxWidth: "300px" }}
          >
            <img 
              src={data.image} 
              alt={data.title} 
              style={{ width: "100%", height: "20rem" }} 
            />
            <h2>{data.title}</h2>
            <p><strong>Price:</strong> ${data.price}</p>
            <p><strong>Category:</strong> {data.category}</p>
            <p><strong>Description:</strong> {data.description}</p>
            <p><strong>Rating:</strong> {data.rating.rate} ({data.rating.count} reviews)</p>
          </div>
      </div>
      </>
  )
}

export default Details;
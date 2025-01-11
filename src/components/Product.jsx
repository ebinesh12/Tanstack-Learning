import React from 'react'
import {Link} from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Product = () => {

  const {data, isLoading, isFetching, isError, error, refetch }=useQuery({
    queryKey:['Product'],
    queryFn:async ()=>{
        const res = await axios.get('https://fakestoreapi.com/products')
        return res.data
    },
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
      {data?.map((product) => (
        <Link to={`/pro/${product.id}`}>
        
        <div 
          key={product.id} 
          style={{ border: "1px solid #ddd", padding: "16px", maxWidth: "300px" }}
        >
          <img 
            src={product.image} 
            alt={product.title} 
            style={{ width: "100%", height: "20rem" }} 
          />
          <h2>{product.title}</h2>
          <p><strong>Price:</strong> ${product.price}</p>
          {/* <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)</p> */}
        </div>
        </Link>
      ))}
    </div>
    </>
  )
}

export default Product;
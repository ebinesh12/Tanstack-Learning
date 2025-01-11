import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const ReactQry = () => {

    const {data, isLoading, isFetching, isError, error }=useQuery({
        queryKey:['days'],
        queryFn:async ()=>{
            const res = await axios.get('http://localhost:4000/days')
            return res.data
        }
    })

    if(isLoading){
        return <div>Page is Loading</div>
    }

    if(isError){
        return <div>{error.message}</div>
    }

    if(!data){
        return <div>No Data Found</div>
    }

    console.log(data)

  return (
    <div>
      {data.map((dayData, index) => (
        <div key={index} style={{ marginBottom: "2rem" }}>
          <h2>Day: {dayData.day}</h2>

          <div>
            <h3>Crimes By Category:</h3>
            <ul>
              {dayData.CrimesByCategory.map((category, idx) => (
                <li key={idx}>
                  <strong>{category.category}</strong>: {category.count}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Resolutions:</h3>
            <ul>
              {dayData.Resolutions.map((resolution, idx) => (
                <li key={idx}>
                  <strong>{resolution.type}</strong>: {resolution.count}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Crimes By Description:</h3>
            <ul>
              {dayData.CrimesByDescription.map((description, idx) => (
                <li key={idx}>
                  <strong>{description.description}</strong>:{" "}
                  {description.count}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ReactQry;
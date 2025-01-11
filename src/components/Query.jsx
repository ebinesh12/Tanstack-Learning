import React,{ useEffect, useState } from 'react';
import axios from 'axios';

const Query = () => {
    const [data, setData]=useState([
      {
        "day": "Thursday",
        "CrimesByCategory": [
          { "category": "Robbery", "count": 2244 },
          { "category": "Homicide", "count": 2220 },
          { "category": "Arson", "count": 2184 },
          { "category": "Theft", "count": 2170 },
          { "category": "Assault", "count": 2169 },
          { "category": "Traffic Offenses", "count": 2164 },
          { "category": "Fraud", "count": 2158 },
          { "category": "Drug Offenses", "count": 2131 },
          { "category": "Burglary", "count": 2127 },
          { "category": "Vandalism", "count": 2117 }
        ],
        "Resolutions": [
          { "type": "No Arrest", "count": 4390 },
          { "type": "Pending Investigation", "count": 4361 },
          { "type": "Unresolved", "count": 4324 },
          { "type": "Solved", "count": 4313 },
          { "type": "Arrest Made", "count": 4296 }
        ],
        "CrimesByDescription": [
          { "description": "Mugging", "count": 788 },
          { "description": "Attempted murder", "count": 781 },
          { "description": "Property stolen", "count": 769 },
          { "description": "Insurance fraud", "count": 743 },
          { "description": "Driving under the influence", "count": 742 },
          { "description": "Property damage", "count": 739 },
          { "description": "Arson", "count": 738 },
          { "description": "Drug trafficking", "count": 737 },
          { "description": "Strong-arm robbery", "count": 736 },
          { "description": "Reckless driving", "count": 730 },
          { "description": "Physical altercation", "count": 729 },
          { "description": "Credit card fraud", "count": 728 },
          { "description": "Battery", "count": 725 },
          { "description": "Vehicle arson", "count": 724 },
          { "description": "Murder", "count": 723 },
          { "description": "Attempted arson", "count": 722 },
          { "description": "Armed robbery", "count": 720 },
          { "description": "Manslaughter", "count": 716 },
          { "description": "Manufacturing drugs", "count": 715 },
          { "description": "Domestic assault", "count": 715 },
          { "description": "Breaking and entering", "count": 714 },
          { "description": "Unauthorized entry", "count": 709 },
          { "description": "Burglary in progress", "count": 704 },
          { "description": "Theft from vehicle", "count": 703 },
          { "description": "Retail theft", "count": 698 },
          { "description": "Vandalized vehicle", "count": 696 },
          { "description": "Hit and run", "count": 692 },
          { "description": "Identity theft", "count": 687 },
          { "description": "Graffiti", "count": 682 },
          { "description": "Possession of controlled substances", "count": 679 }
        ]
      }
    ]
    );
    // const [day, setDay]=useState("Friday");
    const [isLoading, setIsLoading]=useState(true);
    const [isError, setIsError]=useState(false);

    const fetchData=async ()=>{
        try {
          // const res=await axios.get(`http://localhost:4000/${days}`)
            const res=await axios.get(`http://localhost:4000/days`)
            setData(res.data)
            console.log(res.data)
            
        } catch (error) {
            setIsError(true)

        }finally{
            setIsLoading(false)
        }
    };

    useEffect(()=>{
        fetchData();
    },[]);

    if(isError){
        return <div>Page has Error</div>
    }

    if(isLoading){
        return <div>Page is Loading</div>
    }

    if(!data){
        return <div>No Data Found</div>
    }

  return (
  <>
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
  </>
  )
}

export default Query;
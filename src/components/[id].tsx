import React, { useEffect, useState } from 'react'
import coingecko from '../pages/api/coingecko';


export const getStaticPaths = async () => {
  // TODO: remove dry
  const [ exchanges, setExchanges ] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await coingecko.get(`/exchanges/`, {
          params: {
            ids: "",
          },
        });
      // console.log(response.data.slice(0,10))
      const topTenExchangeData = response.data.slice(0,10)
      setExchanges(topTenExchangeData)
    };

    fetchData();
  }, []);





    // const res = await fetch('https://jsonplaceholder.typicode.com/users');
    // const data = await res.json();
  
    // map data to an array of path objects with params (id)

    const paths = exchanges.map(exchange => { 
      return {
        params: { id: exchange.id.toString() }
      }
    })
    console.log(paths)
    return {
      paths,
      fallback: false
    }
  }


const Details = () => {
  return (
    <div>Details</div>
  )
}

export default Details

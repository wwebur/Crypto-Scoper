import React from 'react'

//@ts-ignore
const Homepage = (exchanges) => {
console.log(exchanges)
  return (
    <div>Homepage</div>
  )
}

export default Homepage

export const getStaticProps = async () => {
  
    const response = await fetch ('https://api.coingecko.com/api/v3/exchanges/')
    console.log(response)
    const data = await response.json();
    return {
      props: {
        // @ts-ignore
        exchanges: data
      }
    }
  }
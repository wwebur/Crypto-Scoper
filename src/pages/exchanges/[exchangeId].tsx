import React from 'react'
// import coingecko from '../pages/api/coingecko';
// @ts-ignore
export const getStaticProps = async (context) => {
  const name = context.params.id;
  const id = context.params.name; // how to test this??
  const response = await fetch ('https://api.coingecko.com/api/v3/exchanges/' + name)
  console.log(response)
  const data = await response.json();
  console.log("name: ", name)
  return {
    props: {
      // @ts-ignore
      exchange: data
    }
  }
}



export const getStaticPaths = async () => {
    const exchanges = await fetch ('https://api.coingecko.com/api/v3/exchanges/')
    const exchangeData = await exchanges.json();
    const topTenData = exchangeData.slice(0,10);
  
    // map data to an array of path objects with params (name)
    // @ts-ignore
    const paths = exchangeData.map(exchange => { 
      return {
        params: { exchangeId: exchange.id.toString() }
        // params: { exchangeId: exchange.id }
      }
    })
    console.log(paths)
    return {
      paths,
      fallback: false
    }
  }

// @ts-ignore
const Details = ({ exchange }) => {
  console.log(exchange)
// const Details = () => {
  return (
    <div>{exchange.name}</div>
    // <div>Details Page</div>
  )
}

export default Details

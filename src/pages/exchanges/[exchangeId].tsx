import React, { useEffect, useState } from 'react'
// import coingecko from '../pages/api/coingecko';
// @ts-ignore
export const getStaticProps = async (context) => {
  const id = context.params.id; // how to test this??
  const response = await fetch ('https://api.coingecko.com/api/v3/exchanges/binance')
  console.log(response)
  const data = await response.json();
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
  
    // map data to an array of path objects with params (id)
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
// const Details = () => {
  return (
    <div>{exchange.id}</div>
    // <div>Details Page</div>
  )
}

export default Details

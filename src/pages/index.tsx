import type { NextPage } from 'next'
import Directory from '../components/Directory';
import React from 'react'
import NavComponent from '../components/Navbar';

// @ts-ignore
const Home = (exchanges) => {
  console.log("exchanges: ", exchanges)
  return (
    <div>   
      <NavComponent/>
      <Directory/> 
    </div>
  )
}

export default Home

// TODO: use redux to maintain state
export const getStaticProps = async () => {
  
  const response = await fetch ('https://api.coingecko.com/api/v3/exchanges/')
  // console.log(response)
  const data = await response.json();
  const topTenData = data.slice(0,10);
  return {
    props: {
      // @ts-ignore
      exchanges: topTenData
    }
  }
}
// const Home: NextPage = () => {

//    return (

//     <>
//       <Directory/>
//     </>
//   );

// }

// export default Home

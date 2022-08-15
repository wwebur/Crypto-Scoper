import type { GetStaticProps, NextPage } from 'next'
import Directory from '../components/Directory';
import React from 'react'
import NavComponent from '../components/Navbar';
import { fetchExchanges } from 'src/api/coinGecko.api';
import { Exchange } from 'src/types';

type HomeProps = {
  exchanges: Exchange[]
}

const Home = (props: HomeProps) => {
  return (
    <div>   
      <NavComponent/>
      <Directory/> 
    </div>
  )
}

export default Home

// TODO: use redux to maintain state
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const data = await fetchExchanges()
  const topTenData = data.slice(0,10);
  return {
    props: {
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

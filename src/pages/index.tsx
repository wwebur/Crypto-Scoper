import type { GetStaticProps } from 'next'
import Directory from '../components/Directory';
import React from 'react'
import NavComponent from '../components/Navbar';
import { fetchExchanges } from 'src/api/coinGecko.api';
import { Exchange } from 'src/types';

type HomeProps = {
  exchanges: Exchange[]
}

const Home = ({exchanges}: HomeProps) => {
  console.log("home props: ",exchanges)
  return (
    <>  
      <NavComponent/>
      <Directory exchanges={exchanges}/> 
    </> 
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


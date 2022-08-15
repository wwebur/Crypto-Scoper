import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react'
import { fetchExchangeById, fetchExchanges } from 'src/api/coinGecko.api';
import { FaTwitter, FaFacebook, FaSitemap } from 'react-icons/fa';
import NavComponent from '../../components/Navbar';
import {type Exchange} from '../../types/exchange.types'
// import coingecko from '../pages/api/coingecko';

type GetStaticPropsReturn = {
  exchange: Exchange | null
}
type GetStaticPropsParams = {
  id?: string
}

export const getStaticProps: GetStaticProps<GetStaticPropsReturn, GetStaticPropsParams> = async (context) => {
  const id = context.params?.id;
  
  if (!id) {
    return {
      props: {
        exchange: null
      }
    }
  }

  // const response = await fetch ('https://api.coingecko.com/api/v3/exchanges/' + id)
  // console.log(response)
  // const data = await response.json();
  const data = await fetchExchangeById(id)
  console.log("name: ", id)
  return {
    props: {
      exchange: {
        ...data,
        id
      }
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
    // const exchanges = await fetch ('https://api.coingecko.com/api/v3/exchanges/')
    // const exchangeData = await exchanges.json() as Exchange[]
    // const topTenData = exchangeData.slice(0,10);
    const exchangeData = await fetchExchanges()
    // map data to an array of path objects with params (name)
    const paths = exchangeData.map(exchange => { 
      return {
        params: { id: exchange.id.toString() }
        // params: { exchangeId: exchange.id }
      }
    })
    console.log(paths)
    return {
      paths,
      fallback: false
    }
  }

type DetailsProps = {
  exchange?: Exchange | null
}

const Details = ({ exchange }: DetailsProps) => {
  console.log(exchange)
  const twitter = `https://twitter.com/${exchange?.twitter_handle}`;
// TODO: create about from info
// 
  return (
    <div>
      <NavComponent/>
      {exchange ? (
        <>
        <div className="flex items-center justify-center">
        <div className="bg-white w-1/3 mt-10 rounded-lg">
        <div className="flex items-center justify-center pt-10 flex-col">
          
      <img src={exchange.image} className="rounded-full w-24"/>
      <br/>
      <h1 className="text-gray-800 font-semibold text-xl mt-5">
        {exchange.name} 
        <br/>
      </h1>
        <h1 className="text-gray-500 text-sm">
        {exchange.country}
        </h1>
        <h1>
        Since {exchange.year_established}
        </h1>

      Trust Score: {exchange. trust_score}
      <br/>
      <h1 className="text-gray-500 text-sm p-4 text-center">
      {exchange.name} is a {exchange.centralized ? "centralized" : "decentralized"} exchange located in {exchange.country}. {exchange.name} has a trust rank of {exchange.trust_score_rank} and was established in {exchange.year_established}. 
      </h1>
      <div className="flex mt-2 pl-8 justify-between items-center w-full">
        {(exchange.facebook_url) && (exchange.facebook_url.includes(".co")) ? 
          <a href={exchange.facebook_url}><FaFacebook size={30}/></a> 
          : "" 
        }
        {exchange.twitter_handle ? 
          <a href={twitter}><FaTwitter size={30}/></a> 
          : ""
        }
        {exchange.url ? 
          <a href={exchange.url}><FaSitemap size={30}/></a> 
          : ""
        }
        
        
      </div>

      </div>
      </div>
      </div>
        </>
      ) : <p>Exchange details not found</p>}
    </div>
    
    // <div>Details Page</div>
  )
}

export default Details
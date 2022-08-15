import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react'
// import { FaTwitter } from 'react-icons/fa';
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

  const response = await fetch ('https://api.coingecko.com/api/v3/exchanges/' + id)
  console.log(response)
  const data = await response.json();
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
    const exchanges = await fetch ('https://api.coingecko.com/api/v3/exchanges/')
    const exchangeData = await exchanges.json() as Exchange[]
    // const topTenData = exchangeData.slice(0,10);
  
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
  const twitter = `https://twitter.com/${exchange.twitter_handle}`;
// TODO: create about from info
// 
  return (
    <div>
      <NavComponent/>
      {exchange ? (
        <>
          {exchange.name} 
      <img src={exchange.image}/>
      <br/>
      Country: {exchange.country}
      <br/>
      Trust Score: {exchange. trust_score}
      <br/>
      Year Established: {exchange.year_established}
      <br />
      <a href={exchange.facebook_url}>Facebook</a>
      <br />
      <a href={twitter}>Twitter</a>
      <br />
      <a href={exchange.url}>Website</a>
        </>
      ) : <p>Exchange details not found</p>}
    </div>
    // <div>Details Page</div>
  )
}

export default Details
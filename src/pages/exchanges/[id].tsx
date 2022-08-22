import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useState } from 'react'
import { fetchExchangeById, fetchExchanges } from 'src/api/coinGecko.api';
import { FaTwitter, FaFacebook, FaSitemap, FaArrowRight, FaArrowDown } from 'react-icons/fa';
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
    const exchangeData = await fetchExchanges();
    const topTenData = exchangeData.slice(0,10);
    // map data to an array of path objects with params (name)
    const paths = topTenData.map(exchange => { 
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

const styles = {
  socialIcons: `hover:fill-[#BEE3D8]`
}

const Details = ({ exchange }: DetailsProps) => {


  console.log(exchange)
  const twitter = `https://twitter.com/${exchange?.twitter_handle}`;

  const [showMore, setShowMore] = useState(false);

  const handleClick = () => setShowMore(!showMore);

  return (
    <div>
      <NavComponent/>
      {/* <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div> */}
{/* </div> */}
      {exchange ? (
        <>
        <div className="flex items-center justify-center items-bottom">
        <div className="bg-white w-1/3 mt-10 rounded-lg">
        <div className="flex items-center justify-center pt-10 flex-col">
          
      <img src={exchange.image} className="rounded-full w-24 pt-20" alt=""/>
      <br/>
      <h1 className="text-gray-800 font-semibold text-xl mt-5 text-center">
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
      {/* more info when mobile/small screen */}
      
      <div>
        {/* more button down on open */}
        <div className="flex items-center text-center justify-center">
          {!showMore? <FaArrowRight onClick={handleClick} className={styles.socialIcons}/> : <FaArrowDown onClick={handleClick} className={styles.socialIcons}/>}
        </div>
        <h1 className={!showMore? "hidden": "text-gray-500 text-sm p-4 text-center"}>
        {exchange.name} is a {exchange.centralized ? "centralized" : "decentralized"} exchange located in {exchange.country}. {exchange.name} has a trust rank of {exchange.trust_score_rank} and was established in {exchange.year_established}. 
        </h1>
      </div>

      <div className="flex mt-2 pl-8 space-x-6 justify-center items-center w-full">
        {(exchange.facebook_url) && (exchange.facebook_url.includes(".co")) ? 
          <a href={exchange.facebook_url}><FaFacebook size={30} className={styles.socialIcons}/></a> 
          : "" 
        }
        {exchange.twitter_handle ? 
          <a href={twitter}><FaTwitter size={30} className={styles.socialIcons}/></a> 
          : ""
        }
        {exchange.url ? 
          <a href={exchange.url}><FaSitemap size={30} className={styles.socialIcons}/></a> 
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
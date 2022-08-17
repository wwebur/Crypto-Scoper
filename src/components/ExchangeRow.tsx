import React from "react";
import Link from "next/link";
// import Image from "next/image";
import { Exchange } from "src/types";

interface ExchangeProps {
    id: string;
    exchange: Exchange;
    counter: number;
}

const styles = {
  directoryCardRow: `bg-white border-b dark:bg-gray-800 dark:border-gray-700`,
  boldColumn: `py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white`,
  standardColumn: `py-4 px-6`,
  linkColumn: `font-medium text-blue-600 dark:text-blue-500 hover:underline`,
}

const ExchangeRow= ({ id, exchange, counter }: ExchangeProps) => {
  const url = exchange.url;
  const shortUrl = url.includes("kraken") ?  "kraken.com" : removeProtocol(url);

  return (
    <>
     <tr className={styles.directoryCardRow}>
      {/* column # */}
          <td className={styles.standardColumn}>{counter}</td>
          {/* column Exchange */}
          <td className={styles.linkColumn}>
            <Link href={`/exchanges/${exchange.id}`} id={id}>
              <span className="cursor-pointer">
                  <img src={exchange.image} alt="" width={20} height={20}/>
                {exchange.name}
              </span>
           </Link>  
          </td>

            {/* column trust score */}
            <td className={styles.standardColumn}>{exchange.trust_score}</td>
            {/* column country */}
            <td className={styles.standardColumn}>
              {exchange.country}
            </td>

        {/* column url */}
        <td className={styles.linkColumn}>
          {shortUrl}
        </td>
        
      </tr>  
    </>
  );
};

export default ExchangeRow;


function removeProtocol(url: string){
  // startsWith

  if(url.startsWith("www.")){
      const www = "www."
      return url.slice(www.length)
  }

  if(url.startsWith("https://www.")){
      const https = "https://www."
      // slice() method
      return url.slice(https.length)
  }

  if(url.startsWith("http://www.")){
      const http = "http://www."
      return url.slice(http.length)
  }

  if(url.startsWith("https://")){
      const https = "https://"
      return url.slice(https.length)
  }

  if(url.startsWith('http://')){
      const http = "http://"
      return url.slice(http.length)
  }

  return url
}
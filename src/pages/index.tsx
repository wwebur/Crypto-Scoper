import type { NextPage } from 'next'
import Directory from '../components/Directory';
import React from 'react'
import NavComponent from '../components/Navbar';

const Home = () => {
  return (
    <div>   
      <NavComponent/>
      <Directory/> 
    </div>
  )
}

export default Home
// const Home: NextPage = () => {

//    return (

//     <>
//       <Directory/>
//     </>
//   );

// }

// export default Home

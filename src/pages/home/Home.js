import React from 'react'
import Header from '../../componunts/Header.js'
import Card from '../../componunts/Card.js'
import {datas} from './Data.js'


const Home = () => {
  return (
    <div>
       <Header/>
       <div>
          {
            datas &&
            datas.map((data,index )=>{
                 return(
                    <div  key={index}>
                         <Card data = {data}/>   
                    </div> 
                 )
            }
            )
          }
         
       </div>

    </div>
  )
}

export default Home

import React, { useState } from 'react'
import { Card } from '../api/components/Card'
import { Navbar } from '../api/components/Navbar'

export const Home = ({ movies }) => {
 const [search, setSearch] = useState('')

 if(search.length >= 3){
let _movies = movies.filter(item => item.title.toLowerCase().inculdes(search.toLowerCase()))
  return (
    <div>
    <Navbar  setSearch={setSearch}/>
    <div className="container w-4/6 mx-auto mt-10 grid grid-cols-4 gap-10">
    {_movies.length === 0 ? <button className='btn loading'></button>
      :_movies.map((item, index) => {
        return <Card key={index} item={item}/>
      })
    }
  </div>
</div>
  )
 }
  

return (
  <div>
  <Navbar  setSearch={setSearch}/>
  <div className="container w-4/6 mx-auto mt-10 grid grid-cols-4 gap-10">
  {movies.length === 0 ? <button className='btn loading'></button>
    :movies.map((item, index) => {
      return <Card key={index} item={item}/>
    })
  }
</div>
</div>
 )
}

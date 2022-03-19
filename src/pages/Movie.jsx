import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Movie = ({movies}) => {

  const { id } = useParams()

  const navigate = useNavigate()

  let movie = movies.filter(item => item.id === +id)[0]

  if(!movie) return <button className='btn loading'></button>

 return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
      <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold">{movie.title}</h1>
        <div className="badge badge-accent">{movie.vote_orverage}&#9733;</div>
        </div>
        <div className='divider'></div>
        <h1 className='text-2xl font-bold mb-5 text-scuccess'>About Movie</h1>
        <ul className='mt-10 flex flex-col gap-3'>
          <li>Orginal Title: <strong>{movie.orginal_title}</strong></li>
          <li>Popularity:<strong>{movie.popularity}</strong> </li>
          <li>Votes:<strong>{movie.vote_count}</strong></li>
          <li>Release date: <strong>{movie.release_date}</strong></li>
          <li>Language: <strong>{movie.orginal_language}</strong></li>
     </ul>
     <div className='divider mt-10'></div>
     <p className='text-lg'>{movie.overview}</p>
     <button onClick={() => navigate(-1)} className='btn btn-info mt-10 text-lg 
     shadow-md'>Go Back</button>
     
    </div>
  </div>
  )
}

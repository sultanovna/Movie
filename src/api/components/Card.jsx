import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({item})  => {
 
  return (
    <div className="card w-74 bg-base-100 shadow-xl">
  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.title}
      <div className="badge badge-error">{item.vote_average}&#9733;</div>
    </h2>
    <p>{item.overview.substring(0, 30)}</p>
    <div className="card-actions justify-end">
    <Link to={`/movie/${item.id}`} className="btn btn-sm btn-primary mt-4">Watch</Link>
    </div>
  </div>
</div>
  )
}

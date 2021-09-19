import React from 'react'
import './Card.css'

export default function Card({ userId, rating, review }) {

    return (
        <div className='comment-card'>
            <p>{userId}</p>
            <p>{rating}</p>
            <p>{review}</p>
        </div>
    )
}

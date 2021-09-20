import React from 'react'
import './Card.css'

export default function Card({ userId, rating, review }) {

    return (
        <div className='comment-card'>
            <div className='comment-top-half'>
                <span>{userId}</span>
                &nbsp;
                <span className='stars'>{rating}</span>
            </div>
            <div className='comment-bottom-half'>
                <p>{review}</p>
            </div>
        </div>
    )
}

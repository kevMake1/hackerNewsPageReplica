import React from 'react'
import Favorite from '../Favorite/Favorite'

import './Post.css'

export default function Post(props) {
    return (
        <div onClick={props.clicked} className="Post">
            <h3>{props.title}</h3>
            <p>{props.points} points | {props.by} | {props.time} | {/*props.comments*/} comments | {props.url}</p>
            <Favorite />
            <hr></hr>
        </div>
    )
}

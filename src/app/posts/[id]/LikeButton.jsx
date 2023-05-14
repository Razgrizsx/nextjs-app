'use client'

import { useState } from "react"


export default function LikeButton({id}){
const [liked, setLiked] = useState(false)

return (
        <button style={{
            backgroundColor: 'grey',
            alignitems: 'center',
            justifycontent: 'center',
            height: '50px',
            width: '50px'   
 }} 
        onClick={() => setLiked(!liked)}>
        {liked ? <h1 style={{backgroundColor:'grey'}}>❤️</h1> : <h1 style={{backgroundColor:'grey'}}>❤</h1>}
        </button>
    )
}
'use client'

import { useState } from "react"


export default function LikeButton({id}){
const [liked, setLiked] = useState(false)

return (
        <button onClick={() => setLiked(!liked)}>
        {liked ? <h1>Me Gusta</h1> : <h1>No Me Gusta</h1>}
        </button>
    )
}
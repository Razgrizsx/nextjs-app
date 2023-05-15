const fetchComment = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { 
        next: {
            revalidate: 60   //refresca cada 60 segundos
        } 
    })
    .then(res => res.json())
}

export default async function Comments({params}){
    
    const {id} = params
    const comments = await fetchComment(id)
    return (   comments.map(e => 
            <article>
            <div style={{color: "blue"}}>
                {e.name}
            </div>
            <rb/>
            <div>
                {e.email} 
            </div>
            <rb/>
            <div>
                {e.body}
            </div>
            <rb/>
            <rb/>
            </article>
            )
        )    
}
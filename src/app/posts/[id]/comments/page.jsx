import Image from "next/image"

const fetchComment = async (id) => {
    await new Promise(resolve => setTimeout(resolve, 3000))

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
            <article style={{backgroundColor: 'grey'}}>
            <div>
                <Image width={150} height={150} src={`https://api.dicebear.com/6.x/lorelei/png/seed=${e.email}`} alt={e.name} />  
            </div>
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
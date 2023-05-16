import Link from "next/link"

const fetchPost = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { 
        next: {
            revalidate: 60   //refresca cada 60 segundos
        } 
    })
    .then(res => res.json())
}

export default async function Post({params, children}){
    const {id} = params
    const post = await fetchPost(id)
    return (
        <article>
        <div>
            <small>Home &bull; Post</small>
        </div>
        <rb/>
        <div>
            {post.title}
        </div>
        <rb/>
        <div>
            {post.body}
        </div>
        <rb/>
        <div>
            <Link href={`http://localhost:3000/posts/${id}/comments`}>Comments</Link>
        </div>
        <rb/>
        {children}
        </article>
    )
}
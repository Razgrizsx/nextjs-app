const fetchPost = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { 
        next: {
            revalidate: 60   //refresca cada 60 segundos
        } 
    })
    .then(res => res.json())
}

export default async function Post({params}){
    const {id} = params
    const post = await fetchPost(id)
    console.log(post)
    return (
            <div>
                <h1>Post {id}</h1>
                <h2>{post.title}</h2>
                <div>{post.body}</div>
            </div>
        )
}
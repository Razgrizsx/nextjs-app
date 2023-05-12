import LikeButton from "./LikeButton"

const fetchPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
}

export default async function ListofPosts(){
    const posts = await fetchPosts()
    return (
        posts.map(post => (
            <article key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <LikeButton id={post.id}/>
            </article>
        ))
    )
}
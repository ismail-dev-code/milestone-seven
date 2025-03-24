export default function Post({post}){
    console.log(post);
    return (
        <div className="card1">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    )
}
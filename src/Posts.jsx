import { use } from "react"
import Post from "./Post";

export default function Posts ({postPromise}){
    
    const posts = use(postPromise);
   const {title} = posts;
    return (
        <div className="card1">
            <h3>All Post: {posts.length}</h3>
            {
                posts.map(post=> <Post key={post.id} post={post}></Post>)
            }
        </div>
    )
}
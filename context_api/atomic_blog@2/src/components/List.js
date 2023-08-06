import React from "react";
import { usePosts } from "../context/PostContext";

const List = () => {
    const { posts } = usePosts();
    return (
        <ul>
            {posts.map((post, i) => (
                <li key={i}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
    );
}
export default List  
import React, { useState } from "react";
import { archieve } from "./staticData";

const Archive = ({ onAddPost }) => {

    const posts = archieve;

    const [showArchive, setShowArchive] = useState(false);

    return (
        <aside>
            <h2>Post archive</h2>
            <button onClick={() => setShowArchive((s) => !s)}>
                {showArchive ? "Hide archive posts" : "Show archive posts"}
            </button>

            {showArchive && (
                <ul>
                    {posts.map((post, i) => (
                        <li key={i}>
                            <p>
                                <strong>{post.title}:</strong> {post.body}
                            </p>
                            <button onClick={() => onAddPost(post)}>Add as new post</button>
                        </li>
                    ))}
                </ul>
            )}
        </aside>
    );
}

export default Archive;
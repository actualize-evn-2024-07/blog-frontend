import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import axios from "axios";
import { useState, useEffect } from "react";

export function PostPage() {
  const [posts, setPosts] = useState([]);

  const handleIndex = () => {
    console.log('hello')
    axios.get("http://localhost:3000/posts.json").then(response => {
      console.log(response.data)
      setPosts(response.data)
    })
  }

  useEffect(handleIndex, [])

  return (
    <main>
      <PostsNew />
      <PostsIndex posts={posts} />
      <button onClick={handleIndex}>Get the data</button>
    </main>

  );
}

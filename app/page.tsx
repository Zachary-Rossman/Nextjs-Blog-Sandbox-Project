"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const res = await fetch("/api/test");
      const data = await res.json();

      setPosts(data);
    }

    getPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.author}</p>
          </div>
        ))}
        </div>
        );
      }
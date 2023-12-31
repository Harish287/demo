import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          {post.id}:
          {post.title}<br/>
          <img src={post.url} alt="" /><br/>
          <img src={post.thumbnailUrl} alt="" />
        </li>
      ))}
    </ul>
  );
}

export default App;

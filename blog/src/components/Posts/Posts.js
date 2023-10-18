import React from "react";
import Post from "../Post/Post";
import "./Posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://images.pexels.com/photos/5063576/pexels-photo-5063576.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
    </div>
  );
}
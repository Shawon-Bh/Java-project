// import React from 'react'
// import styles from './UserNewsfeed.module.css'
// function UserNewsfeed() {
//   return (
//     <div>
//       UserFeed
//     </div>
//   )
// }
import React, { useState } from "react";
import { FaThumbsUp, FaCommentDots, FaUserCircle } from "react-icons/fa";

const UserNewsfeed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      mechanicName: "Shawon Bhattacharjee",
      content: "Fixed a tractor at Bahaddarhat, it was a tough one.",
      likes: 0,
      comments: [],
    },
    {
      id: 2,
      mechanicName: "MD Al Jihad",
      content: "Happy to fix MR. Hasib's car , in his home.",
      likes: 0,
      comments: [],
    },
    {
      id: 3,
      mechanicName: "Pronay Das",
      content: "Replacing tires at Alangkar,Satisfying work!",
      likes: 0,
      comments: [],
    },
  ]);

  const [userProfile, setUserProfile] = useState({
    name: "MD. Atiqul Kuddus",
    email: "atiqulmofiz@example.com",
    bio: "A Car lover.",
    profilePic:
      "public/man.webp", 
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleProfileUpdate = (field, value) => {
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      [field]: value,
    }));
  };

  const handleLike = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleAddComment = (id, comment) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    );
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
        position: "relative",
      }}
    >
      <FaUserCircle
        onClick={() => setIsSidebarOpen(true)} 
        style={{
          position: "fixed",
          top: "70px", 
          right: "30px", 
          fontSize: "40px",
          cursor: "pointer",
          color: "#007BFF",
        }}
      />

      <h1 style={{ textAlign: "center" }}>Mechanics' Posts</h1>

      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            marginBottom: "20px",
            backgroundColor: "#f8f9fa",
          }}
        >
          <h2 style={{ marginBottom: "5px" }}>{post.mechanicName}</h2>
          <p style={{ marginBottom: "10px" }}>{post.content}</p>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              onClick={() => handleLike(post.id)}
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                color: "#007BFF",
                fontSize: "16px",
              }}
            >
              <FaThumbsUp style={{ marginRight: "5px" }} />
              {post.likes} Likes
            </button>
            <FaCommentDots style={{ fontSize: "20px", color: "#6c757d" }} />
            <span style={{ color: "#6c757d" }}>{post.comments.length} Comments</span>
          </div>
          <div style={{ marginTop: "10px" }}>
            <input
              type="text"
              placeholder="Add a comment..."
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.target.value.trim()) {
                  handleAddComment(post.id, e.target.value);
                  e.target.value = "";
                }
              }}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          {post.comments.length > 0 && (
            <ul
              style={{
                listStyleType: "none",
                padding: "0",
                marginTop: "10px",
              }}
            >
              {post.comments.map((comment, index) => (
                <li
                  key={index}
                  style={{
                    backgroundColor: "#e9ecef",
                    padding: "8px",
                    borderRadius: "5px",
                    marginBottom: "5px",
                  }}
                >
                  {comment}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      {isSidebarOpen && (
        <div
          style={{
            position: "fixed",
            top: "0",
            right: "0",
            width: "300px",
            height: "100vh",
            backgroundColor: "#f8f9fa",
            boxShadow: "-2px 0 5px rgba(0,0,0,0.1)",
            padding: "20px",
            overflowY: "auto",
            zIndex: 1000,
          }}
        >
          <button
            onClick={() => setIsSidebarOpen(false)} 
            style={{
              backgroundColor: "transparent",
              border: "none",
              fontSize: "20px",
              cursor: "pointer",
              color: "#6c757d",
              marginBottom: "20px",
            }}
          >
            Close
          </button>
          <img
            src={userProfile.profilePic}
            alt="Profile"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              margin: "auto",
              display: "block",
              marginBottom: "20px",
            }}
          />
          <h3>Name</h3>
          <input
            type="text"
            value={userProfile.name}
            onChange={(e) => handleProfileUpdate("name", e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginBottom: "15px",
            }}
          />
          <h3>Email</h3>
          <input
            type="email"
            value={userProfile.email}
            onChange={(e) => handleProfileUpdate("email", e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginBottom: "15px",
            }}
          />
          <h3>Bio</h3>
          <textarea
            value={userProfile.bio}
            onChange={(e) => handleProfileUpdate("bio", e.target.value)}
            rows="3"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginBottom: "15px",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default UserNewsfeed;

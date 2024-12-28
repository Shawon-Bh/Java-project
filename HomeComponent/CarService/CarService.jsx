// import React, { useState, useRef } from "react";

// // Separate component for Mechanic Posts
// const Post = ({ post, comments, onLikePost, onCommentSubmit, onLikeComment }) => {
//   return (
//     <div key={post.id} style={{ border: "1px solid #ccc", marginBottom: "20px", padding: "10px" }}>
//       <p>{post.text}</p>
//       {post.image && <img src={post.image} alt="Post" style={{ width: "100%" }} />}
//       {post.video && <video controls src={post.video} style={{ width: "100%" }} />}
//       <button onClick={() => onLikePost(post.id)}>Like ({post.likes})</button>

//       {/* Comments Section */}
//       <div>
//         <h4>Comments</h4>
//         <ul>
//           {(comments[post.id] || []).map((comment, index) => (
//             <li key={index}>
//               {comment.text} - Likes: {comment.likes}
//               <button onClick={() => onLikeComment(post.id, index)}>Like</button>
//             </li>
//           ))}
//         </ul>
//         <input
//           type="text"
//           placeholder="Write a comment..."
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               onCommentSubmit(post.id, e.target.value);
//               e.target.value = "";
//             }
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// const CarService = () => {
//   const [mechanicPosts, setMechanicPosts] = useState([]);
//   const [newPost, setNewPost] = useState({ text: "", image: null, video: null });
//   const [comments, setComments] = useState({});
//   const [topRatedMechanics, setTopRatedMechanics] = useState([
//     { name: "Shawon", rating: 4.8, price: "$50/hr", image: "john_doe.jpg" },
//     { name: "Pronay", rating: 4.7, price: "$45/hr", image: "jane_smith.jpg" },
//     { name: "Jihad", rating: 4.5, price: "$40/hr", image: "mike_johnson.jpg" },
//   ]);
//   const [carParts, setCarParts] = useState([
//     { name: "Engine", price: "$500", image: "public/engine1.webp", discount: "10%" },
//     { name: "Brakes", price: "$150", image: "brakes.jpg", discount: "15%" },
//     { name: "Wheels", price: "$300", image: "public/wheel.webp", discount: "20%" },
//     { name: "Exhaust", price: "$250", image: "exhaust.jpg", discount: "5%" },
//     { name: "Suspension", price: "$400", image: "suspension.jpg", discount: "12%" },
//     { name: "Transmission", price: "$800", image: "transmission.jpg", discount: "8%" },
//   ]);

//   const [leftWidth, setLeftWidth] = useState(20); // Percentage width of left sidebar
//   const [rightWidth, setRightWidth] = useState(20); // Percentage width of right sidebar

//   const leftBarRef = useRef(null);
//   const rightBarRef = useRef(null);

//   // Track dragging state
//   const [draggingLeft, setDraggingLeft] = useState(false);
//   const [draggingRight, setDraggingRight] = useState(false);

//   const handlePostSubmit = () => {
//     if (newPost.text || newPost.image || newPost.video) {
//       setMechanicPosts([...mechanicPosts, { ...newPost, id: Date.now(), likes: 0, comments: [] }]);
//       setNewPost({ text: "", image: null, video: null });
//     }
//   };

//   const handleCommentSubmit = (postId, commentText) => {
//     setComments((prev) => ({
//       ...prev,
//       [postId]: [...(prev[postId] || []), { text: commentText, likes: 0 }],
//     }));
//   };

//   const handleLikeComment = (postId, commentIndex) => {
//     setComments((prev) => {
//       const updatedComments = [...prev[postId]];
//       updatedComments[commentIndex].likes += 1;
//       return { ...prev, [postId]: updatedComments };
//     });
//   };

//   const handleLikePost = (postId) => {
//     setMechanicPosts((prev) =>
//       prev.map((post) => (post.id === postId ? { ...post, likes: post.likes + 1 } : post))
//     );
//   };

//   // Image and Video handling for Post Creation
//   const handleFileChange = (e, type) => {
//     const file = e.target.files[0];
//     if (file) {
//       setNewPost({ ...newPost, [type]: URL.createObjectURL(file) });
//     }
//   };

//   // Start dragging
//   const handleMouseDownLeft = (e) => {
//     setDraggingLeft(true);
//   };

//   const handleMouseDownRight = (e) => {
//     setDraggingRight(true);
//   };

//   // Stop dragging
//   const handleMouseUp = () => {
//     setDraggingLeft(false);
//     setDraggingRight(false);
//   };

//   // Handle mouse move during dragging
//   const handleMouseMove = (e) => {
//     if (draggingLeft) {
//       const newLeftWidth = Math.max(10, Math.min(40, (e.clientX / window.innerWidth) * 100));
//       setLeftWidth(newLeftWidth);
//     }
//     if (draggingRight) {
//       const newRightWidth = Math.max(10, Math.min(40, (window.innerWidth - e.clientX) / window.innerWidth * 100));
//       setRightWidth(newRightWidth);
//     }
//   };

//   // Add event listeners for dragging
//   React.useEffect(() => {
//     if (draggingLeft || draggingRight) {
//       window.addEventListener("mousemove", handleMouseMove);
//       window.addEventListener("mouseup", handleMouseUp);
//       return () => {
//         window.removeEventListener("mousemove", handleMouseMove);
//         window.removeEventListener("mouseup", handleMouseUp);
//       };
//     }
//   }, [draggingLeft, draggingRight]);

//   return (
//     <div style={{ display: "flex", fontFamily: "Arial, sans-serif" }}>
//       {/* Left Sidebar - Top Rated Mechanics */}
//       <aside
//         ref={leftBarRef}
//         style={{
//           width: `${leftWidth}%`,
//           padding: "10px",
//           backgroundColor: "#f9f9f9",
//           transition: "width 0.2s ease",
//           cursor: "ew-resize",
//         }}
//         onMouseDown={handleMouseDownLeft}
//       >
//         <h3>Top Rated Mechanics</h3>
//         <ul>
//           {topRatedMechanics.map((mechanic, index) => (
//             <li key={index} style={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
//               <img src={mechanic.image} alt={mechanic.name} style={{ width: "50px", borderRadius: "50%", marginRight: "10px" }} />
//               <div>
//                 <strong>{mechanic.name}</strong> <br />
//                 Rating: {mechanic.rating} ⭐ <br />
//                 {mechanic.price}
//               </div>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Main Content - Mechanic Posts */}
//       <main style={{ flex: 1, padding: "10px" }}>
//         <h2>Car Mechanic Posts</h2>

//         {/* Post Creation */}
//         <div style={{ marginBottom: "20px" }}>
//           <textarea
//             placeholder="Share something..."
//             value={newPost.text}
//             onChange={(e) => setNewPost({ ...newPost, text: e.target.value })}
//             style={{ width: "100%", height: "100px", marginBottom: "10px" }}
//           ></textarea>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => handleFileChange(e, "image")}
//             style={{ marginBottom: "10px" }}
//           />
//           <input
//             type="file"
//             accept="video/*"
//             onChange={(e) => handleFileChange(e, "video")}
//             style={{ marginBottom: "10px" }}
//           />
//           <button onClick={handlePostSubmit}>Post</button>
//         </div>

//         {/* Display Posts */}
//         {mechanicPosts.map((post) => (
//           <Post
//             key={post.id}
//             post={post}
//             comments={comments}
//             onLikePost={handleLikePost}
//             onCommentSubmit={handleCommentSubmit}
//             onLikeComment={handleLikeComment}
//           />
//         ))}
//       </main>

//       {/* Right Sidebar - Car Parts */}
//       <aside
//         ref={rightBarRef}
//         style={{
//           width: `${rightWidth}%`,
//           padding: "10px",
//           backgroundColor: "#f9f9f9",
//           transition: "width 0.2s ease",
//           cursor: "ew-resize",
//         }}
//         onMouseDown={handleMouseDownRight}
//       >
//         <h3>Car Parts</h3>
//         <ul>
//           {carParts.map((part, index) => (
//             <div
//               key={index}
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 marginBottom: "20px",
//                 padding: "10px",
//                 border: "1px solid #ccc",
//                 borderRadius: "5px",
//               }}
//             >
//               <img
//                 src={part.image}
//                 alt={part.name}
//                 style={{ width: "250px", height: "250px", objectFit: "cover", marginBottom: "10px" }}
//               />
//               <div style={{ textAlign: "center" }}>
//                 <strong>{part.name}</strong>
//                 <p>{part.price}</p>
//                 <p style={{ color: "green" }}>{part.discount} OFF</p>
//               </div>
//             </div>
//           ))}
//         </ul>
//       </aside>
//     </div>
//   );
// };

// export default CarService;





// 
















// import React, { useState } from 'react';

// const CarService = () => {
//   const [carProblem, setCarProblem] = useState('');
//   const [image, setImage] = useState(null);
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([
//     { sender: 'Mechanic', text: 'Hello! How can I help with your car repair?' },
//   ]);

//   // Mechanic details (example, these could come from a database or API in the real app)
//   const mechanic = {
//     name: 'Shawon',
//     rating: 4.5,
//   };

//   // Handle form submission for car problem
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Car Problem:', carProblem);
//     console.log('Image:', image);
//     alert('Your request has been submitted!');
//   };

//   // Handle sending a message (UI only, no backend)
//   const handleSendMessage = (event) => {
//     event.preventDefault();
//     if (message.trim() !== '') {
//       const msg = { sender: 'Me', text: message };
//       setMessages((prevMessages) => [...prevMessages, msg]);
//       setMessage('');
//     }
//   };

//   // Handle file input for image upload
//   const handleImageChange = (event) => {
//     setImage(event.target.files[0]);
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Request Car Repair Service</h2>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <div style={styles.formGroup}>
//           <label htmlFor="carProblem" style={styles.label}>Describe the car problem:</label>
//           <textarea
//             id="carProblem"
//             value={carProblem}
//             onChange={(e) => setCarProblem(e.target.value)}
//             style={styles.textarea}
//             placeholder="Describe the problem with your car"
//             required
//           />
//         </div>
//         <div style={styles.formGroup}>
//           <label htmlFor="carImage" style={styles.label}>Attach an image (optional):</label>
//           <input
//             type="file"
//             id="carImage"
//             accept="image/*"
//             onChange={handleImageChange}
//             style={styles.fileInput}
//           />
//         </div>
//         <button type="submit" style={styles.submitButton}>Submit Request</button>
//       </form>

//       {/* Live Chat UI */}
//       <div style={styles.chatContainer}>
//         <h3 style={styles.chatHeading}>Chat with Mechanic</h3>
        
//         {/* Mechanic Info Display */}
//         <div style={styles.mechanicInfo}>
//           <h4 style={styles.mechanicName}>{mechanic.name}</h4>
//           <div style={styles.mechanicRating}>
//             <span style={styles.starIcon}>⭐</span> {mechanic.rating} / 5
//           </div>
//         </div>
        
//         <div style={styles.messagesContainer}>
//           {messages.map((msg, index) => (
//             <div key={index} style={msg.sender === 'Me' ? styles.ownerMessage : styles.mechanicMessage}>
//               <strong>{msg.sender}:</strong> {msg.text}
//             </div>
//           ))}
//         </div>
//         <form onSubmit={handleSendMessage} style={styles.chatForm}>
//           <input
//             type="text"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="Type a message..."
//             style={styles.chatInput}
//           />
//           <button type="submit" style={styles.chatSendButton}>Send</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     padding: '40px 20px',
//     maxWidth: '900px',
//     margin: '0 auto',
//     backgroundColor: '#fff',
//     borderRadius: '12px',
//     boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//   },
//   heading: {
//     textAlign: 'center',
//     fontSize: '2.4rem',
//     marginBottom: '30px',
//     color: '#2c3e50',
//     fontWeight: '700',
//     textTransform: 'uppercase',
//     letterSpacing: '2px',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     marginBottom: '30px',
//   },
//   formGroup: {
//     marginBottom: '25px',
//   },
//   label: {
//     fontSize: '1.2rem',
//     marginBottom: '8px',
//     color: '#2980b9',
//     fontWeight: '500',
//   },
//   textarea: {
//     width: '100%',
//     padding: '15px',
//     fontSize: '1rem',
//     borderRadius: '10px',
//     border: '1px solid #ddd',
//     resize: 'vertical',
//     minHeight: '150px',
//     backgroundColor: '#f4f6f7',
//     color: '#2c3e50',
//     transition: 'border-color 0.3s ease',
//   },
//   textareaFocus: {
//     borderColor: '#3498db',
//   },
//   fileInput: {
//     padding: '12px',
//     fontSize: '1rem',
//     borderRadius: '10px',
//     border: '1px solid #ddd',
//     backgroundColor: '#f4f6f7',
//     color: '#2c3e50',
//     transition: 'border-color 0.3s ease',
//   },
//   submitButton: {
//     backgroundColor: '#e74c3c',
//     color: '#fff',
//     fontSize: '1.1rem',
//     padding: '15px 25px',
//     border: 'none',
//     borderRadius: '10px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//     width: '200px',
//     margin: '0 auto',
//   },
//   submitButtonHover: {
//     backgroundColor: '#c0392b',
//   },
//   chatContainer: {
//     marginTop: '50px',
//     borderTop: '1px solid #ddd',
//     paddingTop: '25px',
//   },
//   chatHeading: {
//     fontSize: '1.8rem',
//     color: '#2c3e50',
//     marginBottom: '20px',
//     textAlign: 'center',
//     textTransform: 'uppercase',
//     letterSpacing: '1px',
//     background: 'linear-gradient(to right, #3498db, #9b59b6)',
//     padding: '10px',
//     borderRadius: '5px',
//     color: '#fff',
//   },
//   mechanicInfo: {
//     marginBottom: '20px',
//     backgroundColor: '#ecf0f1',
//     padding: '15px',
//     borderRadius: '10px',
//     boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   mechanicName: {
//     fontSize: '1.5rem',
//     fontWeight: 'bold',
//     color: '#2980b9',
//   },
//   mechanicRating: {
//     fontSize: '1.2rem',
//     color: '#2c3e50',
//     marginTop: '5px',
//   },
//   starIcon: {
//     color: '#f39c12',
//   },
//   messagesContainer: {
//     height: '350px',
//     overflowY: 'scroll',
//     marginBottom: '25px',
//     padding: '15px',
//     backgroundColor: '#ecf0f1',
//     borderRadius: '10px',
//     border: '1px solid #ddd',
//   },
//   ownerMessage: {
//     textAlign: 'left',
//     marginBottom: '15px',
//     backgroundColor: '#f1c40f',
//     padding: '12px',
//     borderRadius: '10px',
//     color: '#2c3e50',
//     boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
//   },
//   mechanicMessage: {
//     textAlign: 'right',
//     marginBottom: '15px',
//     backgroundColor: '#9b59b6',
//     padding: '12px',
//     borderRadius: '10px',
//     color: '#fff',
//     boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
//   },
//   chatForm: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   chatInput: {
//     width: '85%',
//     padding: '12px',
//     borderRadius: '10px',
//     border: '1px solid #ddd',
//     fontSize: '1rem',
//     backgroundColor: '#f4f6f7',
//     color: '#2c3e50',
//     transition: 'border-color 0.3s ease',
//   },
//   chatSendButton: {
//     width: '15%',
//     padding: '12px',
//     backgroundColor: '#e74c3c',
//     color: 'white',
//     borderRadius: '10px',
//     border: 'none',
//     cursor: 'pointer',
//     fontSize: '1rem',
//     transition: 'background-color 0.3s ease',
//   },
//   chatSendButtonHover: {
//     backgroundColor: '#c0392b',
//   },
// };

// export default CarService;








import React, { useState } from 'react';

const CarService = () => {
  const [carProblem, setCarProblem] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'Mechanic', text: 'Hello! How can I help with your car repair?' },
  ]);
  const [isChatOpen, setIsChatOpen] = useState(false); // State to control chat box visibility

  // Mechanic details (example, these could come from a database or API in the real app)
  const mechanic = {
    name: 'Shawon',
    rating: 4.5,
  };

  // Handle form submission for car problem
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Car Problem:', carProblem);
    console.log('Image:', image);
    alert('Your request has been submitted!');
  };

  // Handle sending a message (UI only, no backend)
  const handleSendMessage = (event) => {
    event.preventDefault();
    if (message.trim() !== '') {
      const msg = { sender: 'Me', text: message };
      setMessages((prevMessages) => [...prevMessages, msg]);
      setMessage('');
    }
  };

  // Handle file input for image upload
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  // Toggle chat visibility
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Request Car Repair Service</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="carProblem" style={styles.label}>Describe the car problem:</label>
          <textarea
            id="carProblem"
            value={carProblem}
            onChange={(e) => setCarProblem(e.target.value)}
            style={styles.textarea}
            placeholder="Describe the problem with your car"
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="carImage" style={styles.label}>Attach an image (optional):</label>
          <input
            type="file"
            id="carImage"
            accept="image/*"
            onChange={handleImageChange}
            style={styles.fileInput}
          />
        </div>
        <button type="submit" style={styles.submitButton}>Submit Request</button>
      </form>

      {/* Button to toggle chat window */}
      <button onClick={toggleChat} style={styles.chatButton}>
        Chat with Mechanic
      </button>

      {/* Chat Pop-Up (Initially Hidden) */}
      {isChatOpen && (
        <div style={styles.chatModal}>
          <div style={styles.chatContent}>
            <div style={styles.mechanicInfo}>
              <h4 style={styles.mechanicName}>{mechanic.name}</h4>
              <div style={styles.mechanicRating}>
                <span style={styles.starIcon}>⭐</span> {mechanic.rating} / 5
              </div>
            </div>
            <div style={styles.messagesContainer}>
              {messages.map((msg, index) => (
                <div key={index} style={msg.sender === 'Me' ? styles.ownerMessage : styles.mechanicMessage}>
                  <strong>{msg.sender}:</strong> {msg.text}
                </div>
              ))}
            </div>
            <form onSubmit={handleSendMessage} style={styles.chatForm}>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                style={styles.chatInput}
              />
              <button type="submit" style={styles.chatSendButton}>Send</button>
            </form>
            <button onClick={toggleChat} style={styles.closeChatButton}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '900px',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  heading: {
    textAlign: 'center',
    fontSize: '2.4rem',
    marginBottom: '30px',
    color: '#2c3e50',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '30px',
  },
  formGroup: {
    marginBottom: '25px',
  },
  label: {
    fontSize: '1.2rem',
    marginBottom: '8px',
    color: '#2980b9',
    fontWeight: '500',
  },
  textarea: {
    width: '100%',
    padding: '15px',
    fontSize: '1rem',
    borderRadius: '10px',
    border: '1px solid #ddd',
    resize: 'vertical',
    minHeight: '150px',
    backgroundColor: '#f4f6f7',
    color: '#2c3e50',
    transition: 'border-color 0.3s ease',
  },
  fileInput: {
    padding: '12px',
    fontSize: '1rem',
    borderRadius: '10px',
    border: '1px solid #ddd',
    backgroundColor: '#f4f6f7',
    color: '#2c3e50',
    transition: 'border-color 0.3s ease',
  },
  submitButton: {
    backgroundColor: '#e74c3c',
    color: '#fff',
    fontSize: '1.1rem',
    padding: '15px 25px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    width: '200px',
    margin: '0 auto',
  },
  chatButton: {
    backgroundColor: '#3498db',
    color: '#fff',
    fontSize: '1.2rem',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    width: '200px',
    margin: '20px auto',
  },
  chatModal: {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '1000',
  },
  chatContent: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '15px',
    maxWidth: '500px',
    width: '100%',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  mechanicInfo: {
    marginBottom: '20px',
    backgroundColor: '#ecf0f1',
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mechanicName: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#2980b9',
  },
  mechanicRating: {
    fontSize: '1.2rem',
    color: '#2c3e50',
    marginTop: '5px',
  },
  starIcon: {
    color: '#f39c12',
  },
  messagesContainer: {
    height: '350px',
    overflowY: 'scroll',
    marginBottom: '25px',
    padding: '15px',
    backgroundColor: '#ecf0f1',
    borderRadius: '10px',
    border: '1px solid #ddd',
  },
  ownerMessage: {
    textAlign: 'left',
    marginBottom: '15px',
    backgroundColor: '#f1c40f',
    padding: '12px',
    borderRadius: '10px',
    color: '#2c3e50',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  mechanicMessage: {
    textAlign: 'right',
    marginBottom: '15px',
    backgroundColor: '#9b59b6',
    padding: '12px',
    borderRadius: '10px',
    color: '#fff',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  chatForm: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chatInput: {
    width: '85%',
    padding: '12px',
    borderRadius: '10px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    backgroundColor: '#f4f6f7',
    color: '#2c3e50',
    transition: 'border-color 0.3s ease',
  },
  chatSendButton: {
    width: '15%',
    padding: '12px',
    backgroundColor: '#e74c3c',
    color: 'white',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease',
    margin: '10px', 
  },
  closeChatButton: {
    backgroundColor: '#95a5a6',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '1rem',
    marginTop: '15px',
    width: '100%',
    transition: 'background-color 0.3s ease',
  },
};

export default CarService;

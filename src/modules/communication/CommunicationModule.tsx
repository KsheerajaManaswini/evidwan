import React, { useState, useEffect } from 'react';
import './CommunicationModule.css';

interface ForumPost {
  postId: number;
  courseId: number;
  userId: number;
  message: string;
  timestamp: string;
}

interface Notification {
  notificationId: number;
  userId: number;
  message: string;
  type: 'Assignment Due' | 'New Course' | 'Announcement';
}

const CommunicationModule: React.FC = () => {
  const [forumPosts, setForumPosts] = useState<ForumPost[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Fetch initial data for forum posts and notifications
    // Replace with actual API calls
    // Example:
    // fetch('/api/forumPosts').then(res => res.json()).then(data => setForumPosts(data));
    // fetch('/api/notifications').then(res => res.json()).then(data => setNotifications(data));
  }, []);

  const handlePostMessage = () => {
    if (newMessage.trim() === '') return;

    const newPost: ForumPost = {
      postId: Date.now(),
      courseId: 101, // Example course ID
      userId: 1, // Example user ID
      message: newMessage,
      timestamp: new Date().toISOString(),
    };

    // Update state and send to backend
    setForumPosts([...forumPosts, newPost]);
    setNewMessage('');

    // Send newPost to backend API
    // Example:
    // fetch('/api/forumPosts', { method: 'POST', body: JSON.stringify(newPost) });
  };

  return (
    <div className="communication-module">
      <div className="forum-section">
        <h2>Forum</h2>
        <div className="forum-posts">
          {forumPosts.map((post) => (
            <div key={post.postId} className="forum-post">
              <p>{post.message}</p>
              <span>{new Date(post.timestamp).toLocaleString()}</span>
            </div>
          ))}
        </div>
        <div className="new-message">
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button onClick={handlePostMessage}>Post</button>
        </div>
      </div>
      <div className="notifications-section">
        <h2>Notifications</h2>
        <ul className="notifications-list">
          {notifications.map((notification) => (
            <li key={notification.notificationId} className={`notification ${notification.type.toLowerCase().replace(' ', '-')}`}>
              <p>{notification.message}</p>
              <span>{notification.type}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommunicationModule;

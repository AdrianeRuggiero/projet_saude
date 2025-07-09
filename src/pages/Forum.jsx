import React, { useState } from 'react';
import Header from '../components/Header';

const Forum = () => {
  const [posts, setPosts] = useState([
    { id: 1, author: 'Alice', content: 'Bonjour à tous !' },
    { id: 2, author: 'Thomas', content: 'Quelqu’un a des ressources pour un enfant de 4 ans ?' }
  ]);
  const [newPost, setNewPost] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim() === '') return;

    const post = {
      id: Date.now(),
      author: 'Vous',
      content: newPost
    };

    setPosts([post, ...posts]);
    setNewPost('');
  };

  return (
    <div className="bg-light min-vh-100">
      <Header />
      <div className="container py-5">
        <h2 className="text-center mb-4">Forum d'entraide</h2>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Écrivez votre message..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              rows={3}
            />
          </div>
          <button type="submit" className="btn btn-info">Publier</button>
        </form>

        {/* Liste des messages */}
        <div className="list-group">
          {posts.map((post) => (
            <div key={post.id} className="list-group-item list-group-item-action mb-2 shadow-sm">
              <strong>{post.author} :</strong>
              <p className="mb-1">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forum;

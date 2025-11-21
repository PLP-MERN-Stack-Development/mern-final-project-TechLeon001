import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Home.css'

const Home = () => {
  const { user } = useAuth()

  return (
    <div className="home">
      <div className="container">
        <div className="hero">
          <h1>Welcome to MERN Capstone Project</h1>
          <p className="hero-subtitle">
            A full-stack application built with MongoDB, Express, React, and Node.js
          </p>
          {!user ? (
            <div className="hero-actions">
              <Link to="/register" className="btn btn-primary">
                Get Started
              </Link>
              <Link to="/login" className="btn btn-secondary">
                Login
              </Link>
            </div>
          ) : (
            <div className="hero-actions">
              <Link to="/dashboard" className="btn btn-primary">
                Go to Dashboard
              </Link>
            </div>
          )}
        </div>

        <div className="features">
          <div className="feature-card">
            <h3>🔐 Authentication</h3>
            <p>Secure user authentication with JWT tokens</p>
          </div>
          <div className="feature-card">
            <h3>📊 Real-time Updates</h3>
            <p>Live updates using Socket.io</p>
          </div>
          <div className="feature-card">
            <h3>🎨 Modern UI</h3>
            <p>Beautiful and responsive user interface</p>
          </div>
          <div className="feature-card">
            <h3>✅ Tested</h3>
            <p>Comprehensive test coverage</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home


import { useAuth } from '../context/AuthContext'
import './Dashboard.css'

const Dashboard = () => {
  const { user } = useAuth()

  return (
    <div className="dashboard">
      <div className="container">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <p>Welcome back, {user?.name}!</p>
        </div>

        <div className="dashboard-content">
          <div className="card">
            <h3>User Information</h3>
            <div className="user-info">
              <p><strong>Name:</strong> {user?.name}</p>
              <p><strong>Email:</strong> {user?.email}</p>
              <p><strong>Role:</strong> {user?.role}</p>
            </div>
          </div>

          <div className="card">
            <h3>Getting Started</h3>
            <p>This is your dashboard. You can customize this page based on your project requirements.</p>
            <ul>
              <li>Add your project-specific features here</li>
              <li>Create additional pages and components</li>
              <li>Implement real-time features with Socket.io</li>
              <li>Add data visualization and charts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard


# MERN Stack Capstone Project

A comprehensive full-stack MERN (MongoDB, Express, React, Node.js) application showcasing modern web development practices.

## 🚀 Project Overview

This project demonstrates a complete MERN stack application with:
- **Backend**: RESTful API with Express.js, MongoDB, JWT authentication, and Socket.io
- **Frontend**: React application with modern UI, routing, and state management
- **Features**: User authentication, real-time updates, responsive design, and comprehensive testing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **MongoDB** (local installation or MongoDB Atlas account)
- **npm** or **yarn**
- **Git**

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd mern-final-project-TechLeon001
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file from example
cp .env.example .env

# Edit .env file with your configuration
# - Set your MongoDB connection string
# - Set a secure JWT_SECRET
# - Configure CLIENT_URL if needed
```

**Backend Environment Variables:**
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/mern-capstone
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=7d
CLIENT_URL=http://localhost:3000
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install
```

### 4. Start the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
Backend will run on `http://localhost:5000`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
Frontend will run on `http://localhost:3000`

## 📁 Project Structure

```
mern-final-project-TechLeon001/
├── backend/
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Custom middleware (auth, validation, error handling)
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── tests/            # Test files
│   ├── server.js         # Express server setup
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/   # Reusable React components
│   │   ├── context/      # React Context providers
│   │   ├── pages/        # Page components
│   │   ├── App.jsx       # Main App component
│   │   └── main.jsx      # Entry point
│   ├── index.html
│   └── package.json
├── README.md
└── Week8-Assignment.md
```

## 🔑 Features

### Backend Features
- ✅ RESTful API with Express.js
- ✅ MongoDB database with Mongoose
- ✅ JWT-based authentication
- ✅ Password hashing with bcrypt
- ✅ Input validation with express-validator
- ✅ Error handling middleware
- ✅ Rate limiting
- ✅ Security headers with Helmet
- ✅ CORS configuration
- ✅ Socket.io for real-time features
- ✅ Comprehensive test setup

### Frontend Features
- ✅ React with modern hooks
- ✅ React Router for navigation
- ✅ Context API for state management
- ✅ Axios for API calls
- ✅ Form validation
- ✅ Toast notifications
- ✅ Responsive design
- ✅ Protected routes
- ✅ User authentication flow

## 🧪 Testing

### Backend Tests

```bash
cd backend
npm test
```

### Frontend Tests

```bash
cd frontend
npm test
```

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (Protected)

### Users
- `GET /api/users` - Get all users (Admin only)
- `GET /api/users/:id` - Get single user (Protected)
- `PUT /api/users/:id` - Update user (Protected)
- `DELETE /api/users/:id` - Delete user (Admin only)

### Health Check
- `GET /api/health` - Server health check

## 🚢 Deployment

### Backend Deployment (Render/Railway/Heroku)

1. Set environment variables in your hosting platform
2. Ensure MongoDB Atlas connection string is configured
3. Deploy the backend directory

### Frontend Deployment (Vercel/Netlify)

1. Build the frontend: `npm run build`
2. Deploy the `dist` folder
3. Update API URLs in environment variables

## 📝 Development Notes

- The project uses ES6 modules (`import/export`)
- Backend uses `nodemon` for development auto-reload
- Frontend uses Vite for fast development and building
- Socket.io is configured for real-time features (ready to implement)

## 🔐 Security Features

- Password hashing with bcrypt
- JWT token authentication
- Rate limiting on API routes
- Helmet.js for security headers
- Input validation and sanitization
- CORS configuration

## 📖 Next Steps

1. **Choose your project idea** from the assignment or create your own
2. **Design your database schema** - Add models in `backend/models/`
3. **Create API endpoints** - Add routes in `backend/routes/`
4. **Build frontend features** - Add pages and components in `frontend/src/`
5. **Implement real-time features** - Use Socket.io for live updates
6. **Write tests** - Add comprehensive test coverage
7. **Deploy** - Deploy both backend and frontend to production

## 🤝 Contributing

This is a capstone project. Follow the assignment requirements and commit regularly to show progress.

## 📄 License

This project is part of a course assignment.

## 🔗 Links

- [Live Application](#) - Add your deployed URL here
- [Video Demonstration](#) - Add your demo video link here
- [API Documentation](#) - Add API docs link here

## 📸 Screenshots

Add screenshots of your application here once deployed.

---

**Note**: Remember to update this README with:
- Your specific project description
- Deployed application URL
- Video demonstration link
- Screenshots of key features
- Any additional setup instructions specific to your project

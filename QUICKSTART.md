# Quick Start Guide

Get your MERN stack application up and running in minutes!

## Prerequisites Check

Make sure you have:
- ✅ Node.js (v18+) installed: `node --version`
- ✅ npm installed: `npm --version`
- ✅ MongoDB running locally OR MongoDB Atlas account

## Step-by-Step Setup

### 1. Install Backend Dependencies

```bash
cd backend
npm install
```

### 2. Configure Backend Environment

```bash
# Copy the example env file
cp .env.example .env

# Edit .env with your settings:
# - MONGODB_URI: Your MongoDB connection string
# - JWT_SECRET: A random secret key (use a strong password generator)
# - PORT: 5000 (default)
```

**For MongoDB Atlas:**
- Create a free cluster at https://www.mongodb.com/cloud/atlas
- Get your connection string
- Replace `<password>` with your database password
- Example: `mongodb+srv://username:password@cluster.mongodb.net/mern-capstone`

**For Local MongoDB:**
- Make sure MongoDB is running: `mongod` or `brew services start mongodb-community`
- Use: `mongodb://localhost:27017/mern-capstone`

### 3. Install Frontend Dependencies

```bash
# From project root
cd ../frontend
npm install
```

### 4. Start the Application

**Terminal 1 - Start Backend:**
```bash
cd backend
npm run dev
```
✅ Backend should be running on http://localhost:5000

**Terminal 2 - Start Frontend:**
```bash
cd frontend
npm run dev
```
✅ Frontend should be running on http://localhost:3000

### 5. Test the Application

1. Open http://localhost:3000 in your browser
2. Click "Register" to create a new account
3. Login with your credentials
4. Access the Dashboard

## Troubleshooting

### MongoDB Connection Error
- Check if MongoDB is running
- Verify your connection string in `.env`
- For Atlas: Check IP whitelist and credentials

### Port Already in Use
- Change PORT in backend `.env` file
- Update CLIENT_URL if you change the port

### CORS Errors
- Ensure CLIENT_URL in backend `.env` matches your frontend URL
- Default: `http://localhost:3000`

### Module Not Found Errors
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

## Next Steps

1. ✅ Your app is running!
2. 📝 Choose your project idea from `Week8-Assignment.md`
3. 🗄️ Design your database schema
4. 🔧 Add your custom features
5. 🧪 Write tests
6. 🚀 Deploy to production

## Development Tips

- Backend auto-reloads with `nodemon` (npm run dev)
- Frontend hot-reloads automatically with Vite
- Check browser console and terminal for errors
- Use Postman or Thunder Client to test API endpoints

Happy coding! 🎉


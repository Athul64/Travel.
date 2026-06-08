# 🌍 Travel Blog - MERN Stack Application

A full-stack web application for sharing travel destinations, collecting testimonials, and managing visitor inquiries. Built with the **MERN stack** (MongoDB, Express.js, React, Node.js).

## ✨ Features

- **📍 Destinations Management**: Browse and manage travel destinations with detailed information
- **⭐ Testimonials**: Display user reviews and experiences
- **📧 Contact Form**: Collect visitor inquiries and feedback
- **🎨 Modern UI**: Responsive design with Material-UI and Tailwind CSS
- **🔄 REST API**: Fully functional backend API with CRUD operations
- **🗄️ Database**: MongoDB integration for data persistence

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js 5.2
- **Database**: MongoDB with Mongoose ODM
- **Utilities**: 
  - CORS for cross-origin requests
  - dotenv for environment variables
  - Nodemon for development

### Frontend
- **Library**: React 19
- **Styling**: 
  - Tailwind CSS
  - Material-UI (MUI)
- **HTTP Client**: Axios
- **Routing**: React Router DOM
- **Build Tool**: Create React App

## 📁 Project Structure

```
MERN/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection config
│   ├── models/
│   │   ├── Contact.js            # Contact schema
│   │   ├── Destination.js        # Destination schema
│   │   └── Testimonial.js        # Testimonial schema
│   ├── routes/
│   │   ├── contactRoutes.js      # Contact API endpoints
│   │   ├── destinationRoutes.js  # Destination API endpoints
│   │   └── testimonialRoutes.js  # Testimonial API endpoints
│   ├── package.json
│   ├── server.js                 # Express server setup
│   └── Project Setup.txt
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Footer.jsx         # Footer component
    │   │   └── TravelCard.jsx     # Travel destination card
    │   ├── pages/
    │   │   └── Home.jsx           # Home page
    │   ├── App.js                 # Main App component
    │   ├── App.css
    │   ├── index.js
    │   ├── index.css
    │   └── setupTests.js
    ├── package.json
    ├── tailwind.config.js
    └── postcss.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

   The backend server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

   The frontend will open at `http://localhost:3000`

## 📚 API Endpoints

### Destinations
- `GET /api/destinations` - Get all destinations
- `GET /api/destinations/:id` - Get a specific destination
- `POST /api/destinations` - Create a new destination
- `PUT /api/destinations/:id` - Update a destination
- `DELETE /api/destinations/:id` - Delete a destination

### Testimonials
- `GET /api/testimonials` - Get all testimonials
- `GET /api/testimonials/:id` - Get a specific testimonial
- `POST /api/testimonials` - Create a new testimonial
- `PUT /api/testimonials/:id` - Update a testimonial
- `DELETE /api/testimonials/:id` - Delete a testimonial

### Contact
- `GET /api/contact` - Get all contact messages
- `POST /api/contact` - Submit a contact message
- `DELETE /api/contact/:id` - Delete a contact message

## 🔧 Available Scripts

### Backend
```bash
npm start    # Run server with Node
npm run dev  # Run server with Nodemon (auto-restart on changes)
```

### Frontend
```bash
npm start    # Start development server
npm run build    # Create production build
npm test     # Run tests
npm run eject    # Eject from Create React App (irreversible)
```

## 📦 Dependencies

### Backend
```json
{
  "cors": "^2.8.6",
  "dotenv": "^17.2.3",
  "express": "^5.2.1",
  "mongoose": "^9.1.5",
  "nodemon": "^3.1.11" (dev)
}
```

### Frontend
```json
{
  "react": "^19.2.4",
  "react-dom": "^19.2.4",
  "react-router-dom": "^7.13.0",
  "axios": "^1.13.4",
  "@mui/material": "^7.3.7",
  "@emotion/react": "^11.14.0",
  "@emotion/styled": "^11.14.1"
}
```

## 🎯 Usage

1. **Browse Destinations**: View all available travel destinations on the home page
2. **Read Testimonials**: Check out reviews and experiences from other travelers
3. **Submit Feedback**: Use the contact form to send inquiries or feedback
4. **Manage Data**: Use API endpoints to manage destinations and testimonials

## 📝 Environment Variables

Create a `.env` file in the backend directory:

```
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/travel-blog

# Server
PORT=5000
NODE_ENV=development
```

## 🚀 Deployment

### Backend (e.g., Heroku, Render, Railway)
1. Push code to GitHub
2. Connect your repository to deployment platform
3. Set environment variables
4. Deploy

### Frontend (e.g., Vercel, Netlify)
1. Run `npm run build`
2. Deploy the `build` folder
3. Update API endpoints for production

## 📋 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the ISC License.

## 👤 Author

Created as a MERN stack learning project.

## 🤝 Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

**Happy traveling! 🌎✈️**
"# Travel." 

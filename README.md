# airbnb-clone-mern
A full-stack web application inspired by Airbnb, built using Node.js, Express, MongoDB, and EJS templating. This project replicates core Airbnb functionality including property listings, user authentication and reviews.
The goal of this project was to implement a complete CRUD-based application with authentication, cloud image storage, and MVC architecture.

🌍 Live Demo  
🔗 https://airbnb-clone-mern-05mt.onrender.com

✨ Features
User Authentication: Secure signup/login system with session management
Property Listings: Browse, create, update, and delete accommodation listings
Reviews & Ratings: Users can leave reviews and ratings for properties
Image Uploads: Cloudinary integration for image storage and management
Responsive Design: Mobile-friendly interface built with CSS
Search & Filter: Find properties based on various criteria
CRUD Operations: Full create, read, update, and delete functionality

🛠️ Tech Stack
Backend
Node.js - Runtime environment
Express.js - Web application framework
MongoDB - NoSQL database
Mongoose - MongoDB object modeling

Frontend
EJS - Templating engine
CSS - Styling
JavaScript - Client-side interactivity

Additional Technologies
Cloudinary - Image hosting and management
Express Session - Session management
Passport.js - Authentication middleware 
Joi - Schema validation
Method Override - HTTP verb support

📁 Project Structure
airbnb-clone-mern/
├── controllers/        # Route controllers (business logic)
├── models/            # Database models (Mongoose schemas)
├── routes/            # Express routes
├── views/             # EJS templates
├── public/            # Static files (CSS, JS, images)
├── utils/             # Utility functions
├── init/              # Database initialization scripts
├── middleware.js      # Custom middleware
├── schema.js          # Validation schemas
├── cloudConfig.js     # Cloudinary configuration
├── app.js             # Main application file
└── package.json       # Project dependencies

🚀 Getting Started
#Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Cloudinary account (for image uploads)

#Installation
i) Clone the repository
git clone https://github.com/RifqaFatima/airbnb-clone-mern.git
cd airbnb-clone-mern

ii) Install dependencies
npm install

iii) Set up environment variables
Create a .env file in the root directory:
   PORT=3000
   MONGO_URL=mongodb://localhost:27017/airbnb-clone
   SESSION_SECRET=your_session_secret_here
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret

iv)Initialize the database (if using sample data)
node init/index.js

v) Start the application
npm start

vi) Access the application
Open your browser and navigate to http://localhost:3000

🚀 Deployment
The application is deployed on Render.
- Backend & Database hosted on Render
- MongoDB Atlas for cloud database
- Cloudinary for media storage

🔒 Environment Variables
The following environment variables are required to run the application:

- PORT → Server port (default: 3000)
- MONGO_URL → MongoDB connection string
- SESSION_SECRET → Secret key used for session encryption
- CLOUD_NAME → Cloudinary cloud name
- CLOUD_API_KEY → Cloudinary API key
- CLOUD_API_SECRET → Cloudinary API secret

👤 Author
Rifqa Fatima
GitHub: @RifqaFatima

🙏 Acknowledgments
Inspired by Airbnb
Built as a learning project to practice MERN stack development
Thanks to the open-source community for various packages and tools

🔮 Future Enhancements
 --> Advanced search and filtering options
 --> Integrate interactive maps for location based property discovery
-->  Booking system with calendar integration
 --> Payment gateway integration
 --> Email notifications
 

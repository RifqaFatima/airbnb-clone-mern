# 🏠 Airbnb Clone - MERN Stack

A full-stack web application inspired by Airbnb, built using Node.js, Express, MongoDB, and EJS templating. This project replicates core Airbnb functionality including property listings, user authentication, reviews.
The goal of this project was to implement a complete CRUD-based application with authentication, cloud image storage, and MVC architecture.


## 🌍 Live Demo  
🔗https://airbnb-clone-mern-05mt.onrender.com


## ✨ Features

- **User Authentication**: Secure signup/login system with session management
- **Property Listings**: Browse, create, update, and delete accommodation listings
- **Reviews & Ratings**: Users can leave reviews and ratings for properties
- **Image Uploads**: Cloudinary integration for image storage and management
- **Responsive Design**: Mobile-friendly interface built with CSS

- **CRUD Operations**: Full create, read, update, and delete functionality

  
## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Frontend
- **EJS** - Templating engine
- **CSS** - Styling
- **JavaScript** - Client-side interactivity

### Additional Technologies
- **Cloudinary** - Image hosting and management
- **Express Session** - Session management
- **Passport.js** - Authentication middleware (likely)
- **Joi** - Schema validation
- **Method Override** - HTTP verb support


## 🏗️ Architecture

### The project follows the MVC (Model-View-Controller) pattern:

- Models: Mongoose schemas
- Views: EJS templates
- Controllers: Route handling logic
- Middleware: Authentication and validation

## 📁 Project Structure

```
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
```

## 📸 Screenshots

<img width="1064" height="2058" alt="airbnb-clone-mern-05mt onrender com_listings" src="https://github.com/user-attachments/assets/ed00da74-46ca-4e41-9248-f52626f08b74" />

<img width="1064" height="2603" alt="airbnb-clone-mern-05mt onrender com_listings_69915f3f22be36f77a858545" src="https://github.com/user-attachments/assets/5187d09c-9b0d-44ec-9e0b-859b81e534b0" />

<img width="1064" height="1029" alt="airbnb-clone-mern-05mt onrender com_listings_new" src="https://github.com/user-attachments/assets/b0748b0b-a486-4885-8b4a-b1f09520f97d" />

<img width="1083" height="911" alt="airbnb-clone-mern-05mt onrender com_signup" src="https://github.com/user-attachments/assets/8da9ac27-f59d-418c-b97f-ea537ab01cb4" />


## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Cloudinary account (for image uploads)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RifqaFatima/airbnb-clone-mern.git
   cd airbnb-clone-mern
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   MONGO_URL=mongodb://localhost:27017/airbnb-clone
   SESSION_SECRET=your_session_secret_here
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   ```

4. **Initialize the database** (if using sample data)
   ```bash
   node init/index.js
   ```

5. **Start the application**
   ```bash
   npm start
   ```

6. **Access the application**
   
   Open your browser and navigate to `http://localhost:3000`

## 🚀 Deployment

### The application is deployed on Render.

- Backend & Database hosted on Render
- MongoDB Atlas for cloud database
- Cloudinary for media storage


## 🔒 Environment Variables

| Variable | Description |
|----------|-------------|
| `PORT` | Server port (default: 3000) |
| `MONGO_URL` | MongoDB connection string |
| `SESSION_SECRET` | Secret key for session encryption |
| `CLOUD_NAME` | Cloudinary cloud name |
| `CLOUD_API_KEY` | Cloudinary API key |
| `CLOUD_API_SECRET` | Cloudinary API secret |

## 🗄️ Database Schema

The application uses the following main models:

- **User** - User accounts and authentication
- **Listing** - Property listings with details
- **Review** - User reviews and ratings


## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Rifqa Fatima**

- GitHub: [@RifqaFatima](https://github.com/RifqaFatima)

## 🙏 Acknowledgments

- Inspired by [Airbnb](https://www.airbnb.com)
- Built as a learning project to practice MERN stack development
- Thanks to the open-source community for various packages and tools

## 📸 Screenshots

*Add screenshots of your application here to showcase its features*

## 🔮 Future Enhancements

- [ ] Advanced search and filtering options: Find properties based on various criteria
- [ ] Interactive Maps: Location-based features for property discovery
- [ ] Booking system with calendar integration
- [ ] Payment gateway integration
- [ ] Email notifications




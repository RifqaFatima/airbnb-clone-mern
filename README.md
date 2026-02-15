# 🏠 Airbnb Clone - MERN Stack

A full-stack web application inspired by Airbnb, built using Node.js, Express, MongoDB, and EJS templating. This project replicates core Airbnb functionality including property listings, user authentication, reviews, and interactive maps.

## ✨ Features

- **User Authentication**: Secure signup/login system with session management
- **Property Listings**: Browse, create, update, and delete accommodation listings
- **Reviews & Ratings**: Users can leave reviews and ratings for properties
- **Image Uploads**: Cloudinary integration for image storage and management
- **Interactive Maps**: Location-based features for property discovery
- **Responsive Design**: Mobile-friendly interface built with CSS
- **Search & Filter**: Find properties based on various criteria
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

## 📝 Usage

### For Users
1. **Sign Up / Login** - Create an account or log in to access full features
2. **Browse Listings** - Explore available properties
3. **View Details** - Click on a listing to see full details, location, and reviews
4. **Leave Reviews** - Share your experience and rate properties
5. **Manage Listings** (for hosts) - Create, edit, or delete your own listings

### For Developers
- Routes are defined in the `routes/` directory
- Database models are in the `models/` directory
- Business logic is separated into `controllers/`
- Validation schemas are in `schema.js`
- Middleware functions are in `middleware.js`

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

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

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

- [ ] Advanced search and filtering options
- [ ] Booking system with calendar integration
- [ ] Payment gateway integration
- [ ] Real-time messaging between hosts and guests
- [ ] Wishlists/Favorites functionality
- [ ] Email notifications
- [ ] Multi-language support
- [ ] Mobile app (React Native)

---

**Note**: This is a learning project and is not affiliated with Airbnb, Inc.

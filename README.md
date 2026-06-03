# Productify

A modern full-stack web application for managing products with user authentication, product listings, and community comments. Built with React, Express, PostgreSQL, and TypeScript-ready technologies.

## 🌐 Live Deployment

- **Frontend**: https://productify-ui.onrender.com

## 🎯 Features

- **User Authentication**: Secure authentication powered by Clerk
- **Product Management**: Create, read, and manage products with ease
- **Comments System**: Community-driven comments on products
- **Responsive Design**: Mobile-friendly UI built with React and Tailwind CSS
- **Real-time Queries**: Optimized data fetching with React Query
- **Database**: PostgreSQL with Drizzle ORM for type-safe queries
- **CORS Support**: Cross-origin requests enabled for frontend-backend communication

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js (ES Modules)
- **Framework**: Express.js 5.x
- **Authentication**: Clerk
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM
- **Utilities**: CORS, dotenv

### Frontend
- **Framework**: React 19.x
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4.x with DaisyUI
- **Routing**: React Router 7.x
- **HTTP Client**: Axios
- **State Management**: React Query (TanStack)
- **Icons**: Lucide React
- **Linting**: ESLint

## 📁 Project Structure

```
productify/
├── backend/
│   ├── src/
│   │   ├── controllers/        # Route controllers
│   │   ├── models/             # Database schema
│   │   ├── routes/             # API routes
│   │   ├── middlewares/        # Custom middlewares
│   │   ├── db/                 # Database configuration
│   │   ├── drizzle/            # Drizzle migrations
│   │   └── utils/              # Helper utilities
│   ├── app.js                  # Express app setup
│   ├── server.js               # Server entry point
│   ├── drizzle.config.js       # Drizzle configuration
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/         # React components
    │   ├── Hooks/              # Custom React hooks
    │   ├── lib/                # Utility libraries
    │   ├── App.jsx             # Main app component
    │   ├── main.jsx            # App entry point
    │   └── index.css           # Global styles
    ├── index.html              # HTML entry point
    └── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/saurabh786-max/productify.git
   cd productify
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   ```

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

**Backend Development Server**
```bash
cd backend
npm run dev
```
The backend will start at `http://localhost:3000`

**Frontend Development Server**
```bash
cd frontend
npm run dev
```
The frontend will start at `http://localhost:5173`

### Building for Production

**Frontend**
```bash
cd frontend
npm run build
npm run preview
```

**Linting**
```bash
cd frontend
npm run lint
```

## 🔌 API Endpoints

### Users
- `GET /api/users` - Get all users
- `POST /api/users` - Create a new user
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Products
- `GET /api/products` - Get all products
- `POST /api/products` - Create a new product
- `GET /api/products/:id` - Get product by ID
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Comments
- `GET /api/comments` - Get all comments
- `POST /api/comments` - Create a new comment
- `GET /api/comments/:id` - Get comment by ID
- `PUT /api/comments/:id` - Update comment
- `DELETE /api/comments/:id` - Delete comment

## 🔐 Authentication

This application uses [Clerk](https://clerk.com) for authentication. Clerk provides:
- User sign-up and login
- Social authentication options
- Multi-factor authentication
- Session management
- User profile management

To set up Clerk:
1. Create an account at [clerk.com](https://clerk.com)
2. Create a new application
3. Get your API keys
4. Add them to your `.env` files

## 📦 Database Schema

The application uses PostgreSQL with Drizzle ORM. Schema is defined in `backend/src/models/schema.js`.

To run migrations:
```bash
cd backend
npx drizzle-kit push
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 👨‍💻 Author

- **Saurabh** - [GitHub](https://github.com/saurabh786-max)

## 📞 Support

For support, email me at `saurabhshah506@gmail.com` or open an issue on the GitHub repository.

## 🔗 Useful Links

- [Express.js Documentation](https://expressjs.com)
- [React Documentation](https://react.dev)
- [Drizzle ORM Documentation](https://orm.drizzle.team)
- [Clerk Documentation](https://clerk.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev)

---

**Happy Coding!** 🎉

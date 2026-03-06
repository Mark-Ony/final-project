# 🏗️ EXPRESS-TS-API-STARTER

[![npm version](https://badge.fury.io/js/express-ts-api-starter.svg)](https://badge.fury.io/js/express-ts-api-starter)
[![npm downloads](https://img.shields.io/npm/dm/express-ts-api-starter.svg)](https://www.npmjs.com/package/express-ts-api-starter)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![Express.js](https://img.shields.io/badge/Express-5.1-green.svg)](https://expressjs.com/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-brightgreen.svg)](https://nodejs.org/)

> **Opinionated Express + TypeScript starter with JWT authentication, MongoDB integration, comprehensive security middleware, input validation, error handling, and production-ready architecture—get your REST API running in minutes, not hours.**

---

## 📌 Quick Demo

**Create a new project in seconds:**

```bash
npx express-ts-api-starter my-api
cd my-api
npm install
npm run dev
```

Your API is ready with authentication, validation, and error handling out of the box!

---

## 🚀 Quick Start

### Option 1: Using CLI (Recommended)

Create a new project with a single command:

```bash
npx express-ts-api-starter my-api
```

This will:
- ✅ Create a new project directory
- ✅ Copy all template files and folder structure
- ✅ Set up configuration files
- ✅ Create `.env` file from `.env.example`

Then:

```bash
cd my-api
npm install
npm run dev
```

### Option 2: Manual Installation

```bash
# Clone the repository
git clone https://github.com/nikhilpktcr/express-ts-api-starter.git my-api
cd my-api

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start development server (hot reload enabled)
npm run dev
```

**That's it!** Your server is running at `http://localhost:5000` with:
- ✅ JWT authentication ready
- ✅ MongoDB connection configured
- ✅ Security middleware active
- ✅ Request logging enabled
- ✅ Error handling in place

---

## ⚡ Why Choose This Over Others?

### vs. Bare Express Setup

| Feature | Bare Express | express-ts-api-starter |
|---------|-------------|------------------------|
| **Setup Time** | 2-4 hours | **2 minutes** ⚡ |
| **TypeScript** | Manual config | ✅ Pre-configured |
| **Authentication** | Build from scratch | ✅ JWT + bcryptjs ready |
| **Error Handling** | Manual try-catch | ✅ Global middleware |
| **Request Logging** | Manual setup | ✅ Morgan with request IDs |
| **Input Validation** | Manual validation | ✅ express-validator integrated |
| **Security** | Manual headers | ✅ Helmet + CORS configured |
| **Database** | Manual connection | ✅ MongoDB/Mongoose ready |
| **Testing** | Manual Jest setup | ✅ Jest configured with examples |
| **Code Quality** | No linting | ✅ ESLint + Prettier ready |
| **Graceful Shutdown** | Not included | ✅ Production-ready |

### vs. Other Starters

| Feature | Other Starters | express-ts-api-starter |
|---------|---------------|------------------------|
| **Architecture** | Varies | ✅ **MVC with functional services** (clean, testable) |
| **Request Tracking** | Rare | ✅ **Unique request IDs** (debugging made easy) |
| **Error Handling** | Basic | ✅ **Comprehensive with graceful shutdown** |
| **Validation** | Optional | ✅ **Built-in express-validator** |
| **Logging** | Basic | ✅ **Morgan with request ID correlation** |
| **TypeScript** | Sometimes | ✅ **100% TypeScript with strict mode** |
| **Documentation** | Minimal | ✅ **Well-documented with examples** |
| **Testing** | Sometimes | ✅ **Jest with test examples included** |
| **CLI Tool** | Sometimes | ✅ **Built-in CLI generator** |

### vs. NestJS

| Feature | NestJS | express-ts-api-starter |
|---------|--------|------------------------|
| **Setup Time** | 10-15 minutes | ⚡ **2 minutes** |
| **Learning Curve** | High (new framework) | ✅ **Low (Express knowledge)** |
| **Bundle Size** | ~200KB+ | ✅ **~50KB (lightweight)** |
| **Flexibility** | Framework-driven | ✅ **High (minimal abstraction)** |
| **Request Tracking** | Manual setup | ✅ **Built-in request IDs** |
| **Security (Out of Box)** | Manual config | ✅ **Pre-configured** |

📖 **[See detailed NestJS comparison →](COMPARISON-NESTJS.md)**

---

## 🎯 Key Strengths

### 🔐 **Authentication & Security**
- **JWT-based authentication** with secure token generation
- **bcryptjs password hashing** (industry standard)
- **Helmet.js** for HTTP security headers
- **CORS** configured for cross-origin requests
- **Rate limiting** ready to prevent DDoS attacks
- **Request ID tracking** for security auditing

### 📝 **Input Validation**
- **express-validator** middleware pre-configured
- **Type-safe validation** with TypeScript
- **Reusable validation rules** in dedicated validators folder
- **Automatic error responses** for invalid inputs

### 🛡️ **Error Handling**
- **Global error middleware** catches all errors
- **Standardized error responses** across all endpoints
- **Request ID included** in error responses for debugging
- **Graceful shutdown** handles SIGTERM/SIGINT properly
- **Uncaught exception handling** prevents crashes

### 📊 **Logging & Monitoring**
- **Morgan logging** with custom format
- **Request ID correlation** for tracking requests across services
- **Structured logging** ready for production monitoring
- **Error logging** with stack traces

### 🏗️ **Architecture**
- **MVC pattern** with clear separation of concerns
- **Functional service layer** (easier to test than classes)
- **Modular structure** - each feature is self-contained
- **Scalable design** - grow from startup to enterprise

---

## 📦 What's Included

### Core Features

- ✅ **Express.js v5** - Latest framework version
- ✅ **TypeScript 5.8** - Full type safety with strict mode
- ✅ **MongoDB + Mongoose** - Database integration ready
- ✅ **JWT Authentication** - Secure token-based auth
- ✅ **bcryptjs** - Password hashing
- ✅ **express-validator** - Input validation
- ✅ **Helmet** - Security headers
- ✅ **CORS** - Cross-origin resource sharing
- ✅ **Morgan** - HTTP request logging
- ✅ **Multer** - File upload support
- ✅ **express-rate-limit** - Rate limiting
- ✅ **Jest** - Testing framework with examples
- ✅ **ESLint + Prettier** - Code quality tools

### Developer Experience

- ✅ **CLI Tool** - Generate projects with one command
- ✅ **Hot reload** - See changes instantly
- ✅ **TypeScript declarations** - Full IntelliSense support
- ✅ **Pre-configured scripts** - dev, build, test, lint
- ✅ **Example code** - User module with CRUD operations
- ✅ **Test examples** - Learn testing patterns
- ✅ **Well-documented** - Clear code structure

---

## 📁 Project Structure

```
src/
├── modules/              # Feature modules (MVC pattern)
│   └── users/
│       ├── userController.ts    # HTTP request handlers
│       ├── userService.ts       # Business logic
│       ├── userMessage.ts       # Constants/messages
│       └── tests/               # Unit tests
├── routes/               # API route definitions
├── middleware/          # Express middleware
│   ├── auth.ts          # JWT authentication
│   ├── errorMiddleware.ts
│   ├── validatorMiddleware.ts
│   └── requestIdMiddleware.ts
├── config/              # Configuration files
│   ├── dbConfig.ts      # MongoDB connection
│   ├── envConfig.ts     # Environment variables
│   └── rateLimitConfig.ts
├── models/              # Mongoose schemas
├── validators/          # Input validation rules
├── utils/               # Utility functions
├── types/               # TypeScript type definitions
└── app.ts               # Express app setup
```

---

## 🔧 Available Commands

```bash
# Development
npm run dev          # Start dev server with hot reload

# Production
npm run build        # Compile TypeScript to JavaScript
npm start            # Start production server

# Testing
npm test             # Run test suite
npm test -- --watch  # Run tests in watch mode
npm test -- --coverage  # Run with coverage report

# Code Quality
npm run lint         # Check for linting errors
npm run lint:fix     # Auto-fix linting errors
```

---

## 📝 Configuration

### Environment Variables

Create a `.env` file:

```env
# Server
NODE_ENV=development
PORT=5000
BASIC_API_URL=/api/v1

# Database
DB_CONNECTION=mongodb://localhost:27017/
DB_NAME=testDB

# Authentication
JWT_SECRET=your-super-secret-jwt-key-change-in-production
```

See `.env.example` for all available options.

---

## 🧪 Testing

```bash
# Run all tests
npm test

# Watch mode
npm test -- --watch

# Coverage report
npm test -- --coverage
```

Example test included in `src/modules/users/tests/userController.test.ts`

---

## 📋 Standardized API Responses

All responses follow a consistent format:

**Success:**
```json
{
  "success": true,
  "requestId": "550e8400-e29b-41d4-a716-446655440000",
  "message": "Operation successful",
  "response": { "data": "..." }
}
```

**Error:**
```json
{
  "success": false,
  "requestId": "550e8400-e29b-41d4-a716-446655440000",
  "error": "Error message"
}
```

---

## 🔐 Security Features

- **Helmet** - Sets secure HTTP headers
- **CORS** - Configurable cross-origin requests
- **JWT** - Secure token-based authentication
- **bcryptjs** - Password hashing (10 rounds)
- **Rate Limiting** - DDoS protection ready
- **Input Validation** - Prevents injection attacks
- **Request ID Tracking** - Security audit trail

---

## 🚦 Production Ready

- ✅ **Graceful shutdown** - Handles SIGTERM/SIGINT
- ✅ **Error handling** - Global error middleware
- ✅ **Logging** - Request tracking with unique IDs
- ✅ **Type safety** - Full TypeScript coverage
- ✅ **Testing** - Jest framework configured
- ✅ **Code quality** - ESLint + Prettier

---

## 🎯 Perfect For

- 🚀 **REST APIs** - Full-featured API servers
- 🔧 **Microservices** - Scalable service architecture
- 🏢 **Enterprise Apps** - Production-ready foundation
- 🎓 **Learning** - Best practices and patterns
- ⚡ **MVPs** - Quick prototype development
- 📱 **Backend Services** - Complex business logic

---

## 🔧 Tech Stack

- **Runtime**: Node.js v20+
- **Framework**: Express.js v5
- **Language**: TypeScript 5.8
- **Database**: MongoDB with Mongoose
- **Security**: Helmet, CORS, JWT, bcryptjs
- **Validation**: express-validator
- **Logging**: Morgan
- **Testing**: Jest
- **Linting**: ESLint + Prettier

---

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

Free for personal and commercial use! ✨

---

## 💬 Support

- **Email**: nikhil.pk.connect@gmail.com
- **GitHub Issues**: [Report bugs](https://github.com/nikhilpktcr/express-ts-api-starter/issues)
- **GitHub**: [@nikhilpktcr](https://github.com/nikhilpktcr)

---

## 🌟 Show Your Support

If this boilerplate helps your project:

- ⭐ **Star the repository** on GitHub
- 📦 **Use the npm package** in your projects
- 🐛 **Report issues** you encounter
- 💡 **Suggest features** and improvements
- 🔄 **Share** with other developers

---

## 🎯 Roadmap

- [ ] API Documentation (Swagger/OpenAPI)
- [ ] Health check endpoint
- [ ] Pagination utility
- [ ] Redis caching layer
- [ ] Docker & Docker Compose
- [ ] CI/CD pipeline examples
- [ ] More comprehensive test suite

---

**Ready to build?** Start your next API project in minutes:

```bash
npx express-ts-api-starter my-api
```

**Happy coding!** 🎉

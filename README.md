# NestJS Advanced Learning Tutorial Kit

This is a comprehensive tutorial kit designed for learning advanced concepts in NestJS. The project demonstrates various NestJS features including modules, controllers, services, CRUD operations, error handling, and testing.

## Project Overview

This NestJS application consists of multiple modules that showcase different aspects of building scalable server-side applications:

- **App Module**: Basic NestJS setup with a hello world endpoint
- **Users Module**: Demonstrates basic GET operations with parameterized routes
- **Category Module**: Shows simple service implementation
- **Student Module**: Comprehensive CRUD operations with full REST API implementation

## Features Demonstrated

### Core NestJS Concepts
- Module system and dependency injection
- Controllers and routing
- Services and business logic
- HTTP methods (GET, POST, PUT, PATCH, DELETE)
- Parameter binding (@Param, @Body)
- Error handling with built-in exceptions

### Advanced Features
- RESTful API design
- In-memory data management
- TypeScript integration
- Testing with Jest
- ESLint and Prettier configuration

## Project Structure

```
src/
├── app.controller.ts          # Root controller with hello endpoint
├── app.module.ts              # Root module importing all feature modules
├── app.service.ts             # Root service
├── main.ts                    # Application bootstrap
├── category/                  # Category feature module
│   ├── category.controller.ts
│   ├── category.module.ts
│   ├── category.service.ts
│   └── category.controller.spec.ts
├── student/                   # Student CRUD module
│   ├── student.controller.ts
│   ├── student.module.ts
│   ├── student.service.ts
│   ├── student.controller.spec.ts
│   └── student.service.spec.ts
└── users/                     # Users module
    ├── users.controller.ts
    ├── users.module.ts
    ├── users.service.ts
    ├── users.controller.spec.ts
    └── users.service.spec.ts
```

## Installation

```bash
# Install dependencies
pnpm install
```

## Running the Application

```bash
# Development mode with hot reload
pnpm run start:dev

# Production mode
pnpm run start:prod

# Debug mode
pnpm run start:debug
```

The application will start on `http://localhost:3000` by default.

## API Endpoints

### Root Endpoint
- `GET /` - Returns "Hello World!"

### Users API
- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID

### Category API
- `GET /category` - Get all categories

### Student API (Full CRUD)
- `GET /student` - Get all students
- `GET /student/:id` - Get student by ID
- `POST /student` - Create new student
  - Body: `{ "name": "string", "age": number }`
- `PUT /student/:id` - Update student (full update)
  - Body: `{ "name": "string", "age": number }`
- `PATCH /student/:id` - Update student (partial update)
  - Body: Partial `{ "name"?: "string", "age"?: number }`
- `DELETE /student/:id` - Delete student

## Sample API Usage

### Create a Student
```bash
curl -X POST http://localhost:3000/student \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "age": 25}'
```

### Get All Students
```bash
curl http://localhost:3000/student
```

### Update a Student
```bash
curl -X PATCH http://localhost:3000/student/1 \
  -H "Content-Type: application/json" \
  -d '{"age": 26}'
```

## Testing

```bash
# Run all tests
pnpm run test

# Run tests in watch mode
pnpm run test:watch

# Run e2e tests
pnpm run test:e2e

# Run test coverage
pnpm run test:cov
```

## Code Quality

```bash
# Lint code
pnpm run lint

# Format code
pnpm run format
```

## Learning Topics Covered

1. **Project Setup**: Creating a new NestJS project with CLI
2. **Module Architecture**: Organizing code into feature modules
3. **Controllers**: Handling HTTP requests and responses
4. **Services**: Implementing business logic
5. **Dependency Injection**: NestJS DI container
6. **Routing**: Path parameters, request body binding
7. **Error Handling**: Built-in exceptions (NotFoundException)
8. **CRUD Operations**: Complete REST API implementation
9. **Testing**: Unit tests and e2e tests
10. **TypeScript**: Type safety in NestJS applications

## Next Steps for Advanced Learning

- Add database integration (TypeORM, Prisma, Mongoose)
- Implement authentication and authorization
- Add validation with class-validator
- Implement caching and rate limiting
- Add logging and monitoring
- Deploy to cloud platforms
- Add GraphQL support
- Implement microservices architecture

## Technologies Used

- **NestJS**: Progressive Node.js framework
- **TypeScript**: Typed JavaScript
- **Jest**: Testing framework
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Supertest**: HTTP endpoint testing

## Contributing

This is a tutorial kit. Feel free to modify and extend it to learn more about NestJS features.

## License

This project is for educational purposes.

# NestJS Advanced Learning Tutorial Kit

This is a comprehensive tutorial kit designed for learning advanced concepts in NestJS. The project demonstrates various NestJS features including modules, controllers, services, CRUD operations, error handling, database integration with MongoDB, and testing.

## Project Overview

This NestJS application consists of multiple modules that showcase different aspects of building scalable server-side applications:

- **App Module**: Basic NestJS setup with a hello world endpoint
- **Users Module**: Demonstrates basic GET operations with parameterized routes
- **Category Module**: Shows simple service implementation with authentication guards
- **Student Module**: Comprehensive CRUD operations with full REST API implementation, MongoDB integration using Mongoose, DTOs for validation, and authentication guards
- **Customer Module**: Demonstrates DTOs (Data Transfer Objects) and TypeScript interfaces for type safety
- **Database Module**: Database connection management and status monitoring
- **EV Module**: Environment variable handling with ConfigService
- **Exception Module**: Shows exception handling with custom HTTP exception filters and parameter parsing pipes
- **User-Roles Module**: Demonstrates role-based authorization with custom guards and decorators

## Features Demonstrated

### Core NestJS Concepts
- Module system and dependency injection
- Controllers and routing
- Services and business logic
- HTTP methods (GET, POST, PUT, PATCH, DELETE)
- Parameter binding (@Param, @Body)
- Error handling with built-in exceptions
- **DTOs (Data Transfer Objects)**: Type-safe data validation and transformation
- **TypeScript Interfaces**: Strong typing for data structures

### Advanced Features
- RESTful API design
- In-memory data management
- **Database Integration**: MongoDB connection with Mongoose ODM
- **Environment Configuration**: ConfigService for environment variables
- **Middleware**: Custom logging middleware for request tracking
- TypeScript integration
- **Validation**: Request validation with class-validator and class-transformer
- **Custom Pipes**: Transform and validate request data with custom pipes
- **Guards**: Authentication and authorization with custom guards
- **Filters**: Exception handling with custom HTTP exception filters
- **Decorators**: Custom decorators for role-based access control
- Testing with Jest
- ESLint and Prettier configuration

## Project Structure

```
src/
├── app.controller.ts          # Root controller with hello endpoint
├── app.module.ts              # Root module importing all feature modules
├── app.service.ts             # Root service
├── main.ts                    # Application bootstrap
├── common/                    # Common utilities and pipes
│   └── pipes/
│       └── uppercase/
│           ├── uppercase.pipe.ts
│           └── uppercase.pipe.spec.ts
├── category/                  # Category feature module with auth guards
│   ├── category.controller.ts
│   ├── category.module.ts
│   ├── category.service.ts
│   └── category.controller.spec.ts
├── customer/                  # Customer module with DTOs and interfaces
│   ├── customer.controller.ts
│   ├── customer.module.ts
│   ├── customer.service.ts
│   ├── customer.controller.spec.ts
│   ├── customer.service.spec.ts
│   ├── dto/
│   │   └── create-customer.dto.ts
│   └── interfaces/
│       └── customer.interface.ts
├── database/                  # Database connection management
│   ├── database.controller.spec.ts
│   ├── database.controller.ts
│   ├── database.service.spec.ts
│   └── database.service.ts
├── ev/                        # Environment variables module
│   ├── ev.controller.spec.ts
│   ├── ev.controller.ts
│   ├── ev.service.spec.ts
│   └── ev.service.ts
├── exception/                 # Exception handling module with filters
│   ├── exception.controller.ts
│   └── exception.controller.spec.ts
├── filters/                   # Custom exception filters
│   └── http-exception/
│       ├── http-exception.filter.ts
│       └── http-exception.filter.spec.ts
├── guards/                    # Authentication and authorization guards
│   ├── auth/
│   │   ├── auth.guard.ts
│   │   └── auth.guard.spec.ts
│   └── roles/
│       ├── roles.decorator.ts
│       ├── roles.enums.ts
│       ├── roles.guard.ts
│       └── roles.guard.spec.ts
├── middleware/                # Custom middleware
│   └── logger/
│       ├── logger.middleware.spec.ts
│       └── logger.middleware.ts
├── student/                   # Student CRUD module with MongoDB, DTOs, and auth guards
│   ├── student.controller.ts
│   ├── student.module.ts
│   ├── student.schema.ts
│   ├── student.service.ts
│   ├── student.controller.spec.ts
│   ├── student.service.spec.ts
│   └── dto/
│       ├── create-student.dto.ts
│       └── update-student.dto.ts
├── user-roles/                # User roles module with role-based access
│   ├── user-roles.controller.ts
│   └── user-roles.controller.spec.ts
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

# Set up environment variables
# Create a .env file in the root directory with your database URI
echo "DATABASE_URI=your_mongodb_connection_string" > .env
echo "SECRET_KEY=your_secret_key" >> .env
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

### Category API (with Authentication)
- `GET /category` - Get all categories (requires Bearer token: `Bearer my-secret-token`)

### Student API (with Authentication)
- `GET /student` - Get all students (requires Bearer token: `Bearer my-secret-token`)
- `GET /student/:id` - Get student by ID
- `POST /student` - Create new student
  - Body: `{ "name": "string", "age": number, "email": "string (optional)" }`
- `PUT /student/:id` - Update student
  - Body: `{ "name": "string (optional)", "age": number (optional)", "email": "string (optional)" }`
- `DELETE /student/:id` - Delete student

### Customer API (DTOs and Interfaces)
- `GET /customer` - Get all customers
- `POST /customer` - Create new customer
  - Body: `{ "name": "string", "age": number }`

### Database API
- `GET /database` - Get database connection status

### EV API (Environment Variables)
- `GET /ev` - Get database URL from environment variables

### Exception API (Exception Handling and Pipes)
- `GET /exception/hello/:id` - Demonstrates parameter parsing pipe and exception handling

### User Roles API (Role-Based Authorization)
- `GET /user-roles/admin-data` - Admin-only endpoint (requires `x-user-role: admin` header)
- `GET /user-roles/user-data` - User endpoint (no role restriction)

## DTOs (Data Transfer Objects) and Interfaces

### What are DTOs?
**Data Transfer Objects (DTOs)** are classes that define the structure of data being sent over the network. They act as a contract between the client and server, ensuring type safety and validation.

### Why use DTOs?
- **Type Safety**: Ensures the incoming data matches expected structure
- **Validation**: Can be extended with validation decorators (e.g., class-validator)
- **Transformation**: Can transform incoming data before processing
- **Documentation**: Self-documenting API contracts
- **Security**: Prevents over-posting attacks by defining exactly what data is accepted

### Example DTO Implementation with Validation
```typescript
// src/customer/dto/create-customer.dto.ts
import { IsInt, IsString } from 'class-validator';

export class CreateCustomerDto {
    @IsString()
    name: string;

    @IsInt()
    age: number;
}
```

### What are TypeScript Interfaces?
**Interfaces** in TypeScript define the shape of objects, providing compile-time type checking and better IDE support.

### Why use Interfaces?
- **Type Safety**: Define exact structure of data objects
- **IntelliSense**: Better autocomplete and error detection
- **Documentation**: Self-documenting code contracts
- **Refactoring**: Easier to refactor when types are defined
- **Consistency**: Ensure consistent data structures across the application

### Example Interface Implementation
```typescript
// src/customer/interfaces/customer.interface.ts
export interface Customer {
    id: number;
    name: string;
    age: number;
}
```

### How DTOs and Interfaces Work Together

```typescript
// Controller using DTO for input validation
@Post()
createCustomer(@Body() createCustomerDTO: CreateCustomerDto) {
    return this.customerService.addCustomer(createCustomerDTO);
}

// Service using Interface for return type
addCustomer(createCustomerDTO: CreateCustomerDto): Customer {
    const newCustomer: Customer = {
        id: this.customers.length + 1,
        ...createCustomerDTO
    };
    this.customers.push(newCustomer);
    return newCustomer;
}
```

### Benefits in This Project
- **Customer Module**: Demonstrates proper separation of input DTOs and internal data interfaces
- **Type Safety**: All customer operations are fully typed
- **Maintainability**: Easy to extend with validation or transformation logic
- **Best Practices**: Follows NestJS recommended patterns for scalable applications

## Validation with class-validator and class-transformer

### What is class-validator?

**class-validator** is a powerful validation library that allows you to validate objects using decorator-based validation rules. It works seamlessly with TypeScript and provides comprehensive validation capabilities.

### Why use class-validator?

- **Declarative Validation**: Use decorators to define validation rules directly on your DTO classes
- **Type Safety**: Leverages TypeScript's type system for compile-time validation
- **Comprehensive Rules**: Supports 30+ built-in validators (email, length, range, regex, etc.)
- **Custom Validators**: Create your own validation rules when needed
- **Error Messages**: Automatic or custom error messages for validation failures
- **Security**: Prevents invalid data from entering your application

### What is class-transformer?

**class-transformer** is a library that helps transform plain JavaScript objects to class instances and vice versa. It works hand-in-hand with class-validator to provide complete data transformation capabilities.

### Why use class-transformer?

- **Object Transformation**: Convert plain objects to class instances
- **Property Mapping**: Transform property names and types
- **Serialization**: Convert class instances back to plain objects
- **Nested Objects**: Handle complex nested object transformations
- **Performance**: Efficient transformation with minimal overhead

### How Validation Works in NestJS

```typescript
// 1. Configure ValidationPipe globally in main.ts
import { ValidationPipe } from '@nestjs/common';

app.useGlobalPipes(new ValidationPipe({
  whitelist: true,           // Strip properties not in DTO
  forbidNonWhitelisted: true // Throw error for extra properties
}));
```

### ValidationPipe Options Explained

- **`whitelist: true`**: Removes any properties that are not defined in the DTO
- **`forbidNonWhitelisted: true`**: Throws an error if extra properties are sent
- **`transform: true`**: Automatically transforms plain objects to class instances (requires class-transformer)

### Common Validation Decorators

```typescript
import {
  IsString, IsInt, IsEmail, IsOptional, Min, Max, Length
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(2, 50)
  name: string;

  @IsEmail()
  email: string;

  @IsInt()
  @Min(18)
  @Max(120)
  age: number;

  @IsOptional()
  @IsString()
  phone?: string;
}
```

### Validation Error Response

When validation fails, NestJS returns a structured error response:

```json
{
  "statusCode": 400,
  "message": [
    "name must be longer than or equal to 2 characters",
    "age must be a number conforming to the specified constraints"
  ],
  "error": "Bad Request"
}
```

### Advanced Validation Features

- **Conditional Validation**: `@ValidateIf()` for conditional validation rules
- **Nested Validation**: `@ValidateNested()` for validating nested objects
- **Array Validation**: `@IsArray()` and `@ValidateNested({ each: true })` for arrays
- **Custom Validation**: Create custom validators using `@Validate()` decorator

### Integration with DTOs

```typescript
// DTO with comprehensive validation
export class UpdateCustomerDto {
  @IsOptional()
  @IsString()
  @Length(2, 50)
  name?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(150)
  age?: number;
}
```

### Benefits in This Project

- **Customer Module**: Demonstrates real-world validation with `@IsString()` and `@IsInt()`
- **Security**: Prevents malicious or malformed data from being processed
- **API Reliability**: Ensures consistent data structure across all endpoints
- **Developer Experience**: Clear error messages help with debugging and API usage
- **Maintainability**: Validation rules are co-located with data structures

## Database Integration with MongoDB and Mongoose

### What is Mongoose?

**Mongoose** is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a schema-based solution to model your application data and includes built-in type casting, validation, query building, and business logic hooks.

### Why use Mongoose with NestJS?

- **Schema Definition**: Define data structures with TypeScript interfaces
- **Type Safety**: Full TypeScript support for database operations
- **Validation**: Built-in and custom validation at the schema level
- **Middleware**: Pre and post hooks for data processing
- **Query Building**: Elegant API for database queries
- **Connection Management**: Automatic connection handling and pooling

### Mongoose Integration in NestJS

```typescript
// In app.module.ts
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_URI!),
  ],
})
export class AppModule {}
```

### Environment Configuration

The application uses `@nestjs/config` for environment variable management:

```typescript
// .env file
DATABASE_URI=mongodb+srv://username:password@cluster.mongodb.net/
SECRET_KEY=your-secret-key
```

### Database Connection Status

The Database module provides connection monitoring:

```typescript
// src/database/database.service.ts
@Injectable()
export class DatabaseService {
  private isConnected = false;

  onModuleInit() {
    this.isConnected = true;
    console.log('Database connected');
  }

  onApplicationShutdown(signal: string) {
    this.isConnected = false;
    console.log(`Database disconnected due to app shutdown ${signal}`);
  }

  getStatus() {
    return this.isConnected ? 'Connected' : 'Disconnected';
  }
}
```

### Benefits in This Project

- **Database Module**: Demonstrates connection lifecycle management
- **EV Module**: Shows secure environment variable handling
- **Scalability**: Ready for real database operations
- **Best Practices**: Proper connection management and error handling
- **Type Safety**: TypeScript integration with MongoDB operations

## Custom Pipes

### What are Pipes?

**Pipes** in NestJS are used to transform and validate request data before it reaches your route handlers. They implement the `PipeTransform` interface and can be applied at different levels: globally, on controllers, or on individual route parameters.

### Why use Pipes?

- **Data Transformation**: Convert incoming data to the desired format
- **Data Validation**: Validate incoming data before processing
- **Separation of Concerns**: Keep transformation logic separate from business logic
- **Reusability**: Apply the same pipe across multiple routes
- **Type Safety**: Ensure data matches expected types
- **Consistency**: Maintain uniform data formatting across your application

### Built-in Pipes

NestJS provides several built-in pipes:
- **ValidationPipe**: Validates request data against DTOs
- **ParseIntPipe**: Converts string to integer
- **ParseBoolPipe**: Converts string to boolean
- **ParseFloatPipe**: Converts string to float
- **DefaultValuePipe**: Provides default values for missing parameters

### Custom Pipe Implementation: UppercasePipe

This project includes a custom **UppercasePipe** that transforms string values to uppercase. It's located in `src/common/pipes/uppercase/`:

```typescript
// src/common/pipes/uppercase/uppercase.pipe.ts
import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UppercasePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if(typeof value === 'string'){
      return value.toUpperCase();
    }
    return value;
  }
}
```

### How to Use Custom Pipes

**On a route parameter:**
```typescript
import { Get, Param } from '@nestjs/common';
import { UppercasePipe } from '../common/pipes/uppercase/uppercase.pipe';

@Get(':name')
greet(@Param('name', UppercasePipe) name: string) {
  return `Hello ${name}`;
}
// GET /greet/john → "Hello JOHN"
```

**On request body:**
```typescript
@Post()
create(@Body(UppercasePipe) createDto: CreateDto) {
  return this.service.create(createDto);
}
```

**On query parameters:**
```typescript
@Get()
search(@Query('q', UppercasePipe) query: string) {
  return this.service.search(query);
}
```

### Pipe Scope

Pipes can be applied at multiple levels:

```typescript
// Method-level (affects specific route)
@Get(':id')
getById(@Param('id', ParseIntPipe) id: number) { }

// Controller-level (affects all routes in controller)
@Controller('users')
@UsePipes(ValidationPipe)
export class UsersController { }

// Global level (affects all routes)
app.useGlobalPipes(new ValidationPipe());
```

### Benefits of Custom Pipes in This Project

- **Consistent Data Formatting**: Ensure all names and string inputs are in uppercase
- **Reusable**: Apply across multiple routes without code duplication
- **Testable**: Pipes can be unit tested in isolation
- **Maintainable**: Centralized logic for specific transformations
- **Type Safe**: Transform data while maintaining type safety
- **Composable**: Can be combined with other pipes

### Best Practices

1. **Keep pipes focused**: Each pipe should do one thing
2. **Handle edge cases**: Always check data types before transformation
3. **Provide meaningful errors**: Throw appropriate exceptions if transformation fails
4. **Document usage**: Clearly document which pipes are applied to which routes
5. **Test thoroughly**: Unit test pipes with various input scenarios

## Guards: Authentication and Authorization

### What are Guards?

**Guards** in NestJS are used to determine whether a request should be handled by the route handler or not. They implement the `CanActivate` interface and can be used for authentication, authorization, rate limiting, and other cross-cutting concerns.

### Why use Guards?

- **Authentication**: Verify user identity before allowing access
- **Authorization**: Check user permissions and roles
- **Security**: Protect sensitive endpoints from unauthorized access
- **Separation of Concerns**: Keep auth logic separate from business logic
- **Reusability**: Apply the same guard across multiple routes
- **Testability**: Guards can be unit tested in isolation

### Types of Guards in This Project

#### 1. AuthGuard (Authentication)
The `AuthGuard` checks for a Bearer token in the Authorization header:

```typescript
// src/guards/auth/auth.guard.ts
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];
    return authHeader === 'Bearer my-secret-token';
  }
}
```

#### 2. RolesGuard (Authorization)
The `RolesGuard` implements role-based access control using custom decorators:

```typescript
// src/guards/roles/roles.guard.ts
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(
      ROLES_KEY, [context.getHandler(), context.getClass()]
    );
    if (!requiredRoles) return true;

    const request = context.switchToHttp().getRequest();
    const userRole = request.headers['x-user-role'] as Role;
    return requiredRoles.includes(userRole);
  }
}
```

### Custom Role Decorator

```typescript
// src/guards/roles/roles.decorator.ts
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
```

### Role Enum

```typescript
// src/guards/roles/roles.enums.ts
export enum Role {
  Admin = 'admin',
  User = 'user'
}
```

### How to Use Guards

**Method-level guard:**
```typescript
@Get()
@UseGuards(AuthGuard)
getProtectedData() {
  return { message: 'This endpoint requires authentication' };
}
```

**Controller-level guard:**
```typescript
@Controller('admin')
@UseGuards(AuthGuard, RolesGuard)
export class AdminController {
  @Get()
  @Roles(Role.Admin)
  getAdminData() {
    return { message: 'Admin only' };
  }
}
```

### Benefits in This Project

- **Category Module**: Protected with `AuthGuard` for authentication
- **Student Module**: All endpoints require authentication
- **User-Roles Module**: Demonstrates role-based access with `RolesGuard`
- **Security**: Prevents unauthorized access to sensitive endpoints
- **Flexibility**: Easy to extend with additional guards for different auth strategies

## Filters: Exception Handling

### What are Filters?

**Filters** in NestJS are used to catch exceptions thrown by your application and convert them into appropriate HTTP responses. They implement the `ExceptionFilter` interface and can be applied globally, on controllers, or on individual routes.

### Why use Filters?

- **Consistent Error Responses**: Standardize error response format across the application
- **Logging**: Log exceptions for debugging and monitoring
- **Transformation**: Convert exceptions to user-friendly error messages
- **Cleanup**: Perform cleanup operations when exceptions occur
- **Security**: Prevent sensitive information from leaking in error responses

### Custom HttpExceptionFilter

This project includes a custom `HttpExceptionFilter` that formats all exceptions consistently:

```typescript
// src/filters/http-exception/http-exception.filter.ts
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: exception.message
    });
  }
}
```

### How to Use Filters

**Controller-level filter:**
```typescript
@Controller('exception')
@UseFilters(HttpExceptionFilter)
export class ExceptionController {
  @Get('hello/:id')
  getHello(@Param('id', ParseIntPipe) id: number) {
    return { message: `ID is ${id}` };
  }
}
```

**Global filter (in main.ts):**
```typescript
app.useGlobalFilters(new HttpExceptionFilter());
```

### Exception Response Format

All exceptions are formatted consistently:

```json
{
  "statusCode": 400,
  "timestamp": "2023-12-01T10:30:00.000Z",
  "path": "/exception/hello/abc",
  "message": "Validation failed (numeric string is expected)"
}
```

### Benefits in This Project

- **Exception Module**: Demonstrates exception handling with parameter parsing
- **Consistent API**: All errors follow the same response structure
- **Better UX**: User-friendly error messages
- **Debugging**: Timestamp and path information for troubleshooting
- **Security**: Prevents stack traces from being exposed to clients

## Middleware: Request Logging

### What is Middleware?

**Middleware** in NestJS are functions that have access to the request and response objects, and can execute code, modify the request/response, or end the request-response cycle. They are executed in the order they are defined.

### Why use Middleware?

- **Logging**: Track incoming requests for debugging and monitoring
- **Authentication**: Validate requests before they reach controllers
- **CORS**: Handle cross-origin resource sharing
- **Security**: Add security headers and validate requests
- **Performance**: Implement caching or rate limiting
- **Transformation**: Modify request/response data

### Custom Logger Middleware

This project includes a custom `LoggerMiddleware` that logs all incoming requests:

```typescript
// src/middleware/logger/logger.middleware.ts
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`[${req.method}] - [${req.originalUrl}]`);
    next();
  }
}
```

### How to Apply Middleware

**Global middleware (in app.module.ts):**
```typescript
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
```

**Route-specific middleware:**
```typescript
consumer.apply(LoggerMiddleware).forRoutes('users', 'posts');
```

**Controller-specific middleware:**
```typescript
consumer.apply(LoggerMiddleware).forRoutes(UsersController);
```

### Middleware Execution Order

1. Global middleware
2. Module middleware
3. Route guards
4. Route interceptors
5. Route pipes
6. Route controller/handler
7. Route interceptors (response)
8. Route filters (exceptions)

### Benefits in This Project

- **Request Tracking**: All requests are logged with method and URL
- **Debugging**: Easy to trace application flow
- **Monitoring**: Basis for implementing advanced logging
- **Security**: Can be extended for request validation
- **Performance**: Foundation for implementing caching strategies

## Sample API Usage

### Authentication Headers
For protected endpoints, include the Authorization header:
```
Authorization: Bearer my-secret-token
```

For role-based endpoints, include the user role header:
```
x-user-role: admin
```

### Create a Student (Protected)
```bash
curl -X POST http://localhost:3000/student \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer my-secret-token" \
  -d '{"name": "John Doe", "age": 25}'
```

### Get All Students (Protected)
```bash
curl http://localhost:3000/student \
  -H "Authorization: Bearer my-secret-token"
```

### Update a Student (Protected)
```bash
curl -X PATCH http://localhost:3000/student/1 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer my-secret-token" \
  -d '{"age": 26}'
```

### Get All Categories (Protected)
```bash
curl http://localhost:3000/category \
  -H "Authorization: Bearer my-secret-token"
```

### Create a Customer (Using DTO with Validation)
```bash
curl -X POST http://localhost:3000/customer \
  -H "Content-Type: application/json" \
  -d '{"name": "Jane Smith", "age": 30}'
```

### Test Validation (Invalid Data)
```bash
# This will return a 400 Bad Request with validation errors
curl -X POST http://localhost:3000/customer \
  -H "Content-Type: application/json" \
  -d '{"name": "", "age": "not-a-number"}'
```

### Test Exception Handling (Invalid Parameter)
```bash
# This will trigger the HttpExceptionFilter due to invalid ID
curl http://localhost:3000/exception/hello/abc
```

### Get Database Connection Status
```bash
curl http://localhost:3000/database
```

### Get Database URL from Environment
```bash
curl http://localhost:3000/ev
```

### Test Role-Based Access (Admin Only)
```bash
curl http://localhost:3000/user-roles/admin-data \
  -H "x-user-role: admin"
```

### Test Role-Based Access (Insufficient Permissions)
```bash
# This will return 403 Forbidden
curl http://localhost:3000/user-roles/admin-data \
  -H "x-user-role: user"
```

### Get All Customers
```bash
curl http://localhost:3000/customer
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
8. **Database Integration**: MongoDB with Mongoose ODM
9. **Environment Configuration**: ConfigService for environment variables
10. **Middleware**: Custom middleware for request processing
11. **CRUD Operations**: Complete REST API implementation
12. **DTOs (Data Transfer Objects)**: Type-safe data validation and API contracts
13. **TypeScript Interfaces**: Strong typing for data structures and better code maintainability
14. **Validation**: Request validation with class-validator and class-transformer
15. **Custom Pipes**: Data transformation and validation with custom pipes
16. **Guards**: Authentication and authorization with custom guards
17. **Filters**: Exception handling with custom HTTP exception filters
18. **Decorators**: Custom decorators for metadata and role-based access control
19. **Enums**: TypeScript enums for role definitions
20. **Testing**: Unit tests and e2e tests
21. **TypeScript**: Type safety in NestJS applications

## Next Steps for Advanced Learning

- Implement JWT authentication and session management
- Add more advanced authorization patterns (permissions, policies)
- Create MongoDB schemas and models for data persistence
- Implement caching and rate limiting
- Add logging and monitoring
- Deploy to cloud platforms
- Add GraphQL support
- Implement microservices architecture

## Technologies Used

- **NestJS**: Progressive Node.js framework
- **TypeScript**: Typed JavaScript
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling for Node.js
- **@nestjs/config**: Configuration module for environment variables
- **class-validator**: Powerful validation library with decorator-based rules
- **class-transformer**: Object transformation and serialization library
- **Jest**: Testing framework
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Supertest**: HTTP endpoint testing

## Contributing

This is a tutorial kit. Feel free to modify and extend it to learn more about NestJS features.

## License

This project is for educational purposes.

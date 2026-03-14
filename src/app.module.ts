import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { CategoryModule } from './category/category.module';
import { StudentModule } from './student/student.module';
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';
import { CustomerModule } from './customer/customer.module';
import { UserRolesController } from './user-roles/user-roles.controller';
import { ExceptionController } from './exception/exception.controller';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { DatabaseService } from './database/database.service';
import { DatabaseController } from './database/database.controller';
import { ConfigModule } from '@nestjs/config';
import { EvController } from './ev/ev.controller';
import { EvService } from './ev/ev.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UsersModule, CategoryModule, StudentModule, CustomerModule, ConfigModule.forRoot(), MongooseModule.forRoot(process.env.DATABASE_URI!)],
  controllers: [AppController, UsersController, CustomerController, UserRolesController, ExceptionController, DatabaseController, EvController],
  providers: [AppService, UsersService, CustomerService, DatabaseService, EvService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}

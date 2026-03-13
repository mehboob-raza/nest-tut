import { Module } from '@nestjs/common';
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

@Module({
  imports: [ UsersModule, CategoryModule, StudentModule, CustomerModule],
  controllers: [AppController, UsersController, CustomerController, UserRolesController, ExceptionController],
  providers: [AppService, UsersService, CustomerService],
})
export class AppModule {}

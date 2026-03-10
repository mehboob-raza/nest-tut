import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer } from './interfaces/customer.interface';
@Injectable()
export class CustomerService {
    private customers: Customer[] = [] 

    getAllCustomers() {
        return this.customers
        
    }

    addCustomer(createCustomerDTO: CreateCustomerDto): Customer {
        const newCustomer: Customer = {
            id: this.customers.length + 1,
            ...createCustomerDTO
        } 
        this.customers.push(newCustomer)
        return newCustomer
    }
}

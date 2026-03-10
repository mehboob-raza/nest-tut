import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private Users = [
        { id: 1, name: "Ali", account: '34567vbn', amount: '2345', age: '23' },
        { id: 2, name: "Ahmad", account: '347ghjvbn', amount: '985', age: '31' },
        { id: 3, name: "Raza", account: '34567ghj', amount: '945', age: '41' },
    ]

    getAllUsers() {
        return this.Users
    }

    getUserById(id: number) {
        return this.Users.find((user) => user.id === id)
    }

    // deleteUser(id:number){
    //     return this.Users.rem
    // }
}

import { Injectable } from "@nestjs/common";
import { User } from "./models/user";
import {v4 as uuidv4} from 'uuid';
import { CreateUserInput } from "./input/create-user.input";
import { UpdateUserInput } from "./input/update-user.input";
import { GetUserArgs } from "./dto/arg/get-user.arg";
import { GetUsersArgs } from "./dto/arg/get-users.arg";
import { DeleteUserInput } from "./input/delete-user.input";


@Injectable()
export class UserService {
    private users:User[] = [];

    public createUser(createUserData : CreateUserInput): User{
        const user: User ={
            userId: uuidv4(),
            ...createUserData
        }
        this.users.push(user)

        return user
    }

    public updateUser(updateUserData: UpdateUserInput): User{
        const user = this.users.find(user => user.userId === updateUserData.userId);
        Object.assign(user, updateUserData);
        return user;
    }

    public getUser(getUserArgs: GetUserArgs): User{
        return this.users.find(user => user.userId === getUserArgs.userId)   
    }

    public getUsers(getUsersArgs: GetUsersArgs): User[]{
        return getUsersArgs.Userids.map(userId => this.getUser({userId}))
    }

    public deleteUser(deleteUserData: DeleteUserInput): User{
        const userIndex = this.users.findIndex(user => user.userId ===  deleteUserData.userId);
        const user= this.users[userIndex];

        this.users.splice(userIndex);
        return user;
    }
}
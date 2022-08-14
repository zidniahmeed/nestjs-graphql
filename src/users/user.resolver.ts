import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { GetUserArgs } from "./dto/arg/get-user.arg";
import { GetUsersArgs } from "./dto/arg/get-users.arg";
import { CreateUserInput } from "./input/create-user.input";
import { DeleteUserInput } from "./input/delete-user.input";
import { UpdateUserInput } from "./input/update-user.input";
import { User } from "./models/user";
import { UserService } from "./user.service";

@Resolver(() => User)
export class UserResolver{
    constructor(private readonly userService: UserService) {}

    @Query(() => User, {name: 'user', nullable : true})
    getUser(@Args() getUserArgs :GetUserArgs) : User{
        return this.userService.getUser(getUserArgs)
    }

    @Query(()=>[User], {name: 'users', nullable: 'items'})
    getUsers(@Args() getUsersArgs :GetUsersArgs) : User[]{
        return this.userService.getUsers(getUsersArgs)
    }

    @Mutation(()=>User )
    createUser(@Args('createUserData')createUserData: CreateUserInput ) : User{
        return this.userService.createUser(createUserData)
    }

    @Mutation(()=> User)
    updateUser(@Args('updataUserData')updateUserData: UpdateUserInput ): User{
        return this.userService.updateUser(updateUserData)
    }

    @Mutation(()=>User)
    deleteUser(@Args('deleteUserData')deleteUserData: DeleteUserInput):User{
        return this.userService.deleteUser(deleteUserData)
    }


    


}
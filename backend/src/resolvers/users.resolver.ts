import { Arg, Authorized, Query, Resolver } from "type-graphql";
import { User, UsersFilter } from "../schemas/users.schema";
import { usersController } from "../controllers/users.controller";

@Resolver()
export class UsersResolver {
  @Authorized()
  @Query(() => [User])
  async Users(
    /** this decorator tells type-graphql to add this argument `filter` method on the schema */
    @Arg("filter", { nullable: true })
    filter?: UsersFilter
  ): Promise<User[]> {
    return await usersController(filter);
  }
}

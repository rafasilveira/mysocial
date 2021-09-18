import { ObjectType, Field, ID, InputType } from "type-graphql";

@ObjectType()
class Person {
  @Field(() => ID)
  _id: string
  @Field()
  index: number
  @Field()
  picture: string
  @Field()
  age: number
  @Field()
  eyeColor: string
  @Field()
  name: string
  @Field()
  company: string
  @Field()
  email: string
  @Field()
  phone: string
}

@ObjectType()
export class User extends Person {
  @Field(() => [Person])
  friends: Person[]

  @Field()
  greeting: string
}

@InputType()
export class UsersFilter {
  @Field()
  name?: string
}

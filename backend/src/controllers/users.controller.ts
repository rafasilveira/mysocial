import { User, UsersFilter } from "../schemas/users.schema";

import db from "../data/db.json";

export const usersController = (filter: UsersFilter = {}): Promise<User[]> =>
  new Promise((resolve) => {
    const data = filter?.name
      ? db.filter((item) => item.name == filter?.name)
      : db;

    // simulating a delay from a db call
    setTimeout(() => {
      resolve(data);
    }, 300);
  });

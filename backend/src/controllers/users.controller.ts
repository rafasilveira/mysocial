import { User, UsersFilter } from '../schemas/users.schema'
import db from '../data/db.json'

export const usersController = (filter: UsersFilter = {}): Promise<User[]> =>
  new Promise((resolve) => {
    let data = db

    if (filter?.name) {
      const name = filter?.name ?? ''

      // in a real case scenario, this would be externalized in a helper function
      const re = new RegExp(
        name
          .replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&')
          .replace(/[a,á,à,ä,ã,â]/gi, 'a')
          .replace(/[e,é,ë,ê]/gi, 'e')
          .replace(/[i,í,ï]/gi, 'i')
          .replace(/[o,ó,ö,ò,õ,ô]/gi, 'o')
          .replace(/[u,ü,ú,ù]/gi, 'u')
          .replace(/[c,ç]/gi, 'c')
          .toLowerCase()
          .split(' ')
          .map((p) => `[a-z]*${p}[a-z]*`)
          .join(' ')
      )
      data = db.filter((item) => item.name.toLowerCase().match(re))
    }

    // simulating a delay from a db call
    setTimeout(() => {
      resolve(data)
    }, 300)
  })

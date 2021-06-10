import { Connection } from "typeorm";
import { IUser } from "../../model/IUser";
import { User } from "../entity/User";

export class UserDAO {

  private connection: Connection

  constructor(connection: Connection) {
    this.connection = connection
  }

  async saveUser(user: IUser): Promise<IUser> {
    return await this.connection.manager.save(User, user)
  }

}
import bcrypt from "bcrypt";
import { Connection } from "typeorm";
import { getDBConnection } from "../db";
import { UserDAO } from "../db/dao/UserDAO";
import { IUser } from "../model/IUser";

export class AuthController {

  private connection: Connection
  private userDAO: UserDAO

  async signup(name: string, email: string, password: string) {
    const user: IUser = { name, email, password }
    user.password = await bcrypt.hash(password, 9)
    this.connection = await getDBConnection()
    this.userDAO = new UserDAO(this.connection)
    const result = await this.userDAO.saveUser(user)
    this.connection.close()
  }

}
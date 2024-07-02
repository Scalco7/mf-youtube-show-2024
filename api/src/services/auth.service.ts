import { compare } from "bcrypt";
import { User } from "../migrations/entities/user.entity";
import { sign } from "jsonwebtoken";
import { UserService } from "./user.service";

export class AuthService {
  private userService: UserService

  constructor() {
    this.userService = new UserService()
  }


  public async login(email: string, password: string): Promise<string> {
    let dbUserData;

    try {
      const dbUserQuery = await User.findOne({
        where: { email: email },
        attributes: ["id", "name", "password"],
      });
      dbUserData = dbUserQuery?.dataValues;
    } catch (error) {
      throw "erro no banco de dados";
    }

    if (!dbUserData) throw "Conta inválida";
    if (!(await compare(password, dbUserData.password))) throw "Conta inválida";

    const token = sign(
      { id: dbUserData.id, name: dbUserData.name },
      process.env.JWT_SECRET_KEY!.toString(),
      { expiresIn: "6h" },
    );
    return token;
  }

  public async registerUser(name: string, email: string, password: string): Promise<string> {
    let userData;

    try {
      userData = await this.userService.create(name, email, password)
    } catch (error) {
      throw error
    }

    const token = sign(
      { id: userData.id, name: userData.name },
      process.env.JWT_SECRET_KEY!.toString(),
      { expiresIn: "6h" },
    );
    return token;
  }
}

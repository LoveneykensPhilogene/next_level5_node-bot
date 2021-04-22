import { getConnection, getCustomRepository, Repository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import { User } from "../entities/User";


class UsersService {

  private usersRepository: Repository<User>;

  constructor() {

    this.usersRepository = getCustomRepository(UsersRepository);

  }

  async create(email: string) {

    //const usersRepository = getCustomRepository(UsersRepository);

    //verificar se usuario existe
    const userExists = await this.usersRepository.findOne({
      email
    })

    //se existir, retornar user
    if (userExists) {
      return userExists;
    }
    const user = this.usersRepository.create({
      email
    });
    await this.usersRepository.save(user);

    //se não existir, salvar no BD
    return user;
  }
}
export { UsersService };
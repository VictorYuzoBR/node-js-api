import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../../repositories/UserRepositorie";

class ListUserService {

    async execute() {

      const userrepositories = getCustomRepository(UserRepositories);

      const users = await userrepositories.createQueryBuilder("users").leftJoinAndSelect("users.Perfil","perfil").getMany();

      return users;

    }

}
export {ListUserService};
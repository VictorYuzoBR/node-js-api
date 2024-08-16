import { UserRepositories } from "../../repositories/UserRepositorie";
import { getCustomRepository } from "typeorm";

class ListOneUserService {

    async execute(id) {

        const userrepositories = getCustomRepository(UserRepositories);
        const ret = await userrepositories.findOne(id);

        return ret;

    }

}

export {ListOneUserService};
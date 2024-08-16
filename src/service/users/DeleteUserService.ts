import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../../repositories/UserRepositorie";

interface IDeleteUserRequest {
    id: string;
}

class DeleteUserService {
    async execute({id} : IDeleteUserRequest) {
       
        const userrepository = getCustomRepository(UserRepositories);
        const useralreadyexist = await userrepository.findOne({id});

        if (!useralreadyexist) {
            throw new Error("Usuário não existe");
        }

        const ret = await userrepository.delete(id);

        var msg = {
            message:"excluido com sucesso"
        }

        return msg;

    }
}

export {DeleteUserService};
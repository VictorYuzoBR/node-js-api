import { getCustomRepository } from "typeorm";
import { VideogameRepositories } from "../../repositories/VideogameRepositories";

interface IDeleteGame {
    id:string;
}

class DeleteVideogameService {

    async execute({id}: IDeleteGame) {

        const deletevideogameservice = getCustomRepository(VideogameRepositories);
        const gamealreadyexist = await deletevideogameservice.findOne(id);
        if (!gamealreadyexist) {
            throw new Error("Video game nao existe");
        }

        const reto = await deletevideogameservice.delete(id);
        var msg = {
            msg:"excluido com sucesso"
        }

        return msg;

    }

}
export {DeleteVideogameService};
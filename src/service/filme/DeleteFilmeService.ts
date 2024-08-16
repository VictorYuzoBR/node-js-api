import { getCustomRepository } from "typeorm";
import { filmerepositories } from "../../repositories/FilmeRepositories";

interface IDeleteFilme {
    id:string
}

class DeleteFilmeService {

    async execute({id}: IDeleteFilme) {

        const filmerepository = getCustomRepository(filmerepositories);
        const filmealreadyexist = await filmerepository.findOne(id);
        if (!filmealreadyexist) {
            throw new Error("Filme nao existe");
        }

        const ret = filmerepository.delete(id);

        var msg = {msg:"excluido com sucesso"};
        return msg;

    }

}

export {DeleteFilmeService};
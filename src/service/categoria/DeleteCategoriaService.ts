import { getCustomRepository } from "typeorm";
import { CategoriaRepositories } from "../../repositories/CategoriaRepositories";

interface IDeleteCategoria {
    id:string
}

class DeleteCategoriaService {

    async execute({id}: IDeleteCategoria) {

        const categoriarepository = getCustomRepository(CategoriaRepositories);
        const categoriaalreadyexists = await categoriarepository.findOne(id);
        if (!categoriaalreadyexists) {
            throw new Error("categoria nao existe");
        }

        const ret = categoriarepository.delete(id);

        var msg = {msg:"excluido com sucesso"};
        return msg;

    }

}

export {DeleteCategoriaService};
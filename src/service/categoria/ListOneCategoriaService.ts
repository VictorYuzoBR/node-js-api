import { CategoriaRepositories } from "../../repositories/CategoriaRepositories";
import { getCustomRepository } from "typeorm";

class ListOneCategoriaService {

    async execute(id) {

        const categoriarepositories = getCustomRepository(CategoriaRepositories);
        const ret = await categoriarepositories.findOne(id);

        return ret;

    }

}

export {ListOneCategoriaService};
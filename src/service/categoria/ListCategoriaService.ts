import { CategoriaRepositories } from "../../repositories/CategoriaRepositories";
import { getCustomRepository } from "typeorm";

class ListCategoriaService {

    async execute() {

        const categoriarepositories = getCustomRepository(CategoriaRepositories);
        const ret = await categoriarepositories.find();

        return ret;

    }

}

export {ListCategoriaService};
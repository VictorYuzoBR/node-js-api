import { getCustomRepository } from "typeorm";
import { filmerepositories } from "../../repositories/FilmeRepositories";

class ListFilmeService {

    async execute() {

        const filmerepository = getCustomRepository(filmerepositories);
        const filmes = await filmerepository.find();

        return filmes;

    }

}

export {ListFilmeService};
import { ProdutoRepositories } from "../../repositories/ProdutoRepositories";
import { getCustomRepository } from "typeorm";

class ListOneProdutoService {

    async execute(id) {

        const produtorepositories = getCustomRepository(ProdutoRepositories);
        const ret = await produtorepositories.findOne(id);

        return ret;

    }

}

export {ListOneProdutoService};
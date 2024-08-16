import { getCustomRepository } from "typeorm";
import { ProdutoRepositories } from "../../repositories/ProdutoRepositories";

interface IDeleteProdutoService {
    id: string;
}

class DeleteProdutoService {
    async execute({id} : IDeleteProdutoService) {
       
        const produtorepository = getCustomRepository(ProdutoRepositories);
        const produtoalreadyexist = await produtorepository.findOne(id);

        if (!produtoalreadyexist) {
            throw new Error("Produto nao existe")
        }

        const ret = await produtorepository.delete(id);
        var msg = {msg: "excluido com sucesso"};
        return msg;

        
    }
}

export {DeleteProdutoService};
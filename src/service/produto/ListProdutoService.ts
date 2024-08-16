import { json } from "express";
import { getCustomRepository } from "typeorm";
import { ProdutoRepositories } from "../../repositories/ProdutoRepositories";

class ListProdutoService {

    async executar() {

      const produtorepository = getCustomRepository(ProdutoRepositories);

      const filmes = await produtorepository.find();
      return filmes;


        

    }

}
export {ListProdutoService};
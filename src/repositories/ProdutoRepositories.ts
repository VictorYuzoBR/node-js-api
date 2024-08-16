import { EntityRepository, Repository } from "typeorm";
import { Produto } from "../entities/produto";

@EntityRepository(Produto)
class ProdutoRepositories extends Repository<Produto> {}

export {ProdutoRepositories};
import { EntityRepository, Repository } from "typeorm";
import { categoria } from "../entities/categoria";

@EntityRepository(categoria)
class CategoriaRepositories extends Repository<categoria>{};

export {CategoriaRepositories};
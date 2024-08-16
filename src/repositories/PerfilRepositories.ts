import { EntityRepository, Repository } from "typeorm";
import { perfil } from "../entities/perfil";

@EntityRepository(perfil)
class perfilrepositories extends Repository<perfil>{};

export {perfilrepositories};
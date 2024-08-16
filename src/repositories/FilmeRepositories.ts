import { EntityRepository, Repository } from "typeorm";
import { filme } from "../entities/filme";

@EntityRepository(filme)
class filmerepositories extends Repository<filme>{};

export {filmerepositories};


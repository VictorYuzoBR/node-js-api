import { EntityRepository, Repository } from "typeorm";
import { Carro } from "../entities/carro";

@EntityRepository(Carro)
class CarroRepositories extends Repository<Carro> {}

export {CarroRepositories};
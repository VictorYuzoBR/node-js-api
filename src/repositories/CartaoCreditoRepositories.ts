import { EntityRepository, Repository } from "typeorm";
import { cartaocredito } from "../entities/cartaocredito";

@EntityRepository(cartaocredito)
class CartaoCreditoRepositories extends Repository<cartaocredito>{}

export {CartaoCreditoRepositories};
import { EntityRepository,Repository } from "typeorm";
import { vendas } from "../entities/vendas";

@EntityRepository(vendas)
class VendasRepositores extends Repository<vendas>{}

export {VendasRepositores};
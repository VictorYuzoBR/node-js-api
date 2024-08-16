import { EntityRepository,Repository } from "typeorm";
import { ReservaRestaurente } from "../entities/Reservarestaurante";

@EntityRepository(ReservaRestaurente)

class ReservaRepositories extends Repository<ReservaRestaurente>{}

export {ReservaRepositories};
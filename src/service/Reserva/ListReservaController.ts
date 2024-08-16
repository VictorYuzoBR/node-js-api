import { getCustomRepository, getRepository } from "typeorm";
import { ReservaRepositories } from "../../repositories/ReservaRestauranteRepositories";

class ListReservaService {

    async execute() {

        const listreservaservice = getCustomRepository(ReservaRepositories);

        const reservas = await listreservaservice.find();

        return reservas;

    }

}
export {ListReservaService};
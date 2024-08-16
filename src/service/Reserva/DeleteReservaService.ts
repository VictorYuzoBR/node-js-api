import { getCustomRepository } from "typeorm";
import { ReservaRepositories } from "../../repositories/ReservaRestauranteRepositories";

interface IDeleteReserva {
    id: string
}

class DeleteReservaService {

    async execute({id}: IDeleteReserva) {

        const deleteservaservice = getCustomRepository(ReservaRepositories);
        const reservaalreadyexist = await deleteservaservice.findOne(id);

        if (!reservaalreadyexist)  {
            throw new Error("Reserva nao existe");
        }

        const ret = deleteservaservice.delete(id);
        var msg = {
            msg:"excluido com sucesso"
        }

        return msg;


    }
}

export {DeleteReservaService};
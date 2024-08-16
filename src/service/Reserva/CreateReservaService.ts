import { getCustomRepository } from "typeorm";
import { ReservaRepositories } from "../../repositories/ReservaRestauranteRepositories";

interface ICreateReserva {

    nome:string,
    data:string,
    numpessoas:number,
    horario:string

}

class CreateReservaService {

    async execute({nome,data,numpessoas,horario}: ICreateReserva) {

        const createreservaservice = getCustomRepository(ReservaRepositories);

        if (!nome || nome ==="") {
            throw new Error ("Nome nao pode estar vazio");
        }
        if (!data) {
            throw new Error ("Data nao pode estar vazio");
        }
        if (!numpessoas) {
            throw new Error ("numero de pessoas nao pode estar vazio");
        }
        if (numpessoas > 8) {
            throw new Error ("numero de pessoas nao pode ser maior que 8");
        }

        if (!horario || horario ==="") {
            throw new Error ("horario nao pode estar vazio");
        }

        const reserva = await createreservaservice.create({

            nome,
            data,
            numpessoas,
            horario

        })

        await createreservaservice.save(reserva);

        return reserva;

    }

}

export {CreateReservaService};
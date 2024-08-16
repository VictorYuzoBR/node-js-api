import { getCustomRepository } from "typeorm";
import { ReservaRepositories } from "../../repositories/ReservaRestauranteRepositories";

interface IEditReserva {

    id:string,
    nome:string,
    data:string,
    numpessoas:number,
    horario:string

}

class EditReservaService {

    async execute({id,nome,data,numpessoas,horario}: IEditReserva) {

        const editreservaservice = getCustomRepository(ReservaRepositories);
        const reservaalreadyexist = await editreservaservice.findOne(id);

        if (!reservaalreadyexist)  {
            throw new Error("Reserva nao existe");
        }

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

        reservaalreadyexist.data=data
        reservaalreadyexist.horario=horario
        reservaalreadyexist.nome=nome
        reservaalreadyexist.numpessoas=numpessoas
        reservaalreadyexist.updatedat=new Date();

        const ret = await editreservaservice.update(id, reservaalreadyexist);

        return ret;

    }
}
export {EditReservaService};
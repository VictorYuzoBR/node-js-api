import { Request,Response } from "express";
import { EditReservaService } from "../../service/Reserva/EditReservaService";

class EditReservaController {

    async handle(request:Request, response:Response) {

        const {id,nome,horario,numpessoas,data} = request.body;

        const editreservaservice = new EditReservaService();

        const reserva = await editreservaservice.execute({

            id,
            nome,
            numpessoas,
            horario,
            data

        })

        return response.json(reserva);
    }

}

export {EditReservaController};
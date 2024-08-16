import { Request,Response } from "express";
import { CreateReservaService } from "../../service/Reserva/CreateReservaService";

class CreateReservaController {

async handle(request:Request, response:Response) {
    
    const {nome, horario, data, numpessoas} = request.body;

    const createreservaservice = new CreateReservaService();


    const reserva = await createreservaservice.execute({
        nome,
        horario,
        data,
        numpessoas,
    });
    
    return response.json(reserva);
    
}

}

export { CreateReservaController };
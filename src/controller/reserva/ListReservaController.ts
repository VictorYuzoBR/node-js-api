import { Request,Response } from "express";
import { ListReservaService } from "../../service/Reserva/ListReservaController";

class ListReservaController {

    async handle(request:Request, response:Response) {

        const listreservaservice = new ListReservaService();

        const reservas = await listreservaservice.execute();

        return response.json(reservas);

    }

}
export {ListReservaController};
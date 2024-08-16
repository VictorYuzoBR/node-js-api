import { Request,Response } from "express";
import { DeleteReservaService } from "../../service/Reserva/DeleteReservaService";

class DeleteReservaController {

    async handle(request:Request, response:Response) {

        const id = request.params.id;

        const deletereservaservice = new DeleteReservaService();

        const ret = await deletereservaservice.execute({

            id

        });

        response.json(ret);

    }

}
export {DeleteReservaController};
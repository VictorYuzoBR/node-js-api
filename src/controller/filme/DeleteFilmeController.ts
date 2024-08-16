import { Request,Response } from "express";
import { DeleteFilmeService } from "../../service/filme/DeleteFilmeService";

class DeleteFilmeController {

    async handle(request:Request, response: Response) {

        const id = request.params.id;

        const deletefilmeservice = new DeleteFilmeService();

        const result = await deletefilmeservice.execute({
            id
        })

        return response.json(result);

    }

}

export {DeleteFilmeController};
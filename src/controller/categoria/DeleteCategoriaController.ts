import { Request,Response } from "express";
import { DeleteCategoriaService } from "../../service/categoria/DeleteCategoriaService";

class DeleteCategoriController {

    async handle(request:Request, response: Response) {

        const id = request.params.id;

        const deletecategoriaservice = new DeleteCategoriaService();

        const result = await deletecategoriaservice.execute({
            id
        })

        return response.json(result);

    }

}

export {DeleteCategoriController};
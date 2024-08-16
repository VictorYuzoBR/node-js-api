import { Request,Response } from "express";
import { DeleteVideogameService } from "../../service/videogame/DeleteVideogameService";

class DeleteVideogameController {

    async handle(request:Request, response:Response) {

        const id = request.params.id;

        const deletegameservice = new DeleteVideogameService();

        const ret = await deletegameservice.execute({
            id
        })

        return response.json(ret);

    }

}

export {DeleteVideogameController};
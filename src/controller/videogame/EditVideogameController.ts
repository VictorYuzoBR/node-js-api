import { Request,Response } from "express";
import { EditVideogameService } from "../../service/videogame/EditVideogameService";



class EditVideogameController {

    async handle(request:Request, response:Response) {

        const {id,nome,preco,desenvolvedora,jogomaisfamoso} = request.body;

        const editvideogameservice = new EditVideogameService();
        const ret = await editvideogameservice.execute({

            id,
            nome,
            preco,
            desenvolvedora,
            jogomaisfamoso

        })

        return response.json(ret);

    }

}

export {EditVideogameController};
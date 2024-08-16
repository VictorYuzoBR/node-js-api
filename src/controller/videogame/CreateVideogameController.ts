import { Request,Response } from "express";
import { CreateVideogameService } from "../../service/videogame/CreateVideogameService";



class CreateVideogameController {

    async handle(request:Request, response:Response) {

        const {nome,preco,desenvolvedora,jogomaisfamoso} = request.body;

        const createvideogameservice = new CreateVideogameService();
        const ret = await createvideogameservice.execute({

            nome,
            preco,
            desenvolvedora,
            jogomaisfamoso

        })

        return response.json(ret);

    }

}

export {CreateVideogameController};
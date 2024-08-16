import { Request,Response } from "express";
import { createperfilservice } from "../../service/perfil/createperfilservice";

class CreatePerfilController {

    async handle(request: Request, response: Response) {

        const {nome} = request.body;

        const Createperfilservice = new createperfilservice();

        const perfil = await Createperfilservice.execute({
            nome
        });

        return response.json(perfil);

    }

}

export {CreatePerfilController};
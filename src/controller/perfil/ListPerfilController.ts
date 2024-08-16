import { Request,Response } from "express";
import { ListPerfilService } from "../../service/perfil/listperfilservice";

class ListPerfilController {

    async handle(request: Request, response: Response) {

        const listperfilservice = new ListPerfilService();

        const resultado = await listperfilservice.executar();

        return response.json(resultado);

    }

}
export  {ListPerfilController};
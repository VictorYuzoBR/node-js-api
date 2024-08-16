import { ListOneCategoriaService } from "../../service/categoria/ListOneCategoriaService";
import {Request,Response} from "express";

class ListOneCategoriaController {

    async handle(request: Request, response:Response) {


        const id = request.params.id;

        const listonecategoriaservice = new ListOneCategoriaService();
        const categoria = await listonecategoriaservice.execute(id);

        return response.json(categoria);

    }

}
export {ListOneCategoriaController};
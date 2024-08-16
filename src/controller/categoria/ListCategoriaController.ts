import { ListCategoriaService } from "../../service/categoria/ListCategoriaService";
import {Request,Response} from "express";

class ListCategoriaController {

    async handle(request: Request, response:Response) {

        const listcategoriaservice = new ListCategoriaService();
        const categorias = await listcategoriaservice.execute();

        return response.json(categorias);

    }

}
export {ListCategoriaController};
import { Request, Response } from "express";
import { EditCategoriaService } from "../../service/categoria/EditCategoriaService";

class EditCategoriaController {

    async handle(request:Request,response:Response) {

        const {id,nome} = request.body;

        const editcategoriaservice = new EditCategoriaService();

        const cat =await editcategoriaservice.execute({
            id,
            nome
        })

        return response.json(cat);

    }

}
export {EditCategoriaController};
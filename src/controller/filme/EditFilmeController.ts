import { Request, Response } from "express";
import { EditFilmeService } from "../../service/filme/EditFilmeService";

class EditFilmeController {

    async handle(request:Request,response:Response) {

        const {id,titulo,faixaetaria,valoringresso,codigo} = request.body;

        const editfilmeservice = new EditFilmeService();

        const filme =await editfilmeservice.execute({
            id,
            titulo,
            faixaetaria,
            valoringresso,
            codigo
        })

        return response.json(filme);

    }

}
export {EditFilmeController};
import { Request,Response } from "express";
import { CreateFilmeService } from "../../service/filme/CreateFilmeService";
import { create } from "domain";
import { createCipher } from "crypto";

class CreateFilmeController {

    async handle(request: Request, response: Response) {

        const {titulo, valoringresso, faixaetaria, codigo} = request.body;

        const createfilmeservice = new CreateFilmeService();

        const filme = await createfilmeservice.execute({

            titulo,
            valoringresso,
            codigo,
            faixaetaria

        });

        return response.json(filme);
    }
    
}
export {CreateFilmeController};
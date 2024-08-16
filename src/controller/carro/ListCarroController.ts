import { Request, Response} from "express";
import { ListCarroService } from "../../service/carro/ListCarroService";

class ListCarroController {

    async handle(request:Request, response:Response) {

    const listcarroservice = new ListCarroService();
    const resultado =await  listcarroservice.executar();
    
    return response.json(resultado);

    }

}

export {ListCarroController};
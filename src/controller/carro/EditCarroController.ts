import { Request, Response} from "express";
import { EditCarroService } from "../../service/carro/EditCarroService";

class EditCarroController {

    async handle(request: Request, response:Response) {

        const {id,marca,motor,preco,nome} = request.body;

        const editcarroservice = new EditCarroService();
        
        const resultado = await editcarroservice.execute(
            {
                marca,
                motor,
                preco,
                nome,
                id
            }
        )

        return response.json(resultado);
    }

} 

export {EditCarroController};
import { Request, Response} from "express";
import { DeleteCarroService } from "../../service/carro/DeleteCarroService";

class DeleteCarroController {

    async handle(request:Request, response:Response) {

        const id = request.params.id;
        console.log(id);

        const deletecategoriaservice = new DeleteCarroService();
        const resultado = await deletecategoriaservice.execute(
            {
                id
            }
        )

        return response.json(resultado);
    }

}

export {DeleteCarroController};
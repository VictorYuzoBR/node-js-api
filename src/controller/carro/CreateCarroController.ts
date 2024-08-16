import { Request, Response} from "express";
import { CreateCarroService } from "../../service/carro/CreateCarroService";

class CreateCarroController {

    async handle(request: Request, response: Response) {

        const {marca,motor,preco,nome} = request.body;

        const createcarroservice = new CreateCarroService();
        const resultado = await createcarroservice.execute(
            {
                marca,
                nome,
                motor,
                preco
            }
        )
        return response.json(resultado);

    }

}

export { CreateCarroController };
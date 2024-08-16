import { Request,Response } from "express";
import { CreateCartaoService } from "../../service/cartaocredito/CreateCartaoService";

class CreateCartaoController {

    async handle(request:Request,response:Response) {

        const {validade,senhacartao,proprietario,saldo} = request.body;

        const createcartaoservice = new CreateCartaoService();

        const cartao = await createcartaoservice.execute({

            validade,
            senhacartao,
            proprietario,
            saldo

        });

        return response.json(cartao);


    }

}
export {CreateCartaoController};
import { Request,Response } from "express";
import { EditCartaoService } from "../../service/cartaocredito/EditCartaoService";

class EditCartaoController {

    async handle(request:Request,response:Response) {

        const {id,validade,senhacartao,proprietario,saldo} = request.body;

        const editcartaoservice = new EditCartaoService();

        const cartao = await editcartaoservice.execute({

            id,
            validade,
            senhacartao,
            proprietario,
            saldo

        });

        return response.json(cartao);


    }

}
export {EditCartaoController};
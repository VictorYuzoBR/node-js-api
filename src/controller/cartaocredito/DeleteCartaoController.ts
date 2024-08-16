import { Request,Response } from "express";
import { DeleteCartaoService } from "../../service/cartaocredito/DeleteCartaoService";

class DeleteCartaoController {

    async handle(request:Request,response:Response) {

        const id = request.params.id;

        const deletecartaoservice = new DeleteCartaoService();
        const ret =await deletecartaoservice.execute({id});

        return response.json(ret);

    }

}
export {DeleteCartaoController};
import { Request, Response } from "express";
import { ListCartaoService } from "../../service/cartaocredito/ListCartaoService";

class ListCartaoController {

    async handle(request:Request, response:Response) {

        const listcartaoservice = new ListCartaoService();

        const cartao = await listcartaoservice.execute();

        return response.json(cartao);

    }

}

export {ListCartaoController};
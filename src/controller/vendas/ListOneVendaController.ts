import { ListOneVendaService } from "../../service/vendas/ListOneVendaService";
import {Request,Response} from "express";

class ListOneVendaController {

    async handle(request: Request, response:Response) {


        const id = request.params.id;

        const listvendacontroller = new ListOneVendaService();
        const venda = await listvendacontroller.execute(id);

        return response.json(venda);

    }

}
export {ListOneVendaController};
import {Request, Response} from "express";
import { ListVendaService } from "../../service/vendas/ListVendaService";

class ListVendaController {

async handle(request: Request, response: Response) {

const listvendaservice = new ListVendaService();


    const vendas = await listvendaservice.execute();


    return response.json(vendas);
}

}
export {ListVendaController};
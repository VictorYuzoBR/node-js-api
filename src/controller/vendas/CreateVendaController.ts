import { Request,Response } from "express";
import { CreateVendaService } from "../../service/vendas/CreateVendaService";

class CreateVendaController {

async handle(request:Request, response:Response) {
    
    const {iduser, idproduto, quantidade} = request.body;

    const createvendaservice = new CreateVendaService();


    const venda = await createvendaservice.execute({
        iduser,
        idproduto,
        quantidade
    });
    
    return response.json(venda);
    
}

}

export { CreateVendaController };
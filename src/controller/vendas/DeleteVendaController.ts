import { Request,Response } from "express";
import { DeleteVendaService } from "../../service/vendas/DeleteVendaService";

class DeleteVendaController {

    async handle(request: Request, response: Response) {

        const id = request.params.id;
    
        const deletevendaservice = new DeleteVendaService();

        const resultado = await deletevendaservice.execute(
        {
            id
        }
        )

        return response.json(resultado);

    }



}

export { DeleteVendaController };
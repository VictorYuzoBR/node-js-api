import { Request,Response } from "express";
import { UpdateVendaService } from "../../service/vendas/UpdateVendaSerivce";

class UpdateVendaController {

    async handle(request: Request, response: Response) {

        const {id,iduser, idproduto, quantidade} = request.body;

      const updatevendaservice = new UpdateVendaService();
      const resultado = await updatevendaservice.execute(
        {
            id,
            iduser,
            idproduto,
            quantidade
            
        }
      )
        
      return response.json(resultado);
       
    }

}

export { UpdateVendaController } ;
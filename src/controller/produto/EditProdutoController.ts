import { Request,Response } from "express";
import { EditProdutoService } from "../../service/produto/EditProdutoService";

class EditProdutoController {

    async handle(request: Request, response: Response) {

        const {id,nome,validade,fabricante,categoria} = request.body;

      const editprodutoservice = new EditProdutoService();
      const resultado = await editprodutoservice.execute(
        {
            nome,
            validade,
            fabricante,
            categoria,
            id
        }
      )
        
      return response.json(resultado);
       
    }

}

export { EditProdutoController } ;
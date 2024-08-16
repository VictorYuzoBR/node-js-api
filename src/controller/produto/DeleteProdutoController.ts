import { Request,Response } from "express";
import { DeleteProdutoService } from "../../service/produto/DeleteProdutoService";

class DeleteProdutoController {

    async handle(request: Request, response: Response) {

        const id = request.params.id;
    
        const deleteprodutoservice = new DeleteProdutoService();

        const resultado = await deleteprodutoservice.execute(
        {
            id
        }
        )

        return response.json(resultado);

    }



}

export { DeleteProdutoController };
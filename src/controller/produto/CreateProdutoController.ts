import { Request,Response } from "express";
import { CreateProdutoService } from "../../service/produto/CreatePordutoService";

class CreateProdutoController {

    async handle(request: Request, response: Response) {

        const {fabricante, validade, nome , categoria} = request.body;

        const createprodutoservice = new CreateProdutoService();
        const produto = await createprodutoservice.execute(
        {
            nome,
            categoria,
            fabricante,
            validade
        }
        )


 return response.json(produto);


    }

}
export { CreateProdutoController };
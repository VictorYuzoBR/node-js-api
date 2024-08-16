import { Request,Response } from "express";
import { ListProdutoService } from "../../service/produto/ListProdutoService";

class ListProdutoController {

    async handle(request: Request, response: Response) {

        const listprodutoservice = new ListProdutoService();

        const resultado = await listprodutoservice.executar();

        return response.json(resultado);

    }

}
export  {ListProdutoController};
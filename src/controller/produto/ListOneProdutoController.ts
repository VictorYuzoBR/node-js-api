import { ListOneProdutoService } from "../../service/produto/ListOneProduto";
import {Request,Response} from "express";

class ListOneProdutoController {

    async handle(request: Request, response:Response) {


        const id = request.params.id;

        const listoneprodutoservice = new ListOneProdutoService();
        const produto = await listoneprodutoservice.execute(id);

        return response.json(produto);

    }

}
export {ListOneProdutoController};
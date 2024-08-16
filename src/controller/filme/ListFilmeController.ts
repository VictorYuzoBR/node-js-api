import {Request,Response} from "express";
import { ListFilmeService } from "../../service/filme/ListFilmeService";

class ListFilmeController {

    async handle(request: Request,response:Response) {

        const listfilmeservice = new ListFilmeService();
        const filmes = await listfilmeservice.execute();

        return response.json(filmes);

    }

}

export {ListFilmeController};
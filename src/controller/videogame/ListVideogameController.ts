import {Response,Request} from "express";
import { ListVideogameService } from "../../service/videogame/ListVideogameService";

class ListVideogameController {

async handle(request: Request, response:Response) {

    const listvideogameservice = new ListVideogameService();
    const ret = await listvideogameservice.execute();
    return response.json(ret);
}

}

export {ListVideogameController};
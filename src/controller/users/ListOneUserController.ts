import { ListOneUserService } from "../../service/users/ListOneUserService";
import {Request,Response} from "express";

class ListOneUserController {

    async handle(request: Request, response:Response) {


        const id = request.params.id;

        const listuserservice = new ListOneUserService();
        const user = await listuserservice.execute(id);

        return response.json(user);

    }

}
export {ListOneUserController};
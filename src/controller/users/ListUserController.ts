import {Request, Response} from "express";
import { ListUserService } from "../../service/users/ListUserService";

class ListUserController {

async handle(request: Request, response: Response) {

const listuserservice = new ListUserService();


    const users = await listuserservice.execute();


    return response.json(users);
}

}
export {ListUserController};
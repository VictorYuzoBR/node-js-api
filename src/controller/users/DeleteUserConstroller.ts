import { Request, Response } from "express";
import { DeleteUserService } from "../../service/users/DeleteUserService";

class DeleteUserController {

async handle(request: Request, response: Response) {

const id= request.params.id;

const deleteuserservice = new DeleteUserService();

const resultado = await deleteuserservice.execute({
    id
});

return response.json(resultado);
}

}

export {DeleteUserController};
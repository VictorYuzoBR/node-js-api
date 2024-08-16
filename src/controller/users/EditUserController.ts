import { Request,Response } from "express";
import { EditUserService } from "../../service/users/EditUserService";

class EditUserController {

async handle(request: Request, response: Response) {

const {id ,name, email, admin, password,perfil} = request.body;


const edituserservice = new EditUserService();

const resultado = await edituserservice.execute(
{
    id,
    name,
    email,
    admin,
    password,
    perfil

}
);

    return response.json(resultado);
}

}

export {EditUserController};
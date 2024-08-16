import { Request,Response } from "express";
import  { CreateUserService } from "../../service/users/CreateUsersService";

class CreateUserController {

async handle(request:Request, response:Response) {
    
    const {name, email, admin, password,perfil} = request.body;

    const createuserservice = new CreateUserService();


    const user = await createuserservice.execute({
        name,
        email,
        admin,
        password,
        perfil
    });
    
    return response.json(user);
    
}

}

export { CreateUserController };
import { Request, Response} from "express";
import {AutenticateUserService} from "../../service/autentication/AutenticateUserService";

class AutenticateUserController {
    async handle(request: Request, response: Response) {

        const {email,password} = request.body;

        const autenticateuserservice = new AutenticateUserService();

        const token = await autenticateuserservice.execute({
            email,
            password,
        })

        return response.json(token);

    }

    async resetpassword(request: Request, response: Response) {
        const {email} = request.body;
        console.log(email);
        const autenticateuserservice = new AutenticateUserService();
        const ret = await autenticateuserservice.resetpassword(email);
        return response.json(ret);
    }


}

export {AutenticateUserController};
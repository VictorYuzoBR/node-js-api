import { Request, Response, NextFunction} from "express";
import { verify} from "jsonwebtoken";

interface IEnsureInterface {
    sub: string
}

export function EnsureAutenticated(request:Request, response:Response, next:NextFunction) {

    const autToken = request.headers.authorization;

    if (!autToken) {
        return response.status(401).end();
    }

    const [, token] = autToken.split(" ");
    console.log("nao autorizado sem token");

    try{

        const {sub} = verify(

            token,
            "12345678"
        ) as IEnsureInterface;
        return next();


        

    } catch (err) {
        return response.status(401).end();
    }
}
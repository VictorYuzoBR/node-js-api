import {compare} from "bcryptjs";
import {hash} from "bcryptjs";
import {sign} from "jsonwebtoken";

import { UserRepositories } from "../../repositories/UserRepositorie";
import { getCustomRepository } from "typeorm";
const nodemailer = require ('nodemailer');

interface IAutenticateUserInterface {
    email: string,
    password: string
}

class AutenticateUserService {

    async execute ({email,password}: IAutenticateUserInterface) {

        if (email != "seunome@umc.br") {
            throw new Error("email incorreto");
        }

        const passwordhash = await hash("123456", 8);

        const passwordmatch = await compare(password, passwordhash);

        if (!passwordmatch) {
            throw new Error("senha incorreta");
        }

        const token = sign(

            {
                email: "seunome@umc.br",
            }, "12345678",
            {
                subject: "Admin",
                expiresIn: "1d",
            }

        );
        return token;

    }


    async resetpassword(email) {

        const userrepositories = getCustomRepository(UserRepositories);
        const useralreadyexists = await userrepositories.findOne({email});

        if (!useralreadyexists) {
            throw new Error("Email não cadastrado");
            
        }

        const passwordhash = await hash("UMC12345", 8);
        useralreadyexists.password = passwordhash;

        const user = await userrepositories.update(useralreadyexists.id, useralreadyexists);

        const mailoptions = {

            from: "mail@mestresdaweb.io",
            to : email,
            subject: "Troca de senha",
            html: "<p> Sua nova senha é: UMC12345</p>"
        };

        let transporter = nodemailer.createTransport({

            host: "mail.mestresdaweb.io",
            port: 465,
            auth: {
                user: "mail@mestresdaweb.io",
                pass: "OZF6Cyf,ahw^",
            },
        });

        return await transporter.sendMail(mailoptions, 
            (err, info) =>{
                if (err) {
                    console.log(err)
                } else {
                    return "senha enviada";
                }
            }   );

    }

}




export {AutenticateUserService};
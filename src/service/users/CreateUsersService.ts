import {hash} from "bcryptjs";
import { UserRepositories } from "../../repositories/UserRepositorie";
import { getCustomRepository } from "typeorm";
import { perfil } from "../../entities/perfil";

interface IUserRequest{
    name: string;
    email: string;
    admin?: boolean;
    password: string;
    perfil: string;
}
class CreateUserService {
    async execute({ name, email, admin = false, password, perfil}: IUserRequest) {

        const userRepository = getCustomRepository(UserRepositories);
        
        if (!email|| email ==="") {
            throw new Error ("email incorreto");
        }

        if (password.length<8) {

            throw new Error ("Senha deve ter 8 ou mais caracteres");

        }

        const passwordhash = await hash(password, 8);
   
        const user = userRepository.create({
            name,
            email,
            admin,
            password:passwordhash,
            Perfil:{id:perfil}
            
    });
    await userRepository.save(user);
    return user;
   
    }
    
}
export{CreateUserService};
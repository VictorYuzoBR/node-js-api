import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../../repositories/UserRepositorie";
import { hash } from "bcryptjs";


interface IEditUserService {
    id: string; name: string, email: string, admin: boolean, password: string, perfil:string
}

class EditUserService {
    async execute({id, email, name, admin, password,perfil} : IEditUserService) {
       
        const userrepository = getCustomRepository(UserRepositories);
        const useralreadyexist = await userrepository.findOne({id});

        if (!useralreadyexist) {
            throw new Error("usuário não existe");
        }

        const passwordhash = await hash(password, 8);
        useralreadyexist.name=name;
        useralreadyexist.admin=admin;
        useralreadyexist.email=email;
        useralreadyexist.updated_at=new Date();
        useralreadyexist.password=passwordhash;
        useralreadyexist.Perfil={id:perfil};

        const user = await userrepository.update(id, useralreadyexist);

        return user;


    }
}

export {EditUserService};
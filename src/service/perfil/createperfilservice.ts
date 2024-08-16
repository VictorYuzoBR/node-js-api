import { getCustomRepository } from "typeorm";
import { perfilrepositories } from "../../repositories/PerfilRepositories";

interface ICreateperfil {

    
    nome: string,

}

class createperfilservice {

    async execute({nome}: ICreateperfil) {

        const perfilrepository = getCustomRepository(perfilrepositories);

        if (!nome || nome ==="") {
            throw new Error ("Nome nao pode estar vazio");
        }

        const perfil = perfilrepository.create({
            nome
        });

        await perfilrepository.save(perfil);
        return perfil;

    }

}
export {createperfilservice};

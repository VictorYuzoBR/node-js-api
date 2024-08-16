import { getCustomRepository } from "typeorm";
import { VideogameRepositories } from "../../repositories/VideogameRepositories";

interface ICreateVideogame {

    nome:string,
    preco:number;
    desenvolvedora:string;
    jogomaisfamoso:string

}

class CreateVideogameService {

    async execute({nome,preco,desenvolvedora,jogomaisfamoso}: ICreateVideogame) {

        const createvideogameservice = getCustomRepository(VideogameRepositories);

        
        if (!nome || nome ==="") {
            throw new Error ("Nome nao pode estar vazio");
        }

        
        if (!preco || preco == 0) {
            throw new Error ("Preço nao pode estar vazio ou ser 0");
        }
        if (!desenvolvedora || desenvolvedora ==="") {
            throw new Error ("Desenvolvedora nao pode estar vazio");
        }
        if ( desenvolvedora !=="nintendo" && desenvolvedora !=="sony" && desenvolvedora !=="microsoft") {
            throw new Error ("precisa ser uma desenvolvedora existente");
        }
        if (!jogomaisfamoso || jogomaisfamoso === "") {
            throw new Error ("Jogo mais famoso nao pode estar vazio");
        }

        const videogame = createvideogameservice.create({

            nome,
            preco,
            desenvolvedora,
            jogomaisfamoso

        })

        await createvideogameservice.save(videogame);
        return videogame;

    }

}

export {CreateVideogameService};
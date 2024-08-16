import { getCustomRepository } from "typeorm";
import { VideogameRepositories } from "../../repositories/VideogameRepositories";

interface IEditVideogame {

    id: string;    
    nome:string,
    preco:number;
    desenvolvedora:string;
    jogomaisfamoso:string

}

class EditVideogameService {

    async execute({id,nome,preco,desenvolvedora,jogomaisfamoso}: IEditVideogame) {

        const editvideogameservice = getCustomRepository(VideogameRepositories);
        const gamealreadyexist =await editvideogameservice.findOne(id);
        if (!gamealreadyexist) {
            throw new Error("Video game nao existe");
        }

        
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

       gamealreadyexist.jogomaisfamoso=jogomaisfamoso;
       gamealreadyexist.desenvolvedora=desenvolvedora;
       gamealreadyexist.nome=nome;
       gamealreadyexist.preco=preco;
       gamealreadyexist.updatedat=new Date;

       const ret = await editvideogameservice.update(id,gamealreadyexist);
       return ret;

    }

}

export {EditVideogameService};
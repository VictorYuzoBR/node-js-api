import { getCustomRepository } from "typeorm";
import { VideogameRepositories } from "../../repositories/VideogameRepositories";

class ListVideogameService {

    async execute() {

        const listvideogameservice  = getCustomRepository(VideogameRepositories);

        const consoles = await listvideogameservice.find();
        return consoles;


    }

}

export {ListVideogameService};
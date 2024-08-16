import { getCustomRepository } from "typeorm";
import { CategoriaRepositories } from "../../repositories/CategoriaRepositories";

interface IEditCategoria {

    id: string,
    nome: string,

}

class EditCategoriaService {

    async execute({id,nome}: IEditCategoria) {

    const categoriarepository = getCustomRepository(CategoriaRepositories);    
    const categoriaalreadyexists = await categoriarepository.findOne(id);
    if (!categoriaalreadyexists) {
        throw new Error("Categoria n existe");
    }

    if (!nome || nome ==="") {
        throw new Error ("nome nao pode estar vazio");
    }


    categoriaalreadyexists.nome=nome;

    categoriaalreadyexists.updatedat=new Date();

    const ret = await categoriarepository.update(id, categoriaalreadyexists);
    return ret;

    }

}

export {EditCategoriaService};
import { getCustomRepository } from "typeorm";
import { CategoriaRepositories } from "../../repositories/CategoriaRepositories";

interface ICreateCategoria {
    nome: string;

}

class CreateCategoriaService{
    async execute({nome}: ICreateCategoria) {

        const categoriarepositorie = getCustomRepository(CategoriaRepositories);

        if (!nome || nome ==="") {
            throw new Error ("Nome nao pode estar vazio");
        }

        const categoria = categoriarepositorie.create({
            nome
   
        });
        await categoriarepositorie.save(categoria);
        return categoria;

    }
}


export {CreateCategoriaService};
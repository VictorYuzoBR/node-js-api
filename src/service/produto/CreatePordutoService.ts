import { getCustomRepository } from "typeorm";
import { ProdutoRepositories } from "../../repositories/ProdutoRepositories";

interface ICreateProdutoService {
    nome: string;
    categoria: string;
    fabricante: string;
    validade: string;
    
}

class CreateProdutoService {
    async execute({fabricante, nome, categoria, validade}: ICreateProdutoService) {

        const produtorepository = getCustomRepository(ProdutoRepositories);

        if (!nome || nome ==="") {
            throw new Error ("Nome nao pode estar vazio");
        }
        if (!fabricante || fabricante ==="") {
            throw new Error ("Fabricante nao pode estar vazio");
        }
        if (!categoria || categoria ==="") {
            throw new Error ("Categoria nao pode estar vazio");
        }
        if (!validade || validade ==="") {
            throw new Error ("Validade nao pode estar vazio");
        }

        const produto = produtorepository.create({
            nome,
            categoria:{id:categoria},
            validade,
            fabricante
            
        });
        await produtorepository.save(produto);
        return produto;

    }
}

export {CreateProdutoService};
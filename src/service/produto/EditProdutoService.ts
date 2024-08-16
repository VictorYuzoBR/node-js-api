import { getCustomRepository } from "typeorm";
import { ProdutoRepositories } from "../../repositories/ProdutoRepositories";

interface IEditProdutoService {
    id: string;
    nome: string;
    categoria: string;
    fabricante: string;
    validade: string;
}

class EditProdutoService {
    async execute({id,nome,fabricante,categoria,validade} : IEditProdutoService) {
       
        const produtorepository = getCustomRepository(ProdutoRepositories);

        const produtoalreadyexist = await produtorepository.findOne(id);
        if (!produtoalreadyexist) {
            throw new Error("Produto nao existe")
        };

        if (!nome || nome ==="") {
            throw new Error ("Nome nao pode estar vazio");
        }
        if (!fabricante || fabricante ==="") {
            throw new Error ("Fabricante nao pode estar vazio");
        }
        if (!categoria || categoria ==="") {
            throw new Error ("Tipo nao pode estar vazio");
        }
        if (!validade || validade ==="") {
            throw new Error ("Validade nao pode estar vazio");
        }

        produtoalreadyexist.fabricante=fabricante;
        produtoalreadyexist.nome=nome;
        produtoalreadyexist.validade=validade;
        produtoalreadyexist.updatedat= new Date();
        produtoalreadyexist.categoria={id:categoria};
        const ret = produtorepository.update(id,produtoalreadyexist);
        return ret;


    }
}

export {EditProdutoService}; 
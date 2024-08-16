import { getCustomRepository } from "typeorm";
import { VendasRepositores } from "../../repositories/VendasRepositories";


interface ICreateVenda {
    iduser: string;
    idproduto: string;
    quantidade: string;

}

class CreateVendaService{
    async execute({iduser,idproduto,quantidade}: ICreateVenda) {

        const vendarepositories = getCustomRepository(VendasRepositores);

        if (!iduser || iduser ==="") {
            throw new Error ("ID do usuario nao pode estar vazio");
        }

        if (!idproduto || idproduto ==="") {
            throw new Error ("ID do produto nao pode estar vazio");
        }

        if (!quantidade || quantidade ==="") {
            throw new Error ("Quantidade nao pode estar vazio");
        }

        const venda = vendarepositories.create({
            iduser:{id:iduser},
            idproduto:{id:idproduto},
            quantidade
   
        });
        await vendarepositories.save(venda);
        return venda;

    }
}


export {CreateVendaService};
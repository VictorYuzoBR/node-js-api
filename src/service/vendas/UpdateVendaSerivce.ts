import { getCustomRepository } from "typeorm";
import { VendasRepositores } from "../../repositories/VendasRepositories";


interface IUpdateVenda {
    id: string,
    iduser: string;
    idproduto: string;
    quantidade: string;

}

class UpdateVendaService{
    async execute({id,iduser,idproduto,quantidade}: IUpdateVenda) {

        const vendarepositories = getCustomRepository(VendasRepositores);
        const vendaalreadyexists = await vendarepositories.findOne(id);

        if (!vendaalreadyexists) {
            throw new Error("venda nao existe")
        };

        if (!iduser || iduser ==="") {
            throw new Error ("ID do usuario nao pode estar vazio");
        }

        if (!idproduto || idproduto ==="") {
            throw new Error ("ID do produto nao pode estar vazio");
        }

        if (!quantidade || quantidade ==="") {
            throw new Error ("Quantidade nao pode estar vazio");
        }

        
            vendaalreadyexists.iduser={id:iduser};
            vendaalreadyexists.idproduto={id:idproduto};
            vendaalreadyexists.quantidade=quantidade;
            vendaalreadyexists.updatedat= new Date();
        
        const venda = await vendarepositories.update(id,vendaalreadyexists);
        return venda;

    }
}


export {UpdateVendaService};
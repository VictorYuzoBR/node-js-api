import { getCustomRepository } from "typeorm";
import { VendasRepositores } from "../../repositories/VendasRepositories";


interface IDeleteVenda {
    id: string;
}

class DeleteVendaService {
    async execute({id} : IDeleteVenda) {
       
        const vendarepositories = getCustomRepository(VendasRepositores);
        const vendaalreadyexists = await vendarepositories.findOne({id});

        if (!vendaalreadyexists) {
            throw new Error("Venda não existe");
        }

        const ret = await vendarepositories.delete(id);

        var msg = {
            message:"excluido com sucesso"
        }

        return msg;

    }
}

export {DeleteVendaService};
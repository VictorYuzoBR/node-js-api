import { getCustomRepository } from "typeorm";
import { CartaoCreditoRepositories } from "../../repositories/CartaoCreditoRepositories";
import { getCurves } from "crypto";

interface IDeleteCartao {
    id:string;
}

class DeleteCartaoService {

    async execute({id}: IDeleteCartao) {

        const cartaorepository = getCustomRepository(CartaoCreditoRepositories);
        const cartaoalreadyexist = await cartaorepository.findOne(id);
        if (!cartaoalreadyexist) {
            throw new Error("cartao nao existe")
        }
        
        const ret = await cartaorepository.delete(id);
        var msg = {msg: "excluido com sucesso"};
        return msg;

    }

}

export {DeleteCartaoService};
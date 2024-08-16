import { getCustomRepository } from "typeorm";
import { CartaoCreditoRepositories } from "../../repositories/CartaoCreditoRepositories";

class ListCartaoService {

    async execute() {

        const cartaorepository = getCustomRepository(CartaoCreditoRepositories);

        const cartao = await cartaorepository.find();

        return cartao;

    }

}

export {ListCartaoService};
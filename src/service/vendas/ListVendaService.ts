import { getCustomRepository } from "typeorm";
import { VendasRepositores } from "../../repositories/VendasRepositories";

class ListVendaService {

    async execute() {

      const vendarepositories = getCustomRepository(VendasRepositores);

      const venda = await vendarepositories.createQueryBuilder("vendas").leftJoinAndSelect("vendas.idproduto", "Produto").leftJoinAndSelect("vendas.iduser", "users").getMany();

      return venda;

    }

}
export {ListVendaService};
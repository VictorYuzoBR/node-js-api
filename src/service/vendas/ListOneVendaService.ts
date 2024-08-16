import { VendasRepositores } from "../../repositories/VendasRepositories";
import { getCustomRepository } from "typeorm";

class ListOneVendaService {

    async execute(id) {

        const vendarepositories = getCustomRepository(VendasRepositores);
        const ret = await vendarepositories.findOne(id);

        return ret;

    }

}

export {ListOneVendaService};
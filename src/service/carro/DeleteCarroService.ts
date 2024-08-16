import { getCustomRepository } from "typeorm";
import { CarroRepositories } from "../../repositories/CarroRepositories";

interface IDeleteCarroService {
    id: string
}

class DeleteCarroService {

    async execute({id}: IDeleteCarroService) {

        const carrorepository = getCustomRepository(CarroRepositories);
        const carroalreadyexist = await carrorepository.findOne({id});

        if (!carroalreadyexist) {
            throw new Error("Carro não existe");
        }

        const ret = await carrorepository.delete(id);
        var msg = {
            msg: "Excluido com sucesso"
        }

       return msg;
    }

} 
export {DeleteCarroService};
import { json } from "express";
import { getCustomRepository } from "typeorm";
import { CarroRepositories } from "../../repositories/CarroRepositories";

class ListCarroService {

    async executar() {

        const carrorepository = getCustomRepository(CarroRepositories);

        const carros = await carrorepository.find();
        return carros;

    }

}
export {ListCarroService};
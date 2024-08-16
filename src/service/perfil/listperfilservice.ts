import { json } from "express";
import { getCustomRepository } from "typeorm";
import { perfilrepositories } from "../../repositories/PerfilRepositories";

class ListPerfilService {

    async executar() {

      const perfilrepositorie = getCustomRepository(perfilrepositories);

      const perfils = await perfilrepositorie.find();
      return perfils;


        

    }

}
export {ListPerfilService};
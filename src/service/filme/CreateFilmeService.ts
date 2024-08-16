import { getCustomRepository } from "typeorm";
import { filmerepositories } from "../../repositories/FilmeRepositories";
import { createInterface } from "readline";

interface ICreateFilme {

    titulo: string,
    faixaetaria: number;
    valoringresso: number;
    codigo: string;

}

class CreateFilmeService {

    async execute({titulo,faixaetaria,valoringresso,codigo}: ICreateFilme) {

        const filmerepository = getCustomRepository(filmerepositories);

        if (!titulo || titulo ==="") {
            throw new Error ("titulo nao pode estar vazio");
        }
        if (!faixaetaria || faixaetaria ==0) {
            throw new Error ("faixa etaria nao pode estar vazio");
        }
        if (!codigo || codigo ==="") {
            throw new Error ("codigo nao pode estar vazio");
        }
        if (!valoringresso || valoringresso ==0) {
            throw new Error ("valor do ingresso nao pode estar vazio");
        }

        const filme = filmerepository.create({
            titulo,
            faixaetaria,
            codigo,
            valoringresso
        });

        await filmerepository.save(filme);
        return filme;



    }

}
export {CreateFilmeService};
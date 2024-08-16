import { getCustomRepository } from "typeorm";
import { filmerepositories } from "../../repositories/FilmeRepositories";

interface IEditFilme {

    id: string,
    titulo: string,
    valoringresso: number,
    faixaetaria: number,
    codigo: string,

}

class EditFilmeService {

    async execute({id,titulo,faixaetaria,codigo,valoringresso}: IEditFilme) {

    const filmerepository = getCustomRepository(filmerepositories);    
    const filmealreadyexist = await filmerepository.findOne(id);
    if (!filmealreadyexist) {
        throw new Error("Filme n existe");
    }

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

    filmealreadyexist.codigo=codigo;
    filmealreadyexist.faixaetaria=faixaetaria;
    filmealreadyexist.titulo=titulo;
    filmealreadyexist.valoringresso=valoringresso;
    filmealreadyexist.updatedat=new Date();

    const ret = await filmerepository.update(id, filmealreadyexist);
    return ret;

    }

}

export {EditFilmeService};
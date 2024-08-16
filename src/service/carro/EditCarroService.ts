import { getCustomRepository } from "typeorm";
import { CarroRepositories } from "../../repositories/CarroRepositories";

interface IEditCarroService {
    id: string
    nome: string,
    marca: string,
    preco: number,
    motor:string
}

class EditCarroService {
    
    async execute({id,nome,marca,preco,motor}: IEditCarroService) {

        const carrorepository = getCustomRepository(CarroRepositories);
        const carroalreadyexist = await carrorepository.findOne({id});

        if (!carroalreadyexist) {
            throw new Error("Carro não existe")
        }

        if (!nome || nome ==="") {
            throw new Error ("Nome nao pode estar vazio");
        }
        if (!preco || preco == 0) {
            throw new Error ("Preço nao pode estar vazio ou ser 0");
        }
        if (!marca || marca === "") {
            throw new Error ("Marca nao pode estar vazio");
        }
        if (!motor || motor === "") {
            throw new Error ("Motor nao pode estar vazio");
        }

        carroalreadyexist.nome=nome;
        carroalreadyexist.marca=marca;
        carroalreadyexist.preco=preco;
        carroalreadyexist.motor=motor;
        carroalreadyexist.updatedat= new Date();

        const carro = await carrorepository.update(id, carroalreadyexist);
        return carro;

    }
    
}

export {EditCarroService};
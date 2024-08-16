import { getCustomRepository } from "typeorm";
import { CarroRepositories } from "../../repositories/CarroRepositories";

interface ICreateCarroService {
    
    nome: string;
    motor: string;
    marca: string;
    preco: number;
}

class CreateCarroService {
    async execute({preco, motor,marca,nome}: ICreateCarroService) {

        const carrorepository = getCustomRepository(CarroRepositories);

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

        const carro = carrorepository.create({
            nome,
            motor,
            marca,
            preco
        });

        await carrorepository.save(carro);
        return carro;

            
        }

        

    }


export {CreateCarroService};
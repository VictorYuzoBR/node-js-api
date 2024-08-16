import { getCustomRepository } from "typeorm";
import { CartaoCreditoRepositories } from "../../repositories/CartaoCreditoRepositories";
import { hash } from "bcryptjs";

interface ICartao {

    senhacartao: string,
    validade: string,
    proprietario: string,
    saldo: number

}

class CreateCartaoService {

    async execute({senhacartao,validade,proprietario,saldo}: ICartao) {

        const cartaorepository = getCustomRepository(CartaoCreditoRepositories);

        
        if (!validade || validade ==="") {
            throw new Error ("validade nao pode estar vazio");
        }
        if (!proprietario || proprietario ==="") {
            throw new Error ("proprietario nao pode estar vazio");
        }
        if (!saldo) {
            throw new Error ("saldo nao pode estar vazio");
        }
        if (!senhacartao || senhacartao ==="") {
            throw new Error ("senha nao pode estar vazio");
        }
        if (senhacartao.length>4) {
            throw new Error ("senha nao pode ter mais que 4 digitos");
        }

        const senhahash = await hash(senhacartao, 4);

        const cartao = cartaorepository.create({
            validade,
            proprietario,
            saldo,
            senhacartao:senhahash
            
        });

        await cartaorepository.save(cartao);
        return cartao;

    }

}

export {CreateCartaoService};
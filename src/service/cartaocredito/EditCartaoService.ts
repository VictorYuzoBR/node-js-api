import { getCustomRepository } from "typeorm";
import { CartaoCreditoRepositories } from "../../repositories/CartaoCreditoRepositories";
import { hash } from "bcryptjs";

interface ICartao {

    id: string
    senhacartao: string,
    validade: string,
    proprietario: string,
    saldo: number

}

class EditCartaoService {

    async execute({id,senhacartao,validade,proprietario,saldo}: ICartao) {

        const cartaorepository = getCustomRepository(CartaoCreditoRepositories);
        const cartaoalreadyexist = await cartaorepository.findOne(id);
        if (!cartaoalreadyexist) {
            throw new Error("cartao nao existe")
        }
        
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

        const senhahash = await hash(senhacartao, 4);

        cartaoalreadyexist.proprietario=proprietario;
        cartaoalreadyexist.saldo=saldo;
        cartaoalreadyexist.senhacartao=senhahash;
        cartaoalreadyexist.validade=validade;
        cartaoalreadyexist.updatedat=new Date();
        

        const ret = cartaorepository.update(id,cartaoalreadyexist);
        return ret;

    }

}

export {EditCartaoService};
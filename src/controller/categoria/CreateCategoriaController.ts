import { Request,Response } from "express";
import { CreateCategoriaService } from "../../service/categoria/CreateCategoriaService";

class CreateCategoriaController {

    async handle(request: Request, response: Response) {

        const {nome} = request.body;

        const createcategoriaservice = new CreateCategoriaService();
        const categoria = await createcategoriaservice.execute(
        {
            nome

        }
        )


 return response.json(categoria);


    }

}
export { CreateCategoriaController };
import { EntityRepository,Repository } from "typeorm";
import { videogame } from "../entities/videogame";

@EntityRepository(videogame)
class VideogameRepositories extends Repository<videogame>{}

export {VideogameRepositories};
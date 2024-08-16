import { PrimaryColumn,Column,CreateDateColumn,UpdateDateColumn,Entity } from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("videogame")
class videogame {

    @PrimaryColumn()
    readonly id!: string;
    @Column()
    nome!: string;
    @Column()
    desenvolvedora!: string;
    @Column()
    preco!: number;
    @Column()
    jogomaisfamoso!: string;
    @CreateDateColumn()
    createdat!: Date;
    @UpdateDateColumn()
    updatedat!: Date;
    constructor() {
        if (!this.id) {
            this.id=uuid();
        }
    }

}

export {videogame};
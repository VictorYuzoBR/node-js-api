import { Entity,PrimaryColumn,Column,CreateDateColumn,UpdateDateColumn } from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("Carro")
class Carro {

    @PrimaryColumn()
    readonly id!: string;
    @Column()
    nome!: string;
    @Column()
    preco!: number;
    @Column()
    marca!: string;
    @Column()
    motor!: string;
    @CreateDateColumn()
    createdat !: Date;
    @UpdateDateColumn()
    updatedat !: Date;
    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

}
export {Carro};
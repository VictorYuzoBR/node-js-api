import { Entity,PrimaryColumn,CreateDateColumn,UpdateDateColumn,Column } from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("categoria")
class categoria {

    @PrimaryColumn()
    readonly id!: string;
    @Column()
    nome ?: string;
    @CreateDateColumn()
    createdat?: Date;
    @UpdateDateColumn()
    updatedat?: Date;
    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    } 

}

export {categoria};
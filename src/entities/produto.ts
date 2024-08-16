import {
    Entity,PrimaryColumn,Column,CreateDateColumn,UpdateDateColumn,ManyToOne,JoinColumn
} from "typeorm";
import { categoria } from "./categoria";

import {v4 as uuid} from "uuid";

@Entity("Produto")
class Produto {

    @PrimaryColumn()
    readonly id!: string;
    @Column()
    nome?: string;
    @Column()
    fabricante?: string;
    @Column()
    validade?: string;
    @ManyToOne(() => categoria)
    @JoinColumn()
    categoria?: categoria;
    @CreateDateColumn()
    createdat?: Date;
    @UpdateDateColumn()
    updatedat?: Date;
    constructor () {
        if (!this.id) {
            this.id = uuid();
        }
    }

}
export {Produto}

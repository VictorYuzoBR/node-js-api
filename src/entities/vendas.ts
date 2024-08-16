import {
    Entity,PrimaryColumn,Column,CreateDateColumn,UpdateDateColumn, JoinColumn, OneToOne,ManyToOne
} from "typeorm";

import {v4 as uuid} from "uuid";

import { User } from "./user";
import { Produto } from "./produto";

@Entity("vendas")
class vendas {

    @PrimaryColumn()
    readonly id!: string;
    @ManyToOne(() => Produto)
    @JoinColumn()
    idproduto: Produto;
    @ManyToOne(() => User)
    @JoinColumn()
    iduser: User;
    @Column()
    quantidade!: string;
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

export {vendas};
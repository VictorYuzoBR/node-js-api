import {
    Entity,PrimaryColumn,Column,CreateDateColumn,UpdateDateColumn,
} from "typeorm";

import {v4 as uuid} from "uuid";

@Entity("perfil")
class perfil {

    @PrimaryColumn()
    readonly id!: string;
    @Column()
    nome?: string;
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

export {perfil};
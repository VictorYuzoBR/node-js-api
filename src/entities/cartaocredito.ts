import { Entity,PrimaryColumn,CreateDateColumn,UpdateDateColumn,Column } from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("cartaocredito")
class cartaocredito {

    @PrimaryColumn()
    readonly id!: string;
    @Column()
    senhacartao!: string;
    @Column()
    proprietario!: string;
    @Column()
    validade!: string;
    @Column()
    saldo!: number;
    @CreateDateColumn()
    createdat!: Date;
    @UpdateDateColumn()
    updatedat!: Date;
    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    } 

}

export {cartaocredito};
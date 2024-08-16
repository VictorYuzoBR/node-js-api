import { Entity,PrimaryColumn,CreateDateColumn,UpdateDateColumn,Column } from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("filme")
class filme {

    @PrimaryColumn()
    readonly id!: string;
    @Column()
    titulo!: string;
    @Column()
    faixaetaria!: number;
    @Column()
    valoringresso!: number;
    @Column()
    codigo!: string;
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
export {filme};
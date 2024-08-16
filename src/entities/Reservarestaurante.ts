import {
    Entity,PrimaryColumn,Column,CreateDateColumn,UpdateDateColumn,
} from "typeorm";

import {v4 as uuid} from "uuid";

@Entity("reservarestaurante")
class ReservaRestaurente {

    @PrimaryColumn()
    readonly id!: string;
    @Column()
    nome!: string;
    @Column()
    data!: string;
    @Column()
    numpessoas!: number;
    @Column()
    horario!: string;
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
export {ReservaRestaurente}
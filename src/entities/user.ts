import {
    Entity,PrimaryColumn,Column,CreateDateColumn,UpdateDateColumn, JoinColumn, OneToOne,ManyToOne
} from "typeorm";

import {v4 as uuid} from "uuid";
import { perfil } from "./perfil";

@Entity("users")
class User {
    @PrimaryColumn()
    readonly id!: string;
    @Column()
    name?: string;
    @Column()
    email?: string;
    @Column()
    admin?: boolean;
    @Column()
    password?: string;
    @ManyToOne(() => perfil)
    @JoinColumn()
    Perfil?: perfil;
    @CreateDateColumn()
    created_at?: Date;
    @UpdateDateColumn()
    updated_at?: Date;
    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}
export {User};
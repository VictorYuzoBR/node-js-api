import {MigrationInterface, QueryRunner} from "typeorm";

export class apr1701342833075 implements MigrationInterface {
    name = 'apr1701342833075'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Carro" ("id" character varying NOT NULL, "nome" character varying NOT NULL, "preco" integer NOT NULL, "marca" character varying NOT NULL, "motor" character varying NOT NULL, "createdat" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_8e8b5628934f757dd68646cb512" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cartaocredito" ("id" character varying NOT NULL, "senhacartao" character varying NOT NULL, "proprietario" character varying NOT NULL, "validade" character varying NOT NULL, "saldo" integer NOT NULL, "createdat" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_fe2063fb2d260390b2259f1c20c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categoria" ("id" character varying NOT NULL, "nome" character varying NOT NULL, "createdat" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_f027836b77b84fb4c3a374dc70d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "filme" ("id" character varying NOT NULL, "titulo" character varying NOT NULL, "faixaetaria" integer NOT NULL, "valoringresso" integer NOT NULL, "codigo" character varying NOT NULL, "createdat" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ac446c85d8dc018878fd9b2b992" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "perfil" ("id" character varying NOT NULL, "nome" character varying NOT NULL, "createdat" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_814c50101bf1675e1f691aad2c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Produto" ("id" character varying NOT NULL, "nome" character varying NOT NULL, "fabricante" character varying NOT NULL, "validade" character varying NOT NULL, "createdat" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), "categoriaId" character varying, CONSTRAINT "PK_2ec0c412264537e6d5ae0bf4507" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reservarestaurante" ("id" character varying NOT NULL, "nome" character varying NOT NULL, "data" character varying NOT NULL, "numpessoas" integer NOT NULL, "horario" character varying NOT NULL, "createdat" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b4344c67f82a32a028129a60c0c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "admin" boolean NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "perfilId" character varying, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vendas" ("id" character varying NOT NULL, "quantidade" character varying NOT NULL, "createdat" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), "idprodutoId" character varying, "iduserId" character varying, CONSTRAINT "PK_371c42d415efbac7097bd08b744" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "videogame" ("id" character varying NOT NULL, "nome" character varying NOT NULL, "desenvolvedora" character varying NOT NULL, "preco" integer NOT NULL, "jogomaisfamoso" character varying NOT NULL, "createdat" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a9b00a577b002ce1584b97d192d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Produto" ADD CONSTRAINT "FK_524a129690f33fdee589bfcb554" FOREIGN KEY ("categoriaId") REFERENCES "categoria"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_a7564398b65edf8fd5d4aa568c7" FOREIGN KEY ("perfilId") REFERENCES "perfil"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vendas" ADD CONSTRAINT "FK_f3773932a22eac1ca3e06b28649" FOREIGN KEY ("idprodutoId") REFERENCES "Produto"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vendas" ADD CONSTRAINT "FK_a18c168d559caf8ca70f31b7a7d" FOREIGN KEY ("iduserId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendas" DROP CONSTRAINT "FK_a18c168d559caf8ca70f31b7a7d"`);
        await queryRunner.query(`ALTER TABLE "vendas" DROP CONSTRAINT "FK_f3773932a22eac1ca3e06b28649"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_a7564398b65edf8fd5d4aa568c7"`);
        await queryRunner.query(`ALTER TABLE "Produto" DROP CONSTRAINT "FK_524a129690f33fdee589bfcb554"`);
        await queryRunner.query(`DROP TABLE "videogame"`);
        await queryRunner.query(`DROP TABLE "vendas"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "reservarestaurante"`);
        await queryRunner.query(`DROP TABLE "Produto"`);
        await queryRunner.query(`DROP TABLE "perfil"`);
        await queryRunner.query(`DROP TABLE "filme"`);
        await queryRunner.query(`DROP TABLE "categoria"`);
        await queryRunner.query(`DROP TABLE "cartaocredito"`);
        await queryRunner.query(`DROP TABLE "Carro"`);
    }

}

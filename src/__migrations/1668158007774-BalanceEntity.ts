import {MigrationInterface, QueryRunner} from "typeorm";

export class BalanceEntity1668158007774 implements MigrationInterface {
    name = 'BalanceEntity1668158007774'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "balance" ("id" SERIAL NOT NULL, "is_active" bit NOT NULL DEFAULT '1', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "balance_amount" real NOT NULL DEFAULT '0', "date" date NOT NULL, CONSTRAINT "UQ_f3ecfd82f0a58935d146128a519" UNIQUE ("date"), CONSTRAINT "PK_079dddd31a81672e8143a649ca0" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "balance"`);
    }

}

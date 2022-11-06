import {MigrationInterface, QueryRunner} from "typeorm";

export class BudgetEntity1667693390467 implements MigrationInterface {
    name = 'BudgetEntity1667693390467'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "budget" ("id" SERIAL NOT NULL, "is_active" bit NOT NULL DEFAULT '1', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "code" character varying(3) NOT NULL, "budget_amount" real NOT NULL DEFAULT '0', CONSTRAINT "UQ_a8b96820b2d7cc66ad39df9760a" UNIQUE ("code"), CONSTRAINT "PK_9af87bcfd2de21bd9630dddaa0e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "product" ADD "is_regular" bit NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "is_regular"`);
        await queryRunner.query(`DROP TABLE "budget"`);
    }

}

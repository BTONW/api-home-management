import {MigrationInterface, QueryRunner} from "typeorm";

export class RefactorCostValue1667877698115 implements MigrationInterface {
    name = 'RefactorCostValue1667877698115'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cost_value" DROP CONSTRAINT "FK_8c99c0d841c135d48c2dbb566a1"`);
        await queryRunner.query(`ALTER TABLE "cost_value" DROP COLUMN "day"`);
        await queryRunner.query(`ALTER TABLE "cost_value" DROP COLUMN "year"`);
        await queryRunner.query(`ALTER TABLE "cost_value" DROP COLUMN "month_code"`);
        await queryRunner.query(`ALTER TABLE "cost_value" ADD "date" date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cost_value" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "cost_value" ADD "month_code" integer`);
        await queryRunner.query(`ALTER TABLE "cost_value" ADD "year" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cost_value" ADD "day" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cost_value" ADD CONSTRAINT "FK_8c99c0d841c135d48c2dbb566a1" FOREIGN KEY ("month_code") REFERENCES "month"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}

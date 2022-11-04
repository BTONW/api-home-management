import {MigrationInterface, QueryRunner} from "typeorm";

export class FixUnique1667523993767 implements MigrationInterface {
    name = 'FixUnique1667523993767'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "month" DROP COLUMN "name_full"`);
        await queryRunner.query(`ALTER TABLE "month" DROP COLUMN "name_short"`);
        await queryRunner.query(`ALTER TABLE "month" ADD "name_en_full" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "month" ADD "name_en_short" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "month" ADD "name_th_full" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "month" ADD "name_th_short" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cost_value" ALTER COLUMN "cost_amount" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cost_value" ALTER COLUMN "cost_amount" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "cost_value" DROP CONSTRAINT "UQ_a8d09210cd2b6d3c2b507dc2afa"`);
        await queryRunner.query(`ALTER TABLE "cost_value" DROP CONSTRAINT "UQ_a8e4fb35117f09a0659676314b5"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cost_value" ADD CONSTRAINT "UQ_a8e4fb35117f09a0659676314b5" UNIQUE ("year")`);
        await queryRunner.query(`ALTER TABLE "cost_value" ADD CONSTRAINT "UQ_a8d09210cd2b6d3c2b507dc2afa" UNIQUE ("day")`);
        await queryRunner.query(`ALTER TABLE "cost_value" ALTER COLUMN "cost_amount" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "cost_value" ALTER COLUMN "cost_amount" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "month" DROP COLUMN "name_th_short"`);
        await queryRunner.query(`ALTER TABLE "month" DROP COLUMN "name_th_full"`);
        await queryRunner.query(`ALTER TABLE "month" DROP COLUMN "name_en_short"`);
        await queryRunner.query(`ALTER TABLE "month" DROP COLUMN "name_en_full"`);
        await queryRunner.query(`ALTER TABLE "month" ADD "name_short" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "month" ADD "name_full" character varying NOT NULL`);
    }

}

import {MigrationInterface, QueryRunner} from "typeorm";

export class FixLength1667524990432 implements MigrationInterface {
    name = 'FixLength1667524990432'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "UQ_22cc43e9a74d7498546e9a63e77"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "UQ_22cc43e9a74d7498546e9a63e77" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "month" DROP CONSTRAINT "UQ_4a6083f27bbd9f07e32c184b0dd"`);
        await queryRunner.query(`ALTER TABLE "month" DROP COLUMN "code"`);
        await queryRunner.query(`ALTER TABLE "month" ADD "code" character varying(2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "month" ADD CONSTRAINT "UQ_4a6083f27bbd9f07e32c184b0dd" UNIQUE ("code")`);
        await queryRunner.query(`ALTER TABLE "month" DROP COLUMN "name_en_full"`);
        await queryRunner.query(`ALTER TABLE "month" ADD "name_en_full" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "month" DROP COLUMN "name_en_short"`);
        await queryRunner.query(`ALTER TABLE "month" ADD "name_en_short" character varying(3) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "month" DROP COLUMN "name_th_full"`);
        await queryRunner.query(`ALTER TABLE "month" ADD "name_th_full" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "month" DROP COLUMN "name_th_short"`);
        await queryRunner.query(`ALTER TABLE "month" ADD "name_th_short" character varying(5) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "month" DROP COLUMN "name_th_short"`);
        await queryRunner.query(`ALTER TABLE "month" ADD "name_th_short" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "month" DROP COLUMN "name_th_full"`);
        await queryRunner.query(`ALTER TABLE "month" ADD "name_th_full" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "month" DROP COLUMN "name_en_short"`);
        await queryRunner.query(`ALTER TABLE "month" ADD "name_en_short" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "month" DROP COLUMN "name_en_full"`);
        await queryRunner.query(`ALTER TABLE "month" ADD "name_en_full" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "month" DROP CONSTRAINT "UQ_4a6083f27bbd9f07e32c184b0dd"`);
        await queryRunner.query(`ALTER TABLE "month" DROP COLUMN "code"`);
        await queryRunner.query(`ALTER TABLE "month" ADD "code" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "month" ADD CONSTRAINT "UQ_4a6083f27bbd9f07e32c184b0dd" UNIQUE ("code")`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "UQ_22cc43e9a74d7498546e9a63e77"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "UQ_22cc43e9a74d7498546e9a63e77" UNIQUE ("name")`);
    }

}

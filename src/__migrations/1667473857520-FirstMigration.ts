import {MigrationInterface, QueryRunner} from "typeorm";

export class FirstMigration1667473857520 implements MigrationInterface {
    name = 'FirstMigration1667473857520'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "month" ("id" SERIAL NOT NULL, "is_active" bit NOT NULL DEFAULT '1', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "code" character varying NOT NULL, "name_full" character varying NOT NULL, "name_short" character varying NOT NULL, CONSTRAINT "UQ_4a6083f27bbd9f07e32c184b0dd" UNIQUE ("code"), CONSTRAINT "PK_e253c67eb75a81acf16f7f79323" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."cost_value_payment_enum" AS ENUM('Cash', 'Credit')`);
        await queryRunner.query(`CREATE TABLE "cost_value" ("id" SERIAL NOT NULL, "is_active" bit NOT NULL DEFAULT '1', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "cost_amount" real, "payment" "public"."cost_value_payment_enum" NOT NULL DEFAULT 'Cash', "day" integer NOT NULL, "year" integer NOT NULL, "month_code" integer, "product_id" integer, CONSTRAINT "UQ_a8d09210cd2b6d3c2b507dc2afa" UNIQUE ("day"), CONSTRAINT "UQ_a8e4fb35117f09a0659676314b5" UNIQUE ("year"), CONSTRAINT "PK_15786128a826d0e05b258851e86" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "is_active" bit NOT NULL DEFAULT '1', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, CONSTRAINT "UQ_22cc43e9a74d7498546e9a63e77" UNIQUE ("name"), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "cost_value" ADD CONSTRAINT "FK_8c99c0d841c135d48c2dbb566a1" FOREIGN KEY ("month_code") REFERENCES "month"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cost_value" ADD CONSTRAINT "FK_6ef956127093c00aa7111e39446" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cost_value" DROP CONSTRAINT "FK_6ef956127093c00aa7111e39446"`);
        await queryRunner.query(`ALTER TABLE "cost_value" DROP CONSTRAINT "FK_8c99c0d841c135d48c2dbb566a1"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "cost_value"`);
        await queryRunner.query(`DROP TYPE "public"."cost_value_payment_enum"`);
        await queryRunner.query(`DROP TABLE "month"`);
    }

}

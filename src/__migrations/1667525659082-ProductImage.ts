import {MigrationInterface, QueryRunner} from "typeorm";

export class ProductImage1667525659082 implements MigrationInterface {
    name = 'ProductImage1667525659082'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "image" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "image"`);
    }

}

import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1737738127375 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "roles" (
              "id" SERIAL PRIMARY KEY,
              "name" VARCHAR(50) NOT NULL,
              "description" TEXT
            )
          `);

        await queryRunner.query(`
            CREATE TABLE "users" (
              "id" SERIAL PRIMARY KEY,
              "username" VARCHAR(100) NOT NULL UNIQUE,
              "password" VARCHAR(255) NOT NULL,
              "role_id" INTEGER NOT NULL,
              CONSTRAINT "FK_role" FOREIGN KEY ("role_id") REFERENCES "roles"("id")
            )
          `);

        await queryRunner.query(`
            CREATE TABLE "donations" (
              "id" SERIAL PRIMARY KEY,
              "donor_name" VARCHAR(255),
              "amount" DECIMAL(10, 2),
              "message" TEXT,
              "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
          `);

        await queryRunner.query(`
            CREATE TABLE "donor_reports" (
              "id" SERIAL PRIMARY KEY,
              "user_id" INTEGER NOT NULL,
              "donation_id" INTEGER NOT NULL,
              "report_details" TEXT,
              CONSTRAINT "FK_user" FOREIGN KEY ("user_id") REFERENCES "users"("id"),
              CONSTRAINT "FK_donation" FOREIGN KEY ("donation_id") REFERENCES "donations"("id")
            )
          `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "donor_reports"`);
        await queryRunner.query(`DROP TABLE "donations"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "roles"`);
    }

}

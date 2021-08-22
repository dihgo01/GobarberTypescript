import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1629629756134 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'name',
                        type: "uuid",
                        isNullable: false,
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isUnique: true,
                        isNullable: false,
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    },


                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('users')
    }

}

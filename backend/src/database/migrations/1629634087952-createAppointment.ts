
import {MigrationInterface, QueryRunner, Table } from "typeorm";


export class createAppointment1629381350424 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'appointments',
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'provider_id',
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: 'date',
                        type:'timestamp',
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
                ],
                foreignKeys: [
                    {
                      name: "providerUser",
                      referencedTableName: "users",
                      referencedColumnNames: ["id"],
                      columnNames: ["provider_id"],
                      onDelete: "CASCADE",
                      onUpdate: "CASCADE"
                    }
                  ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('appointments')
    }

}

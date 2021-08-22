
import {MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";


export class createAppointment1629381350424 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'appointments',
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'provider_id',
                        type: "uuid",
                        isNullable: true,
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

                    },
                ]
            })
        )

        await queryRunner.createForeignKey('appointments', new TableForeignKey({
         columnNames: ["provider_id"],
         referencedColumnNames: ["id"],
         referencedTableName: "users",
         onDelete : 'SET NULL',
         onUpdate: 'CASCADE',
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('appointments')
    }

}

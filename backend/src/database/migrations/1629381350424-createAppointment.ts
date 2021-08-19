import {MigrationInterface, QueryRunner, Table} from "typeorm";


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
                        name: 'provider',
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: 'date',
                        type:'timestamp',
                        isNullable: false,
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('appointments')
    }

}

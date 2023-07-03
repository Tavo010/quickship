import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('package_history')
export class PackageHistoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'package_status',
    nullable: true,
  })
  status: string;

  @Column({
    name: 'id_package',
    nullable: true,
  })
  idPackage: number;

  @Column({
    name: 'client_description',
    nullable: true,
  })
  description: string;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'create_at',
  })
  createAt!: Date;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'update_at',
  })
  updateAt!: Date;

  @DeleteDateColumn({
    type: 'timestamp',
    name: 'delete_at',
    nullable: true,
  })
  deleteAt?: Date;
}
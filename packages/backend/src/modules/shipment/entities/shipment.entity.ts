import { ClientEntity } from 'src/modules/client/entities/client.entity';
import { DirectionEntity } from 'src/modules/directions/entities/direction.entity';
import { InvoiceEntity } from 'src/modules/invoices/entities/invoice.entity';
import { MessengerEntity } from 'src/modules/messengers/entities/messenger.entity';
import { PackageEntity } from 'src/modules/packages/entities/package.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'shipment' })
export class ShipmentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'price', type: 'float', default: 0 })
  price: number;

  @Column({ name: 'comments', type: 'text', default: 0 })
  comments: string;

  // @OneToMany(() => PackageEntity, (package_) => package_.shipment, {
  //   nullable: true,
  // })
  // @JoinColumn()
  // packages?: PackageEntity[];

  @CreateDateColumn({
    type: 'timestamp',
    name: 'create_at',
  })
  createAt!: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'update_at',
  })
  updateAt!: Date;

  @DeleteDateColumn({
    type: 'timestamp',
    name: 'delete_at',
  })
  deleteAt!: Date;
}

import { Module } from '@nestjs/common';
import { PackagesService } from './packages.service';
import { PackagesResolver } from './packages.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PackageEntity } from './entities/package.entity';
import { OrdersModule } from '../orders/orders.module';
import { DirectionsModule } from '../directions/directions.module';
import { ContactModule } from '../contact/contact.module';
import { ContactEntity } from '../contact/entities/contact.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PackageEntity, ContactEntity]),
    OrdersModule,
    DirectionsModule,
    ContactModule
  ],
  providers: [PackagesResolver, PackagesService],
  exports: [PackagesService],
})
export class PackagesModule {}

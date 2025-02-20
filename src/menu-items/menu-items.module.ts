import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu_items } from './menu-item.entity';
import { MenuItemsController } from './menu-items.controller';
import { MenuItemsService } from './menu-items.service';

@Module({
  imports: [TypeOrmModule.forFeature([Menu_items])],
  controllers: [MenuItemsController],
  providers: [MenuItemsService],
  exports: [MenuItemsModule, MenuItemsService],
})
export class MenuItemsModule {}

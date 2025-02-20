import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMenuItemDTO } from './dto/create-menu-item.dto';
import { UpdateMenuItemDTO } from './dto/update-menu-item.dto';
import { Menu_items } from './menu-item.entity';

@Injectable()
export class MenuItemsService {
  constructor(
    @InjectRepository(Menu_items)
    private readonly menuItemsRepository: Repository<Menu_items>,
  ) {}

  async createMenuItem(
    createMenuItemDTO: CreateMenuItemDTO,
  ): Promise<Menu_items> {
    // const newItem = this.menuItemsRepository.create(createMenuItemDTO);
    return this.menuItemsRepository.save(createMenuItemDTO);
  }

  async findAll(): Promise<Menu_items[]> {
    return this.menuItemsRepository.find();
  }

  async findOne(id: number): Promise<Menu_items> {
    const item = await this.menuItemsRepository.findOneBy({ id });
    if (!item) {
      throw new NotFoundException('Item não encontrado');
    }
    return item;
  }

  async updateMenuItem(
    id: number,
    updateMenuItemDTO: UpdateMenuItemDTO,
  ): Promise<Menu_items> {
    const item = await this.menuItemsRepository.findOneBy({ id });
    if (!item) {
      throw new NotFoundException('Item não encontrado');
    }
    const updatedItem = Object.assign(item, updateMenuItemDTO);
    return this.menuItemsRepository.save(updatedItem);
  }

  async remove(id: number): Promise<void> {
    const item = await this.menuItemsRepository.findOneBy({ id });
    if (!item) {
      throw new NotFoundException('Item não encontrado');
    }
    await this.menuItemsRepository.delete(id);
  }
}

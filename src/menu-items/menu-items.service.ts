import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMenuItemDTO } from './dto/create-menu-item.dto';
import { UpdateMenuItemDTO } from './dto/update-menu-item.dto';
import { MenuItem } from './menu-item.entity';

@Injectable()
export class MenuItemsService {
  constructor(
    @InjectRepository(MenuItem)
    private readonly menuItemsRepository: Repository<MenuItem>,
  ) {}

  async createMenuItem(createMenuItemDTO: CreateMenuItemDTO): Promise<MenuItem> {
    const newItem = this.menuItemsRepository.create(createMenuItemDTO);
    return this.menuItemsRepository.save(newItem);
  }

  async findAll(): Promise<MenuItem[]> {
    return this.menuItemsRepository.find();
  }

  async findOne(id: number): Promise<MenuItem> {
    const item = await this.menuItemsRepository.findOneBy({ id });
    if (!item) {
      throw new NotFoundException('Item não encontrado');
    }
    return item;
  }

  async updateMenuItem(id: number, updateMenuItemDTO: UpdateMenuItemDTO): Promise<MenuItem> {
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

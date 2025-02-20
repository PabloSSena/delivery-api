import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
<<<<<<< HEAD
import { Repository, DeepPartial } from 'typeorm';
=======
import { Repository } from 'typeorm';
>>>>>>> 3ae6c8a5ea228b04defe1a83f94bcec1ce5f2045
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
<<<<<<< HEAD
    const newItem = this.menuItemsRepository.create(createMenuItemDTO as DeepPartial<MenuItem>);
=======
    const newItem = this.menuItemsRepository.create(createMenuItemDTO);
>>>>>>> 3ae6c8a5ea228b04defe1a83f94bcec1ce5f2045
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

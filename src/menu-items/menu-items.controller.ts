import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateMenuItemDTO } from './dto/create-menu-item.dto';
import { UpdateMenuItemDTO } from './dto/update-menu-item.dto';
import { MenuItemsService } from './menu-items.service';

@Controller('api/menu-items')
export class MenuItemsController {
  constructor(private menuItemsService: MenuItemsService) {}

  @Post()
  async create(@Body() createMenuItemDTO: CreateMenuItemDTO) {
    return this.menuItemsService.createMenuItem(createMenuItemDTO);
  }

  @Get()
  async findAll() {
    return this.menuItemsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.menuItemsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateMenuItemDTO: UpdateMenuItemDTO) {
    return this.menuItemsService.updateMenuItem(id, updateMenuItemDTO);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.menuItemsService.remove(id);
  }
}

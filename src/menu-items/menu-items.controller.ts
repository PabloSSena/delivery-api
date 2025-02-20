import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateMenuItemDTO } from './dto/create-menu-items.dto';
import { UpdateMenuItemDTO } from './dto/update-menu-items.dto';
import { MenuItemsService } from './menu-items.service';
import { Public } from 'src/decorators/public.decorator';

@Controller('api/menu-items')
export class MenuItemsController {
  /**
   *
   */
  constructor(private menuItemsService: MenuItemsService) {}
  @Public()
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

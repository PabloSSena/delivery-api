import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateAddressDTO } from 'src/address/dto/create-address.dto';
import { UpdateAddressDTO } from 'src/address/dto/update-address.dto';
import { AddressService } from 'src/services/address.service';

@Controller('api/address')
export class AddressController {
  /**
   *
   */
  constructor(private addressService: AddressService) {}

  @Post()
  async create(@Param() id, @Body() body: CreateAddressDTO) {
    return this.addressService.create(body);
  }

  @Put(':id')
  async updateByUserId(@Param() id: number, @Body() body: UpdateAddressDTO) {
    return this.addressService.update(id, body);
  }

  @Get()
  async findAll() {
    return this.addressService.findAll();
  }

  @Get('/userId/:id')
  async findByUserId(@Param() id: number) {
    return this.addressService.findByUserId(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.addressService.remove(id);
  }
}

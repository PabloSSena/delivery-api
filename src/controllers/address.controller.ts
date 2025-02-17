import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateAddressDTO } from 'src/address/dto/create-address.dto';
import { AddressService } from 'src/services/address.service';

@Controller('api/address')
export class AddressController {
  /**
   *
   */
  constructor(private addressService: AddressService) {}

  @Post()
  async create(@Body() body: CreateAddressDTO) {
    return this.addressService.create(body);
  }

  @Get()
  async findAll() {
    return this.addressService.findAll();
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.addressService.remove(id);
  }
}

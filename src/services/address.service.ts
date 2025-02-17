import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from 'src/address/address.entity';
import { CreateAddressResponseDTO } from 'src/address/dto/create-address-response.dto';
import { CreateAddressDTO } from 'src/address/dto/create-address.dto';
import { Repository } from 'typeorm';

@Injectable()
export class AddressService {
  /**
   *
   */
  constructor(
    @InjectRepository(Address)
    private readonly AddressRepository: Repository<Address>,
  ) {}

  async findByUserId(userId: number) {
    return this.AddressRepository.find({
      where: { user: userId },
    });
  }

  async create(
    addressDto: CreateAddressDTO,
  ): Promise<CreateAddressResponseDTO> {
    try {
      const newAddress = await this.AddressRepository.save(addressDto);
      return {
        city: newAddress.city,
        number: newAddress.number,
        state: newAddress.state,
        street: newAddress.street,
        zipCode: newAddress.zipCode,
      };
    } catch (error) {
      return {
        city: '',
        number: -1,
        state: '',
        street: '',
        zipCode: '',
      };
    }
  }

  async findAll() {
    return this.AddressRepository.find();
  }

  async remove(id: number) {
    return this.AddressRepository.delete(id);
  }
}

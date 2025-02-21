import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from 'src/address/address.entity';
import { CreateAddressResponseDTO } from 'src/address/dto/create-address-response.dto';
import { CreateAddressDTO } from 'src/address/dto/create-address.dto';
import { UpdateAddressDTO } from 'src/address/dto/update-address.dto';
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

  async update(id: number, addressDto: UpdateAddressDTO): Promise<Address> {
    const existingAddress = await this.AddressRepository.findOne({
      where: { user: id },
    });

    if (!existingAddress) {
      throw new NotFoundException('Endereço não encontrado');
    }

    const updatedAddress = Object.assign(existingAddress, addressDto);
    return this.AddressRepository.save(updatedAddress);
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

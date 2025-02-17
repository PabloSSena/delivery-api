import { IsNotEmpty } from 'class-validator';

export class CreateAddressDTO {
  @IsNotEmpty()
  user: number;

  @IsNotEmpty()
  street: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  state: string;

  @IsNotEmpty()
  zipCode: string;

  @IsNotEmpty()
  number: number;
}

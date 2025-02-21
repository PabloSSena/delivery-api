import { IsNotEmpty } from 'class-validator';

export class UpdateAddressDTO {
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

import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMenuItemDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  imageUrl: string;

  @IsBoolean()
  on_little_car: boolean;
}

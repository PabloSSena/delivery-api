import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateMenuItemDTO {
  @IsOptional()
  id?: number;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNumber()
  price?: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsOptional()
  @IsBoolean()
  on_little_car?: boolean;
}

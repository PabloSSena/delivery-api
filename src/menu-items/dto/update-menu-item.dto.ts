import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateMenuItemDTO {
  @IsOptional()
  @IsString()
<<<<<<< HEAD
  id?: string;

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
=======
  codigo?: string;

  @IsOptional()
  @IsString()
  descricao?: string;

  @IsOptional()
  @IsNumber()
  preco?: number;

  @IsOptional()
  @IsString()
  detalhes?: string;

  @IsOptional()
  @IsString()
  imagem?: string;

  @IsOptional()
  @IsBoolean()
  carrinho?: boolean;
>>>>>>> 3ae6c8a5ea228b04defe1a83f94bcec1ce5f2045
}

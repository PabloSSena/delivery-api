import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMenuItemDTO {
  @IsNotEmpty()
  @IsString()
<<<<<<< HEAD
  id: string;

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
=======
  codigo: string;

  @IsNotEmpty()
  @IsString()
  descricao: string;

  @IsNotEmpty()
  @IsNumber()
  preco: number;

  @IsNotEmpty()
  @IsString()
  detalhes: string;

  @IsNotEmpty()
  @IsString()
  imagem: string;

  @IsBoolean()
  carrinho: boolean;
>>>>>>> 3ae6c8a5ea228b04defe1a83f94bcec1ce5f2045
}

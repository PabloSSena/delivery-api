import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMenuItemDTO {
  @IsNotEmpty()
  @IsString()
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
}

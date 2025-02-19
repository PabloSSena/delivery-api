import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateMenuItemDTO {
  @IsOptional()
  @IsString()
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
}

import { IsNotEmpty, IsNumber, IsUrl } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
// import { PartialType, ApiProperty } from '@nestjs/swagger';
export class CreateProductDto {
  @IsNotEmpty({ message: 'name is not empty' })
  readonly name: string;

  @IsNotEmpty({ message: 'description is not empty' })
  readonly description: string;

  @IsNumber({}, { message: 'price must be a number' })
  readonly price: number;

  @IsNumber({}, { message: 'stock must be a number' })
  readonly stock: number;

  @IsUrl({}, { message: 'image must be a url' })
  readonly image: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty({ message: `name's category must be not empty` })
  name: string;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}

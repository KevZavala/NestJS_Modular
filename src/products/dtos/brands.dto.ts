import { IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
export class createBrandDto {
  @IsNotEmpty({ message: 'brand name must not empty' })
  name: string;
}

export class UpdateBrandDto extends PartialType(createBrandDto) {}

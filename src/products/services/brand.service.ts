import { Injectable } from '@nestjs/common';
import { Brand } from '../../../dist/products/entities/brands.entity';
import { createBrandDto, UpdateBrandDto } from '../dtos/brands.dto';

@Injectable()
export class BrandService {
  private brands: Brand[] = [];
  private counter = 0;

  createBrand(createBrandDto: createBrandDto) {
    this.counter++;

    const newBrand: Brand = {
      id: this.counter,
      ...createBrandDto,
    };
    this.brands.push(newBrand);
    return newBrand;
  }
  getBrands() {
    return this.brands;
  }
  getBrand(id: number) {
    const brand = this.brands.find((element) => element.id === id);
    return brand;
  }
  updateBrand(id: number, updateBrandDto: UpdateBrandDto) {
    const brandId = this.brands.findIndex((element) => element.id === id);
    this.brands[brandId] = {
      ...this.brands[brandId],
      ...updateBrandDto,
    };
    return this.brands[brandId];
  }
  deleteBrand(id: number) {
    this.brands = this.brands.filter((element) => element.id !== id);
    return true;
  }
}

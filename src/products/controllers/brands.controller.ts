import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { BrandService } from '../services/brand.service';
import { createBrandDto, UpdateBrandDto } from '../dtos/brands.dto';

@Controller('brands')
export class BrandsController {
  constructor(private brandS: BrandService) {}
  @Post()
  postBrand(@Body() payload: createBrandDto) {
    const brand = this.brandS.createBrand(payload);
    return {
      brand,
    };
  }
  @Get()
  getBrands() {
    const brands = this.brandS.getBrands();
    return {
      brands,
    };
  }
  @Get(':id')
  getBrand(@Param('id', ParseIntPipe) id: number) {
    const brand = this.brandS.getBrand(id);
    return {
      brand,
    };
  }
  @Put(':id')
  putBrand(
    @Param('id', ParseIntPipe) id: number,
    @Body() paylaod: UpdateBrandDto,
  ) {
    const brand = this.brandS.updateBrand(id, paylaod);
    return {
      brand,
    };
  }
  @Delete(':id')
  deleteCategory(@Param('id', ParseIntPipe) id: number) {
    const deleteBrand = this.brandS.deleteBrand(id);
    return {
      delete: deleteBrand,
    };
  }
}

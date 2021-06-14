import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { BrandsController } from './controllers/brands.controller';
import { CategoriesController } from './controllers/categories.controller';
import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';
import { BrandService } from './services/brand.service';

@Module({
  controllers: [ProductsController, BrandsController, CategoriesController],
  providers: [ProductService, CategoryService, BrandService],
})
export class ProductsModule {}

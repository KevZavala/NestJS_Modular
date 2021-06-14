import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';
import { ProductService } from '../services/product.service';
import { ParseIntPipe } from '../../common/parse-int.pipe';

@Controller('products')
export class ProductsController {
  constructor(private productS: ProductService) {}

  @Post()
  postProduct(@Body() createProductDTO: CreateProductDto) {
    const newProduct = this.productS.createProduct(createProductDTO);
    return {
      product: newProduct,
    };
  }

  @Get()
  getProducts() {
    const products = this.productS.getProducts();
    return {
      products,
    };
  }

  @Get(':id')
  getProduct(@Param('id', ParseIntPipe) id: number) {
    const product = this.productS.getProduct(id);
    return {
      product,
    };
  }
  @Put(':id')
  putProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    const product = this.productS.updateProduct(id, updateProductDto);
    return {
      product,
    };
  }
  @Delete(':id')
  deleteProduct(@Param('id', ParseIntPipe) id: number) {
    const isDeleted = this.productS.deleteProduct(id);
    return {
      deleted: isDeleted,
    };
  }
}

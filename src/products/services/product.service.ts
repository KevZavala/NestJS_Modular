import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Product } from 'src/products/entities/products.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';

@Injectable()
export class ProductService {
  private products: Product[] = [];
  private counter = 0;
  constructor(
    @Inject('API_KEY_GLOBAL') private apiKeyGlobal: string,
    private configS: ConfigService,
  ) {}
  createProduct(createProductDto: CreateProductDto) {
    this.counter++;

    const newProduct: Product = {
      id: this.counter,
      ...createProductDto,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  getProducts() {
    // uso de modulos globales
    console.log(this.apiKeyGlobal);
    // configuraciones con archivos de entorno
    const apiKey = this.configS.get('API_KEY');
    console.log(apiKey);
    return this.products;
  }
  getProduct(id: number) {
    const product = this.products.find((element) => element.id === id);
    return product;
  }
  updateProduct(id: number, updateProductDto: UpdateProductDto) {
    const productId = this.products.findIndex((element) => element.id === id);
    this.products[productId] = {
      ...this.products[productId],
      ...updateProductDto,
    };
    return this.products[productId];
  }
  deleteProduct(id: number) {
    this.products = this.products.filter((products) => products.id !== id);
    return true;
  }
}

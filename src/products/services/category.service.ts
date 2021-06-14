import { Injectable } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/categories.dto';
import { Category } from './../entities/categories.entity';

@Injectable()
export class CategoryService {
  private categories: Category[] = [];
  private counter = 0;

  createCategory(CreateCategoryDto: CreateCategoryDto) {
    this.counter++;

    const newCategory: Category = {
      id: this.counter,
      ...CreateCategoryDto,
    };
    this.categories.push(newCategory);
    return newCategory;
  }
  getCategories() {
    return this.categories;
  }
  getCategory(id: number) {
    const category = this.categories.find((element) => element.id === id);
    return category;
  }
  updateCategory(id: number, updateCategoryDto: UpdateCategoryDto) {
    const cateogoryId = this.categories.findIndex(
      (element) => element.id === id,
    );
    this.categories[cateogoryId] = {
      ...this.categories[cateogoryId],
      ...updateCategoryDto,
    };
    return this.categories[cateogoryId];
  }
  deleteCategory(id: number) {
    this.categories = this.categories.filter((element) => element.id !== id);
    return true;
  }
}

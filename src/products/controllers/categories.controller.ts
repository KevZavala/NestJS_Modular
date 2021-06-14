import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/categories.dto';
import { CategoryService } from '../services/category.service';
import { ParseIntPipe } from '../../common/parse-int.pipe';

@Controller('categories')
export class CategoriesController {
  constructor(private categoryS: CategoryService) {}
  @Post()
  postCategory(@Body() payload: CreateCategoryDto) {
    const category = this.categoryS.createCategory(payload);
    return {
      category,
    };
  }
  @Get()
  getCategories() {
    const categories = this.categoryS.getCategories();
    return {
      categories,
    };
  }
  @Get(':id')
  getCategory(@Param('id', ParseIntPipe) id: number) {
    const category = this.categoryS.getCategory(id);
    return {
      category,
    };
  }
  @Put(':id')
  putCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() paylaod: UpdateCategoryDto,
  ) {
    const category = this.categoryS.updateCategory(id, paylaod);
    return {
      category,
    };
  }
  @Delete(':id')
  deleteCategory(@Param('id', ParseIntPipe) id: number) {
    const deleteCategory = this.categoryS.deleteCategory(id);
    return {
      delete: deleteCategory,
    };
  }
}

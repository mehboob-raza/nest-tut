import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { UppercasePipe } from 'src/common/pipes/uppercase/uppercase.pipe';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }

    @Get()
    getAllCategories () {
            return this.categoryService.getCategories()
    }

    @Post()
    postCategory(@Body('name', new UppercasePipe()) name:string){
        return this.categoryService.postCategoryInUpperCase(name)
    }
}

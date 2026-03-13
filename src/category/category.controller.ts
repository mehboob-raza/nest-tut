import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { UppercasePipe } from 'src/common/pipes/uppercase/uppercase.pipe';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }

    @Get()
    @UseGuards(AuthGuard)
    getAllCategories() {
        return this.categoryService.getCategories()
    }

    @Post()
    postCategory(@Body('name', new UppercasePipe()) name: string) {
        return this.categoryService.postCategoryInUpperCase(name)
    }
}

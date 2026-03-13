import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
    getCategories() {
        return ['Mobile', 'Laptop', 'PCs']
    }

    postCategoryInUpperCase(name: string) {
        return { message: `Recived Category Name In Uppercase: ${name} ` }
    }
}

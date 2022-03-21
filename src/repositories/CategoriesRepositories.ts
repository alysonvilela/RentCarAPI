import { Category } from "../model/Category";

interface ICreateCategoryDTO {
  name: string
  description: string
}

export class CategoriesRepository {
  private categories: Category[]

  constructor() {
    this.categories = []
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category()

    const hasCategory = this.categories.some(category => category.name === name);
    if (hasCategory) {
      throw new Error("Categoria já existente")
    }

    Object.assign<Category, Category>(category, { name, description, created_at: new Date })
    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories
  }
}
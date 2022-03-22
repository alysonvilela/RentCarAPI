import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

interface IRequest {
    name: string
    description: string
}

export class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const alreadyExists = this.categoriesRepository.findByName(name);
    if (alreadyExists) {
      throw new Error('This category already exists.');
    }

    this.categoriesRepository.create({ name, description });
  }
}
